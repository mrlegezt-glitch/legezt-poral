import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  // Returns current latest production release meta
  return NextResponse.json({
    versionCode: 1,
    versionName: "1.0.0",
    updateUrl: "/downloads/LeGeZt_Student_v1.0.0.apk"
  });
}
