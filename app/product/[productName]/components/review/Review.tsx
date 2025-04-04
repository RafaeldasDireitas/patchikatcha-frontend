"use client";
import { useEffect, useState } from "react";
import { ReviewType } from "@/types/ReviewType";
import Loading from "@/app/components/Loading";
import Image from "next/image";
import star from "@/public/star.png";
import FetchGrabProductReviews from "../../FetchGrabProductReviews";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
import { useGlobalStore } from "@/zustand/globalstore";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import IsNotLoggedInModal from "@/app/components/IsNotLoggedInModal";

type ReviewPropType = {
   productId: string;
   productTitle: string;
   productImage: string;
};

export default function Review({ productId, productTitle, productImage }: ReviewPropType) {
   const [reviews, setReviews] = useState<ReviewType[]>([]);
   const [reviewsCount, setReviewsCount] = useState<number>(0);
   const [pageNumber, setPageNumber] = useState<number>(0);
   const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

   const globalStore = useGlobalStore();
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;
   const isAuthenticated = globalStore.isAuthenticated;

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

   // const averageRating = (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(2);

   return (
      <>
         <div className="flex lg:flex-row flex-col justify-between">
            <div className="flex lg:justify-start justify-center items-center">
               <h1 className="text-3xl text-dark ">Reviews ({reviewsCount}):</h1>
            </div>

            {!isAuthenticated || !jwtToken || !userId ? (
               <AlertDialog>
                  <AlertDialogTrigger>
                     <div className="flex lg:justify-end justify-center">
                        <button className="btn btn-circle text-white bg-button-background  hover:bg-button-focused border-none my-2 w-40">
                           Write us a review!
                        </button>
                     </div>
                  </AlertDialogTrigger>
                  <IsNotLoggedInModal />
               </AlertDialog>
            ) : (
               <div className="flex lg:justify-end justify-center">
                  <Link href={{ pathname: `/review-product/${productId}`, query: { productTitle: productTitle, productImage: productImage } }}>
                     <button className="btn btn-circle text-white bg-button-background  hover:bg-button-focused border-none my-2 w-40">
                        Write us a review!
                     </button>
                  </Link>
               </div>
            )}
         </div>

         <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 p-2">
            {reviews.map((review, key) => {
               return (
                  <ReviewCard
                     key={key + key}
                     username={review.username}
                     title={review.title}
                     createdAt={new Date(review.createdAt).toLocaleDateString()}
                     comment={review.comment}
                     rating={review.rating}
                  />
               );
            })}
         </div>

         {reviewsCount !== 0 && (
            <div className="flex justify-center mt-4">
               {!isButtonDisabled ? (
                  <button
                     disabled={isButtonDisabled}
                     onClick={loadAlLReviews}
                     className="btn btn-circle disabled:text-black disabled:bg-gray-300 text-white bg-button-background hover:bg-button-focused border-none my-2 w-40"
                  >
                     Load more
                  </button>
               ) : (
                  <></>
               )}
            </div>
         )}
      </>
   );
}
