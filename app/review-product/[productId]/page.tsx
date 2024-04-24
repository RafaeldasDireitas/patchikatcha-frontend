"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import FetchProduct from "./FetchProduct";
import { ProductType } from "@/types/ProductType";
import Loading from "@/app/components/Loading";
import star from "@/public//star.png";
import Rating from "./components/Rating";

export default function ReviewProduct({ params }: any) {
   const [product, setProduct] = useState<ProductType>();
   const [isChecked, setIsChecked] = useState({
      isChecked1: true,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      isChecked5: false
   });
   const [rating, setRating] = useState(1);

   const productId = params.productId;

   const checkRating = (rating: number) => {
      setIsChecked({
         isChecked1: rating >= 1,
         isChecked2: rating >= 2,
         isChecked3: rating >= 3,
         isChecked4: rating >= 4,
         isChecked5: rating >= 5
      });

      setRating(rating);
   };

   useEffect(() => {
      FetchProduct({ productId, setProduct });
   }, []);

   if (!product) {
      return <Loading />;
   }

   return (
      <>
         <div className="lg:p-12 flex flex-col">
            <h1 className="text-3xl text-dark josefin-sans">Write a review:</h1>
            <div className="flex flex-row items-center my-2">
               <Image src={product.images[0].src} width={100} height={100} alt="No image found"></Image>
               <h2 className="text-light">{product.title}</h2>
            </div>
            <hr />
            <Rating checkRating={checkRating} isChecked={isChecked} />
         </div>
      </>
   );
}
