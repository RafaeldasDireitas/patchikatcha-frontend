"use client";
import Image from "next/image";
import fallback from "@/public/Happy_Halloween.jpg";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import FetchGrabProductReviews from "../product/[productName]/FetchGrabProductReviews";
import { ReviewType } from "@/types/ReviewType";

export default function ProductCard({ productId, title, price, image, secondImage }: any) {
   const [reviews, setReviews] = useState<ReviewType[]>([]);
   const [reviewsCount, setReviewsCount] = useState(0);

   useEffect(() => {
      FetchGrabProductReviews({ productId, reviews, setReviews, setReviewsCount, limit: 100, page: 0 });
   }, []);

   const productIVA = price * 0.23;

   const basePrice = productIVA && price + productIVA;

   const adjustedPrice = basePrice && Math.floor(basePrice / 100) + 0.99;

   const formattedPrice = basePrice && adjustedPrice.toFixed(2) + " €";

   const imageUrl = image || fallback;

   const productRating = reviews.reduce((accumulator, currentReview) => {
      return accumulator + currentReview.rating;
   }, 0);

   const averageRating = reviewsCount > 0 ? Math.round(productRating / reviewsCount) : 0;

   const fullStars = Math.max(0, Math.min(5, averageRating));
   const emptyStars = 5 - fullStars;

   return (
      <div className="flex flex-col justify-center items-center rounded-xl lg:hover:scale-110 hover:cursor-pointer duration-200">
         <div className="relative">
            <Image className="rounded-xl transition-opacity duration-500" src={imageUrl} width={275} height={275} alt="Product image" />
            <Image
               className="rounded-xl absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
               src={secondImage || imageUrl}
               width={275}
               height={275}
               alt="Second image"
            />
         </div>{" "}
         <div className="space-2">
            <h1 className="text-center mt-2 text-xl text-light truncate w-80">{title}</h1>
            <h2 className="text-center">{formattedPrice}</h2>
            <div className="flex flex-row items-center justify-center">
               {reviews.length > 0 ? (
                  <>
                     {[...Array(fullStars)].map((_, index) => (
                        <FaStar key={index} className="text-light" />
                     ))}
                     {[...Array(emptyStars)].map((_, index) => (
                        <FaRegStar key={index} className="text-light" />
                     ))}
                  </>
               ) : (
                  <>
                     {[...Array(5)].map((_, index) => (
                        <FaRegStar key={index} className="text-light" />
                     ))}
                  </>
               )}

               <h2 className="px-1">({reviewsCount})</h2>
            </div>
         </div>
      </div>
   );
}
