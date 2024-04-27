"use client";
import Image from "next/image";
import heart_full from "@/public/heart_full.png";
import heart_empty from "@/public/heart_empty.png";
import { useEffect, useState } from "react";
import FetchCreateWishlist from "../FetchCreateWishlist";
import FetchRemoveWishlist from "../FetchRemoveWishlist";
import { useGlobalStore } from "@/zustand/globalstore";
import FetchIsWishListed from "../FetchIsWishlisted";
import { toast } from "sonner";

export default function Wishlist({ userId, title, price, image, productId }: any) {
   const globalStore = useGlobalStore();
   const jwtToken = globalStore.jwtToken;

   const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
   const [isClickable, setIsClickable] = useState<boolean>(true);

   const wishlist = {
      applicationUserId: userId,
      title: title,
      price: Math.trunc(price),
      image: image,
      productId: productId
   };

   useEffect(() => {
      if (userId && jwtToken) {
         FetchIsWishListed({ userId, productId, jwtToken, setIsWishlisted });
      }
   }, [userId, jwtToken]);

   const createWishlist = async () => {
      if (!isClickable) return;

      if (!jwtToken && !userId) {
         toast.error("You must be logged in to wishlist!");
         return;
      }

      setIsClickable(false);
      await FetchCreateWishlist({ userId, wishlist, isWishlisted, setIsWishlisted, setIsClickable });
   };

   const removeWishlist = async () => {
      if (!isClickable) return;

      if (!jwtToken && !userId) {
         toast.error("You must be logged in to wishlist!");
         return;
      }

      setIsClickable(false);
      await FetchRemoveWishlist({ userId, productId, isWishlisted, setIsWishlisted, setIsClickable });
   };

   return (
      <>
         <div>
            {isWishlisted ? (
               <>
                  {/* <Image onClick={removeWishlist} className="hover:scale-110 duration-200 cursor-pointer" src={heart_full} width={40} height={40} alt="heart" /> */}
                  <button onClick={removeWishlist} className="btn w-96 btn-circle hover:bg-button-focused bg-body-background border-none text-white">
                     Added to wishlist!
                  </button>
               </>
            ) : (
               <>
                  {/* <Image onClick={createWishlist} className="hover:scale-110 duration-200 cursor-pointer" src={heart_empty} width={40} height={40} alt="heart" /> */}
                  <button onClick={createWishlist} className="btn w-96 btn-circle hover:bg-button-focused hover:text-white bg-transparent border-2 border-border-light text-light">
                     Add to wishlist
                  </button>
               </>
            )}
         </div>
      </>
   );
}
