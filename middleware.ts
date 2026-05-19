import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/auth";

function getRedirectUrl(path: string, request: NextRequest) {
  const proto = request.headers.get("x-forwarded-proto") || "https";
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || "portal.mrlegezt.me";
  return new URL(path, `${proto}://${host}`);
}
 
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
 
  // Check if user is already authenticated
  const token = request.cookies.get("portal_access_token")?.value;
  let payload = null;
  if (token) {
    payload = await verifyAccessToken(token);
  }
 
  // Auto-redirect if trying to access landing page "/" or auth pages when already logged in
  if (payload) {
    if (pathname === "/") {
      if (payload.role === "student") {
        return NextResponse.redirect(getRedirectUrl("/student/dashboard", request));
      } else if (payload.role === "faculty") {
        return NextResponse.redirect(getRedirectUrl("/faculty/dashboard", request));
      }
    }
    if (pathname === "/student/login" || pathname === "/student/register") {
      if (payload.role === "student") {
        return NextResponse.redirect(getRedirectUrl("/student/dashboard", request));
      }
    }
    if (pathname === "/faculty/login" || pathname === "/faculty/register") {
      if (payload.role === "faculty") {
        return NextResponse.redirect(getRedirectUrl("/faculty/dashboard", request));
      }
    }
  }
 
  const isStudentRoute = pathname.startsWith("/student") && !pathname.startsWith("/student/login") && !pathname.startsWith("/student/register");
  const isFacultyRoute = pathname.startsWith("/faculty") && !pathname.startsWith("/faculty/login") && !pathname.startsWith("/faculty/register");
 
  if (isStudentRoute || isFacultyRoute) {
    if (!token || !payload) {
      const loginPath = isStudentRoute ? "/student/login" : "/faculty/login";
      const response = NextResponse.redirect(getRedirectUrl(loginPath, request));
      if (token) response.cookies.delete("portal_access_token");
      return response;
    }
 
    // Role guard
    if (isStudentRoute && payload.role !== "student") {
      return NextResponse.redirect(getRedirectUrl("/student/login", request));
    }
    if (isFacultyRoute && payload.role !== "faculty") {
      return NextResponse.redirect(getRedirectUrl("/faculty/login", request));
    }
  }
 
  return NextResponse.next();
}
 
export const config = {
  matcher: ["/", "/student/:path*", "/faculty/:path*"],
};
