"use client";
import { endpoints } from "@/endpoints/endpoints";
import { ProductType } from "@/types/ProductType";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductName({ params }: any) {
   const [product, setProduct] = useState<ProductType>();

   const searchParams = useSearchParams();
   const productName = params.productName;

   const productId = searchParams.get("productId");

   const grabProduct = async () => {
      const product = await fetch(endpoints.url + endpoints.grabProduct(productId), {
         method: "GET",
         headers: {
            "Content-Type": "application/json"
         }
      });

      const data = await product.json();
      setProduct(data);
   };

   useEffect(() => {
      grabProduct();
   }, []);

   return (
      <>
         <h1>product page</h1>
         <h1>{decodeURIComponent(productName)}</h1>
         <h1>{productId}</h1>
         <h1>{product?.description}</h1>
         <p>{product?.shop_id}</p>
      </>
   );
}
