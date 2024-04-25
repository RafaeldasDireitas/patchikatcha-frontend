"use client";

import { useEffect, useState } from "react";
import FetchGrab3Reviews from "../FetchGrab3Reviews";
import { ReviewType } from "@/types/ReviewType";
import Link from "next/link";

export default function Review({ productId, productTitle, image }: any) {
   const [reviews, setReviews] = useState<ReviewType[]>();

   useEffect(() => {
      FetchGrab3Reviews({ productId, setReviews });
   }, []);

   return (
      <>
         {reviews &&
            reviews.map((review) => {
               return <h1>{review.comment}</h1>;
            })}
         <Link href={`/review-product/${productId}`}>
            <div className="flex justify-end my-2">
               <button className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">Give us a review!</button>
            </div>
         </Link>
      </>
   );
}
