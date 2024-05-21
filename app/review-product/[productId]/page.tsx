"use client";
import Image from "next/image";
import { useState } from "react";
import Rating from "./components/Rating";
import AddATitle from "./components/AddATitle";
import Comment from "./components/Comment";
import { useGlobalStore } from "@/zustand/globalstore";
import FetchCreateReview from "./FetchCreateReview";
import IsNotAuthenticated from "@/app/components/IsNotAuthenticated";
import { reviewValidation } from "@/zod/zod";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ReviewProduct({ params }: any) {
   const globalStore = useGlobalStore();
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;

   const useParams = useSearchParams();
   const productId = params.productId;
   const productTitle = useParams.get("productTitle");
   const productImage: any = useParams.get("productImage");
   const decodedProductTitle = productTitle && decodeURIComponent(productTitle);

   const [title, setTitle] = useState("");
   const [comment, setComment] = useState("");
   const [isChecked, setIsChecked] = useState({
      isChecked1: true,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      isChecked5: false
   });
   const [rating, setRating] = useState(1);

   const review = {
      title: title,
      productId: productId,
      productTitle: decodedProductTitle,
      productImage: productImage,
      applicationUserId: userId,
      comment: comment,
      rating: rating,
      createdAt: new Date().toISOString()
   };

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

   const createReview = async () => {
      const isValid = await reviewValidation.safeParseAsync(review);

      if (!isValid.success) {
         isValid.error.errors.forEach((error) => {
            toast.error(error.message);
         });
         return;
      }

      await FetchCreateReview({ review, jwtToken, decodedProductTitle, productId });
   };

   if (!jwtToken && !userId) {
      return <IsNotAuthenticated />;
   }

   return (
      <div className="lg:p-12 flex flex-col">
         <h1 className="text-3xl text-dark josefin-sans">Write a review:</h1>
         <div className="flex flex-row items-center my-2 mx-2">
            <Link href={{ pathname: `/product/${decodedProductTitle}`, query: { productId: productId } }}>
               <Image
                  className="rounded-xl hover:scale-105 hover:cursor-pointer duration-200"
                  src={productImage}
                  width={100}
                  height={100}
                  alt="No image found"
               />
            </Link>
            <h2 className="text-light mx-2">{decodedProductTitle}</h2>
         </div>
         <hr />
         <Rating checkRating={checkRating} isChecked={isChecked} />
         <hr />
         <AddATitle title={title} setTitle={setTitle} />
         <hr />
         <Comment comment={comment} setComment={setComment} />
         <div className="flex justify-end my-2">
            <button onClick={createReview} className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">
               Submit review!
            </button>
         </div>
      </div>
   );
}
