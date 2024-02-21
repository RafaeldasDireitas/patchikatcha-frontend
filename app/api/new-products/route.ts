import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
   const data = await fetch(`${process.env.NEXT_PUBLIC_PRINTIFY_BASE_URL}shops/${process.env.NEXT_PUBLIC_PRINTIFY_SHOP_ID}/products.json`, {
      method: "GET",
      headers: {
         Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRINTIFY_API_KEY}`,
         "Content-Type": "application/json;charset=utf-8"
      }
   });

   const dataJson = await data.json();

   const slicedData = dataJson.data.slice(0, 3);

   return NextResponse.json(slicedData);
}

export const revalidate = 0; //set to 3600 seconds when in prod
