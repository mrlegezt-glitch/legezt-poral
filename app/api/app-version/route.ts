import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    success: true,
    versionCode: 15,
    versionName: "1.9.1",
    directDownloadUrl: "https://portal.mrlegezt.me/update.apk"
  });
}
