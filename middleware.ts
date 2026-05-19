import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/auth";
 
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
 
  // Check if user is already authenticated
  const token = request.cookies.get("portal_access_token")?.value;
  let payload = null;
  if (token) {
    payload = verifyAccessToken(token);
  }
 
  // Auto-redirect if trying to access landing page "/" or auth pages when already logged in
  if (payload) {
    if (pathname === "/") {
      if (payload.role === "student") {
        return NextResponse.redirect(new URL("/student/dashboard", request.url));
      } else if (payload.role === "faculty") {
        return NextResponse.redirect(new URL("/faculty/dashboard", request.url));
      }
    }
    if (pathname === "/student/login" || pathname === "/student/register") {
      if (payload.role === "student") {
        return NextResponse.redirect(new URL("/student/dashboard", request.url));
      }
    }
    if (pathname === "/faculty/login" || pathname === "/faculty/register") {
      if (payload.role === "faculty") {
        return NextResponse.redirect(new URL("/faculty/dashboard", request.url));
      }
    }
  }
 
  const isStudentRoute = pathname.startsWith("/student") && !pathname.startsWith("/student/login") && !pathname.startsWith("/student/register");
  const isFacultyRoute = pathname.startsWith("/faculty") && !pathname.startsWith("/faculty/login") && !pathname.startsWith("/faculty/register");
 
  if (isStudentRoute || isFacultyRoute) {
    if (!token || !payload) {
      const loginPath = isStudentRoute ? "/student/login" : "/faculty/login";
      const response = NextResponse.redirect(new URL(loginPath, request.url));
      if (token) response.cookies.delete("portal_access_token");
      return response;
    }
 
    // Role guard
    if (isStudentRoute && payload.role !== "student") {
      return NextResponse.redirect(new URL("/student/login", request.url));
    }
    if (isFacultyRoute && payload.role !== "faculty") {
      return NextResponse.redirect(new URL("/faculty/login", request.url));
    }
  }
 
  return NextResponse.next();
}
 
export const config = {
  matcher: ["/", "/student/:path*", "/faculty/:path*"],
};
