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

   const productIVA1 = bestSellers && bestSellers[0].price * 0.23;

   const basePrice1 = productIVA1 && bestSellers[0].price + productIVA1;

   const adjustedPrice1 = basePrice1 && Math.floor(basePrice1 / 100) + 0.99;

   const formattedPrice1 = basePrice1 && adjustedPrice1?.toFixed(2) + " €";

   const productIVA = bestSellers && bestSellers[6].price * 0.23;

   const basePrice = productIVA && bestSellers[6].price + productIVA;

   const adjustedPrice = basePrice && Math.floor(basePrice / 100) + 0.99;

   const formattedPrice2 = basePrice && adjustedPrice?.toFixed(2) + " €";

   if (!bestSellers) {
      return (
         <div className="p-12">
            <div className="lg:flex lg:flex-row hidden justify-center gap-4">
               <Skeleton widthInPx={650} heightInPx={650} />
               <Skeleton widthInPx={650} heightInPx={650} />
            </div>
            <div className="lg:hidden flex flex-col justify-center">
               <Skeleton widthInPx={264} heightInPx={264} />
               <Skeleton widthInPx={264} heightInPx={264} />
            </div>
         </div>
      );
   }

   return (
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-4 p-12">
         <Link href={{ pathname: `/product/${bestSellers[0].title}`, query: { productId: bestSellers[0].productId } }}>
            <div className="items-end relative">
               <Image
                  className="rounded-xl hover:opacity-90 hover:cursor-pointer duration-200"
                  src={bestSellers[0].image}
                  width={650}
                  height={650}
                  alt="Epic duck"
               />
               <div className="absolute bottom-0 left-0">
                  <h1 className="text-xl lg:text-3xl text-dark m-2 lg:m-4">{bestSellers[0].title}</h1>
                  <h2 className="text-xl lg:text-3xl text-dark m-2 lg:m-4">{formattedPrice1}</h2>
               </div>
            </div>
         </Link>

         <Link href={{ pathname: `/product/${bestSellers[6].title}`, query: { productId: bestSellers[6].productId } }}>
            <div className="flex flex-col items-end relative">
               <Image
                  className="rounded-xl hover:opacity-90 hover:cursor-pointer duration-200"
                  src={bestSellers[6].image}
                  width={650}
                  height={650}
                  alt="Epic duck"
               />
               <div className="absolute bottom-0 left-0">
                  <h1 className="text-xl lg:text-3xl text-dark m-2 lg:m-4">{bestSellers[6].title}</h1>
                  <h2 className="text-xl lg:text-3xl text-dark m-2 lg:m-4">{formattedPrice2}</h2>
               </div>
            </div>
         </Link>
      </div>
   );
}
