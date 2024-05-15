"use client";
import { RecommendedProductType } from "@/types/RecommendedProductType";
import { useEffect, useState } from "react";
import FetchRecommendedProducts from "../FetchRecommendedProducts";
import Image from "next/image";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

export default function RecommendedProducts() {
   const [recommendedProducts, setRecommendedProducts] = useState<RecommendedProductType[]>();
   const tag = "Hoodies";

   useEffect(() => {
      FetchRecommendedProducts({ tag, setRecommendedProducts });
   }, []);

   console.log(recommendedProducts);

   return (
      <>
         <div className="lg:my-4 my-2">
            <h1 className="text-3xl lg:text-start text-center text-dark font-bold quicksand-bold">Products you might also like:</h1>
         </div>
         <div className="grid lg:grid-cols-4 grid-cols-1 justify-center items-center">
            {recommendedProducts &&
               recommendedProducts.map((product) => {
                  const decodedImage = decodeURIComponent(product.image);
                  const formattedPrice = product.price;

                  return (
                     <Link href={`/product/${product.title}?productId=${product.productId}`}>
                        <ProductCard title={product.title} price={formattedPrice} image={decodedImage} />
                     </Link>
                  );
               })}
         </div>
      </>
   );
}
