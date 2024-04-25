"use client";
import { useEffect, useState } from "react";
import FetchGrabReviews from "../FetchGrabReviews";
import { ReviewType } from "@/types/ReviewType";
import Link from "next/link";
import Loading from "@/app/components/Loading";
import Image from "next/image";
import star from "@/public/star.png";
import profile from "@/public/user-icon.svg";

export default function Review({ productId }: any) {
   const [reviews, setReviews] = useState<ReviewType[]>();

   useEffect(() => {
      FetchGrabReviews({ productId, setReviews, limit: 3 });
   }, []);

   if (!reviews) {
      return <Loading />;
   }

   const loadAlLReviews = () => {
      FetchGrabReviews({ productId, setReviews, limit: 50 });
   };

   const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;

   return (
      <>
         <h1 className="text-3xl text-dark josefin-sans">Main reviews:</h1>
         <div className="flex flex-row">
            <div className="w-1/2">
               <div className="flex flex-col my-4">
                  <h1>{averageRating.toFixed(1)} out of 5</h1>
                  <h1>{reviews.length} global reviews</h1>

                  <div className="flex my-2">
                     <Link href={`/review-product/${productId}`}>
                        <button className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">Give us a review!</button>
                     </Link>
                  </div>
               </div>
            </div>

            <div className="w-1/2">
               {reviews.map((review, key) => {
                  return (
                     <div key={key} className="flex flex-col my-4">
                        <div className="flex flex-row my-2">
                           <Image src={profile} width={30} height={30} alt="No bear found"></Image>
                           <h1 className="text-xl">{review.username}</h1>
                        </div>

                        <div>
                           <p>{new Date(review.createdAt).toLocaleDateString()}</p>
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
