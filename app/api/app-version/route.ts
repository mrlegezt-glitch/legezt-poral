import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    success: true,
    versionCode: 12,
    versionName: "1.7",
    directDownloadUrl: "https://portal.mrlegezt.me/update.apk"
  });
}
