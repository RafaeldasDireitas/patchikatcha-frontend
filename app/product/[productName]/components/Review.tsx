"use client";
import { useEffect, useState } from "react";
import FetchGrabReviews from "../FetchGrabProductReviews";
import { ReviewType } from "@/types/ReviewType";
import Link from "next/link";
import Loading from "@/app/components/Loading";
import Image from "next/image";
import star from "@/public/star.png";
import profile from "@/public/user-icon.svg";
import FetchGrabProductReviews from "../FetchGrabProductReviews";

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

   console.log(allReviews);
   console.log(reviews);

   const averageRating = allReviews.reduce((total, review) => total + review.rating, 0) / allReviews.length;

   return (
      <>
         <div className="flex lg:flex-row flex-col text-center lg:text-start">
            <div className="lg:w-1/2">
               <div className="flex flex-col my-4">
                  <h1>{averageRating < 5 ? averageRating.toFixed(1) : 5} out of 5</h1>
                  <h1>{allReviews.length} global reviews</h1>

                  <div className="flex my-2 justify-center lg:justify-start">
                     <Link href={`/review-product/${productId}`}>
                        <button className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">Give us a review!</button>
                     </Link>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2">
               {reviews.map((review, key) => {
                  return (
                     <div key={key} className="flex flex-col my-4">
                        <div className="flex flex-row justify-center lg:justify-start my-2">
                           <Image src={profile} width={30} height={30} alt="No bear found"></Image>
                           <h1 className="text-xl m-plus-rounded-1c-regular">{review.username}</h1>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                           <p>{new Date(review.createdAt).toLocaleDateString()}</p>
                        </div>

                        <div className="flex flex-row justify-center lg:justify-start">
                           {[...Array(review.rating)].map((review, key) => {
                              return <Image key={key} src={star} width={30} height={30} alt="No star found"></Image>;
                           })}
                           <h1 className="font-bold text-dark mx-2 m-plus-rounded-1c-regular">{review.title}</h1>
                        </div>

                        <div className="flex flex-row justify-center lg:justify-start">
                           <p className="quicksand" dangerouslySetInnerHTML={{ __html: review.comment }}></p>
                        </div>
                     </div>
                  );
               })}

               <div className="flex justify-center">
                  <button onClick={loadAlLReviews} className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">
                     Load more
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
