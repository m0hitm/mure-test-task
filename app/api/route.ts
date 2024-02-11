import { NextRequest, NextResponse } from "next/server";
import axiosInstance from "../utils/axiosInstance";
import { URL } from "url";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url as string);
  const appName = searchParams.get("appName");
  const version = searchParams.get("version");
  const appOwner = searchParams.get("appOwner");
  const caller = searchParams.get("caller");
  const chainId = searchParams.get("chainId");

  try {
    const resp = await axiosInstance.get(
      `factory/signature?appName=${appName}&version=${version}&appOwner=${appOwner}&chainId=${chainId}&caller=${caller}`
    );

    return new NextResponse(JSON.stringify({ data: resp.data }), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(JSON.stringify({ err: err }), {
      status: 400,
    });
  }
}
