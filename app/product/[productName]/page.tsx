"use client";
import { useSearchParams } from "next/navigation";

export default function ProductName({ params }: any) {
   const searchParams = useSearchParams();
   const productName = params.productName;

   const productId = searchParams.get("productId");

   console.log(productName);

   return (
      <>
         <h1>product page</h1>
         <h1>{decodeURIComponent(productName)}</h1>
         <h1>{productId}</h1>
      </>
   );
}
