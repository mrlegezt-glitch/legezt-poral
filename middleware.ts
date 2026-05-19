import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isStudentRoute = pathname.startsWith("/student") && !pathname.startsWith("/student/login") && !pathname.startsWith("/student/register");
  const isFacultyRoute = pathname.startsWith("/faculty") && !pathname.startsWith("/faculty/login") && !pathname.startsWith("/faculty/register");

  if (isStudentRoute || isFacultyRoute) {
    const token = request.cookies.get("portal_access_token")?.value;
    if (!token) {
      const loginPath = isStudentRoute ? "/student/login" : "/faculty/login";
      return NextResponse.redirect(new URL(loginPath, request.url));
    }

    const payload = verifyAccessToken(token);
    if (!payload) {
      const loginPath = isStudentRoute ? "/student/login" : "/faculty/login";
      const response = NextResponse.redirect(new URL(loginPath, request.url));
      response.cookies.delete("portal_access_token");
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
  matcher: ["/student/:path*", "/faculty/:path*"],
};
