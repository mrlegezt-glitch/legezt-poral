import { NextResponse } from "next/server";
export async function POST() {
  const res = NextResponse.json({ message: "Logged out" });
  res.cookies.delete("portal_access_token");
  res.cookies.delete("portal_refresh_token");
  return res;
}
