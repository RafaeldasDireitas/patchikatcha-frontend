"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import FetchProduct from "./FetchProduct";
import { ProductType } from "@/types/ProductType";
import Loading from "@/app/components/Loading";
import Rating from "./components/Rating";
import AddATitle from "./components/AddATitle";
import Comment from "./components/Comment";
import { useGlobalStore } from "@/zustand/globalstore";
import FetchCreateReview from "./FetchCreateReview";
import IsNotAuthenticated from "@/app/components/IsNotAuthenticated";

export default function ReviewProduct({ params }: any) {
   const globalStore = useGlobalStore();
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;

   const productId = params.productId;
   const [product, setProduct] = useState<ProductType>();
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

   const createReview = () => {
      FetchCreateReview({ review });
   };

   useEffect(() => {
      FetchProduct({ productId, setProduct });
   }, []);

   if (!product) {
      return <Loading />;
   }

   if (!jwtToken && !userId) {
      return <IsNotAuthenticated />;
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
      </>
   );
}
