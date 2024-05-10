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
   const [reviews, setReviews] = useState<ReviewType[]>([]);
   const [reviewsCount, setReviewsCount] = useState<number>(0);
   const [pageNumber, setPageNumber] = useState<number>(0);
   const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

   useEffect(() => {
      FetchGrabProductReviews({ productId, reviews, setReviews, setReviewsCount, setIsButtonDisabled, limit: 4, page: pageNumber });
   }, []);

   if (!reviews) {
      return <Loading />;
   }

   const loadAlLReviews = () => {
      setPageNumber(pageNumber + 1);
      FetchGrabProductReviews({ productId, reviews, setReviews, setReviewsCount, setIsButtonDisabled, limit: 4, page: pageNumber });
   };

   const averageRating = (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(2);

   return (
      <>
         <div className="flex flex-row justify-between mb-8">
            <div className="flex justify-start items-center">
               {averageRating && [...Array(averageRating)].map((_, key) => <Image key={key} src={star} width={50} height={50} alt="Star"></Image>)}
               <h1 className="mx-5 quicksand-medium">{reviewsCount} Reviews</h1>
            </div>

            <div className="flex justify-end">
               <Link href={`/review-product/${productId}`}>
                  <button className="btn btn-circle text-white bg-button-background quicksand-semibold hover:bg-button-focused border-none my-2 w-40">
                     Write us a review!
                  </button>
               </Link>
            </div>
         </div>

         <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            {reviews.map((review, key) => {
               return (
                  <ReviewCard
                     key={key}
                     username={review.username}
                     title={review.title}
                     createdAt={new Date(review.createdAt).toLocaleDateString()}
                     comment={review.comment}
                     rating={review.rating}
                  />
               );
            })}
         </div>

         <div className="flex justify-center mt-4">
            <button
               disabled={isButtonDisabled}
               onClick={loadAlLReviews}
               className="btn btn-circle text-white bg-button-background hover:bg-button-focused border-none my-2 w-40"
            >
               Load more
            </button>
         </div>
      </>
   );
}
