import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest, res: NextResponse) {
//   const { data, error } = await resend.emails.send({
//     from:
//   });

//   return NextResponse.json("ahah");
// }
