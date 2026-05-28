import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    success: true,
    versionCode: 13,
    versionName: "1.8",
    directDownloadUrl: "https://portal.mrlegezt.me/update.apk"
  });
}
