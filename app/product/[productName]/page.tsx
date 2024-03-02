"use client";
import { endpoints } from "@/endpoints/endpoints";
import { ProductType } from "@/types/ProductType";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FetchGrabProduct from "./FetchGrabProduct";
import { useGlobalStore } from "@/zustand/globalstore";
import Loading from "@/app/components/Loading";
import { toast } from "sonner";

export default function ProductName({ params }: any) {
   const [product, setProduct] = useState<ProductType>();
   const globalStore = useGlobalStore();

   const searchParams = useSearchParams();
   const productName = params.productName;

   const productId = searchParams.get("productId");

   useEffect(() => {
      FetchGrabProduct({ productId, setProduct });
   }, []);

   if (!product) {
      return <Loading></Loading>;
   }

   const addToCart = () => {
      if (globalStore.cart.some((cartProduct) => cartProduct.name === product.title)) {
         console.log("found");
      }

      globalStore.setCart({
         name: product.title,
         description: product.description,
         price: product?.variants[0]?.price,
         price_id: "aoijdioa",
         image: product?.images[0].src,
         quantity: 1,
         product_id: productId ?? ""
      });

      toast.success("Added to cart!");
   };

   return (
      <>
         <h1>product page</h1>
         <h1>{decodeURIComponent(productName)}</h1>
         <h1>{productId}</h1>
         <h1>{product?.description}</h1>
         <p>{product?.shop_id}</p>
         <button className="btn w-40" onClick={addToCart}>
            Add to cart
         </button>
      </>
   );
}
