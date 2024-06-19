"use client";
import { useEffect, useRef, useState } from "react";
import FetchBestSellers from "./FetchBestSellers";
import { BestSellerType } from "@/types/BestSellerType";
import Link from "next/link";
import Skeleton from "./components/Skeleton";
import Image from "next/image";

export default function BestSellers() {
   const [bestSellers, setBestSellers] = useState<BestSellerType[]>();
   const productListRef: any = useRef(null);

   useEffect(() => {
      FetchBestSellers({ setBestSellers });
   }, []);

   if (!bestSellers) {
      return (
         <div className="p-12">
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-2">
               <Skeleton widthInPx={650} heightInPx={650} />
               <Skeleton widthInPx={650} heightInPx={650} />
            </div>
            <div className="lg:hidden grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-2">
               <Skeleton widthInPx={264} heightInPx={264} />
               <Skeleton widthInPx={264} heightInPx={264} />
            </div>
         </div>
      );
   }

   return (
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-2 md:gap-4 p-12">
         {bestSellers.map((bestSeller, key) => {
            const productIVA1 = bestSellers && bestSeller.price * 0.23;

            const basePrice = productIVA1 && bestSeller.price + productIVA1;

            const adjustedPrice = basePrice && Math.floor(basePrice / 100) + 0.99;

            const formattedPrice = basePrice && adjustedPrice?.toFixed(2) + " €";

            return (
               <Link key={key + key} href={{ pathname: `/product/${bestSeller.title}`, query: { productId: bestSeller.productId } }}>
                  <div className="items-end relative">
                     <Image
                        className="rounded-xl hover:opacity-90 hover:cursor-pointer duration-200"
                        src={bestSeller.image}
                        width={650}
                        height={650}
                        alt="Epic duck"
                     />
                     <div className="absolute bottom-0 left-0">
                        <h1 className="text-xl lg:text-3xl text-dark m-2 lg:m-4">{bestSeller.title}</h1>
                        <h2 className="text-xl lg:text-3xl text-dark m-2 lg:m-4">{formattedPrice}</h2>
                     </div>
                  </div>
               </Link>
            );
         })}
      </div>
   );
}
