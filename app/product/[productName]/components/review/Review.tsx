"use client";
import { useEffect, useState } from "react";
import { ReviewType } from "@/types/ReviewType";
import Loading from "@/app/components/Loading";
import Image from "next/image";
import star from "@/public/star.png";
import FetchGrabProductReviews from "../../FetchGrabProductReviews";
import ReviewCard from "./ReviewCard";
import Link from "next/link";

export default function Review({ productId }: any) {
   const [allReviews, setAllReviews] = useState<ReviewType[]>();
   const [reviews, setReviews] = useState<ReviewType[]>();

   useEffect(() => {
      FetchGrabProductReviews({ productId, setReviews, setAllReviews, limit: 50 });
   }, []);

   if (!reviews || !allReviews) {
      return <Loading />;
   }

   const loadAlLReviews = () => {
      setReviews(allReviews);
   };

   const averageRating = allReviews.reduce((total, review) => total + review.rating, 0) / allReviews.length;

   console.log(averageRating);

   return (
      <>
         <div className="flex flex-row justify-between mb-8">
            <div className="flex justify-start items-center">
               {[...Array(averageRating)].map((_, key) => (
                  <Image key={key} src={star} width={50} height={50} alt="Star"></Image>
               ))}

               <h1 className="mx-5">{allReviews.length} Reviews</h1>
            </div>

            <div className="flex justify-end">
               <Link href={`/review-product/${productId}`}>
                  <button className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">Write us a review!</button>
               </Link>
            </div>
         </div>

         <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            {reviews.map((review, key) => {
               return <ReviewCard key={key} username={review.username} title={review.title} createdAt={new Date(review.createdAt).toLocaleDateString()} comment={review.comment} rating={review.rating} />;
            })}
         </div>

         <div className="flex justify-center mt-4">
            <button onClick={loadAlLReviews} className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">
               Load more
            </button>
         </div>
      </>
   );
}
