import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    success: true,
    versionCode: 11,
    versionName: "1.6",
    directDownloadUrl: "https://portal.mrlegezt.me/update.apk"
  });
}
