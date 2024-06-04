"use client";
import { useEffect, useState } from "react";
import FetchRecommendedProducts from "../FetchRecommendedProducts";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import Skeleton from "@/app/components/Skeleton";
import { ProductInDbType } from "@/types/ProductInDbType";

export default function RecommendedProducts(tag: any) {
   const [recommendedProducts, setRecommendedProducts] = useState<ProductInDbType[]>();
   const productTag = tag.tag;

   useEffect(() => {
      FetchRecommendedProducts({ productTag, setRecommendedProducts });
   }, []);

   if (!recommendedProducts) {
      return (
         <>
            <div className="my-2">
               <h1 className="text-3xl lg:text-start text-center text-dark  ">Products you might also like:</h1>
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
         <div>
            <h1 className="text-3xl mx-4 lg:mx-0 lg:text-start text-center text-dark ">Products you might also like:</h1>
         </div>
         <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 justify-center items-center">
            {recommendedProducts &&
               recommendedProducts.map((product, key) => {
                  return (
                     <Link key={key + key} href={`/product/${product.title}?productId=${product.productId}`}>
                        <ProductCard
                           productId={product.productId}
                           title={product.title}
                           price={product.price}
                           image={product.image}
                           secondImage={product.secondImage}
                        />
                     </Link>
                  );
               })}
         </div>
      </>
   );
}
