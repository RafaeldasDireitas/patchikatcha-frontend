"use client";
import { useEffect, useState } from "react";
import FetchGrab3Reviews from "../FetchGrab3Reviews";
import { ReviewType } from "@/types/ReviewType";
import Link from "next/link";
import Loading from "@/app/components/Loading";
import Image from "next/image";
import bear from "@/public/bear_icon.png";
import star from "@/public/star.png";
import profile from "@/public/user-icon.svg";

export default function Review({ productId, productTitle, image }: any) {
   const [reviews, setReviews] = useState<ReviewType[]>();

   useEffect(() => {
      FetchGrab3Reviews({ productId, setReviews });
   }, []);

   if (!reviews) {
      return <Loading />;
   }

   return (
      <>
         <h1 className="text-3xl text-dark josefin-sans">Main reviews:</h1>
         {reviews.map((review, key) => {
            return (
               <div key={key} className="flex flex-col my-4">
                  <div className="flex flex-row my-2">
                     <Image src={profile} width={30} height={30} alt="No bear found"></Image>
                     <h1 className="text-xl">{review.username}</h1>
                  </div>

                  <div className="flex flex-row">
                     {[...Array(review.rating)].map((review, key) => {
                        return <Image key={key} src={star} width={30} height={30} alt="No star found"></Image>;
                     })}
                     <h1>{review.title}</h1>
                  </div>

                  <div className="flex flex-row">
                     <p>{review.comment}</p>
                  </div>
               </div>
            );
         })}

         <Link href={`/review-product/${productId}`}>
            <div className="flex justify-end my-2">
               <button className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">Give us a review!</button>
            </div>
         </Link>
      </>
   );
}
