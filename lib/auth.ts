import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const ACCESS_SECRET = process.env.JWT_SECRET || "LeGeZt_Portal_JWT_Super_Secret_2025_X9mK!@#v3rYs3cur3";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "LeGeZt_Refresh_Token_Secret_X9mKv3ryS3cur3!@#2025";
const ACCESS_EXPIRY = "30d";
const REFRESH_EXPIRY = "90d";

export type TokenPayload = {
  userId: string;
  role: "student" | "faculty";
  username: string;
  email: string;
};

export function signAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRY });
}

export function signRefreshToken(payload: TokenPayload): string {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRY });
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  return decodeURIComponent(
    atob(base64)
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  );
}

function base64UrlToBuffer(str: string): Uint8Array {
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) {
    base64 += '=';
  }
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function verifyJWT(token: string, secret: string): Promise<TokenPayload | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [headerB64, payloadB64, signatureB64] = parts;
    
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    
    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    
    const data = encoder.encode(`${headerB64}.${payloadB64}`);
    const sigBuf = base64UrlToBuffer(signatureB64);
    
    const isValid = await crypto.subtle.verify(
      'HMAC',
      key,
      sigBuf as any,
      data as any
    );
    
    if (!isValid) return null;
    
    const payloadStr = base64UrlDecode(payloadB64);
    const payload = JSON.parse(payloadStr) as TokenPayload & { exp?: number };
    
    if (payload.exp && Date.now() >= payload.exp * 1000) return null;
    
    return payload;
  } catch (err) {
    console.error("[JWT Verification] Error:", err);
    return null;
  }
}

export async function verifyAccessToken(token: string): Promise<TokenPayload | null> {
  return verifyJWT(token, ACCESS_SECRET);
}

export async function verifyRefreshToken(token: string): Promise<TokenPayload | null> {
  return verifyJWT(token, REFRESH_SECRET);
}

/** Read portal session from httpOnly cookie (server-side only) */
export async function getPortalSession(): Promise<TokenPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("portal_access_token")?.value;
  if (!token) return null;
  return await verifyAccessToken(token);
}

/** In-memory rate limiter using greedy approach: block soonest violators first */
const loginAttempts = new Map<string, { count: number; firstAttempt: number }>();
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

export function checkRateLimit(ip: string): { allowed: boolean; remainingMs?: number } {
  const now = Date.now();
  const record = loginAttempts.get(ip);

  if (!record || now - record.firstAttempt > WINDOW_MS) {
    loginAttempts.set(ip, { count: 1, firstAttempt: now });
    return { allowed: true };
  }

  if (record.count >= MAX_ATTEMPTS) {
    const remainingMs = WINDOW_MS - (now - record.firstAttempt);
    return { allowed: false, remainingMs };
  }

  record.count++;
  return { allowed: true };
}

export function resetRateLimit(ip: string): void {
  loginAttempts.delete(ip);
}
