import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
   const publishProductId = await req.json();

   const dataBody = {
      external: {
         id: publishProductId as string,
         handle: "http://localhost:3000"
      }
   };

   const data = await fetch(
      `${process.env.NEXT_PUBLIC_PRINTIFY_BASE_URL}shops/${process.env.NEXT_PUBLIC_PRINTIFY_SHOP_ID}/products/${publishProductId}/publishing_succeeded.json`,
      {
         method: "POST",
         headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PRINTIFY_API_KEY}`,
            "Content-Type": "application/json;charset=utf-8"
         },
         body: JSON.stringify(dataBody)
      }
   );

   const shirt = "65d3deed7b952ac4310b941e";

   if (!data.ok) {
      console.log("Something went wrong, try again.");
   }

   return NextResponse.json("Product updated");
}

export const revalidate = 0; //set to 3600 seconds when in prod
