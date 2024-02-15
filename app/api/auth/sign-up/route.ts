import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password, roles } = await req.json();
  // const data = await req.json();
  console.log(roles);
  return NextResponse.json("AH");
}
