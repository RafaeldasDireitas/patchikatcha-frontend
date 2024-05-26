"use client";

import { useEffect, useRef, useState } from "react";
import FetchBestSellers from "./FetchBestSellers";
import { BestSellerType } from "@/types/BestSellerType";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Skeleton from "./components/Skeleton";

export default function BestSellers() {
   const [bestSellers, setBestSellers] = useState<BestSellerType[]>();
   const productListRef: any = useRef(null);

   const scrollLeft = () => {
      if (productListRef.current) {
         productListRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
   };

   const scrollRight = () => {
      if (productListRef.current) {
         productListRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
   };

   useEffect(() => {
      FetchBestSellers({ setBestSellers });
   }, []);

   if (!bestSellers) {
      return (
         <div className="flex flex-col justify-center items-center lg:p-12">
            <h1 className="text-3xl lg:text-start text-center text-dark quicksand-bold">Best Sellers</h1>
            <p className="py-4 lg:text-start text-center">Here is just a little description that is a little bit bigger than normal body copy.</p>

            <div className="flex flex-row overflow-x-auto w-full justify-center gap-8 lg:p-12 my-8">
               <Skeleton widthInPx={320} heightInPx={322} />
               <div className="lg:flex hidden gap-8">
                  <Skeleton widthInPx={320} heightInPx={322} />
                  <Skeleton widthInPx={320} heightInPx={322} />
                  <Skeleton widthInPx={320} heightInPx={322} />
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className="lg:p-12 flex flex-col justify-center items-center relative my-8 lg:my-0">
         <h1 className="text-3xl lg:text-start text-center text-dark font-bold quicksand-bold">Best Sellers</h1>
         <p className="my-2 mx-4 lg:mx-0 lg:text-start text-center quicksand-medium">
            Here is just a little description that is a little bit bigger than normal body copy.
         </p>
         <div ref={productListRef} className="flex flex-row px-6 lg:px-0 overflow-x-auto hide-scroll w-full lg:gap-8 lg:p-12 mt-4 lg:mt-0">
            {bestSellers &&
               bestSellers.map((product, key) => {
                  return (
                     <Link key={key + key} href={{ pathname: `/product/${product.title}`, query: { productId: product.productId } }}>
                        <ProductCard key={key + key} title={product.title} price={product.price} image={product.image} />
                     </Link>
                  );
               })}
         </div>
         <button
            className="btn absolute hidden lg:flex left-4 z-50 btn-circle bg-button-background hover:bg-button-focused text-white border-none"
            onClick={scrollLeft}
         >
            <FaArrowLeft />
         </button>

         <button
            className="btn absolute flex right-4 z-50 btn-circle bg-button-background hover:bg-button-focused text-white border-none"
            onClick={scrollRight}
         >
            <FaArrowRight />
         </button>
      </div>
   );
}
