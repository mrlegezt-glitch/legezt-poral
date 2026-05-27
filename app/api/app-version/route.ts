import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    success: true,
    versionCode: 10,
    versionName: "1.5",
    directDownloadUrl: "https://drive.google.com/uc?export=download&id=16AIqV0cCbOjIHUMn6lpVRV2nK_V_g3HO"
  });
}
