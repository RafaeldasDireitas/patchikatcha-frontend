"use client";
import { RecommendedProductType } from "@/types/RecommendedProductType";
import { useEffect, useState } from "react";
import FetchRecommendedProducts from "../FetchRecommendedProducts";
import Image from "next/image";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import Skeleton from "@/app/components/Skeleton";

export default function RecommendedProducts(tag: any) {
   const [recommendedProducts, setRecommendedProducts] = useState<RecommendedProductType[]>();
   const productTag = tag.tag;

   useEffect(() => {
      FetchRecommendedProducts({ productTag, setRecommendedProducts });
   }, []);

   if (!recommendedProducts) {
      return (
         <>
            <div className="my-2">
               <h1 className="text-3xl lg:text-start text-center text-dark font-bold quicksand-bold">Products you might also like:</h1>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 justify-center items-center">
               <Skeleton widthInPx={250} heightInPx={250} />
               <Skeleton widthInPx={250} heightInPx={250} />
               <Skeleton widthInPx={250} heightInPx={250} />
               <Skeleton widthInPx={250} heightInPx={250} />
            </div>
         </>
      );
   }

   return (
      <>
         <div className="my-2">
            <h1 className="text-3xl lg:text-start text-center text-dark quicksand-bold">Products you might also like:</h1>
         </div>
         <div className="grid lg:grid-cols-4 grid-cols-1 justify-center items-center">
            {recommendedProducts &&
               recommendedProducts.map((product) => {
                  return (
                     <Link href={`/product/${product.title}?productId=${product.productId}`}>
                        <ProductCard title={product.title} price={product.price} image={product.image} />
                     </Link>
                  );
               })}
         </div>
      </>
   );
}
