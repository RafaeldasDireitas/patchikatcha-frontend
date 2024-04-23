"use client";
import Image from "next/image";
import heart_full from "@/public/heart_full.png";
import heart_empty from "@/public/heart_empty.png";
import { useEffect, useState } from "react";
import FetchCreateWishlist from "../FetchCreateWishlist";
import FetchRemoveWishlist from "../FetchRemoveWishlist";
import { useGlobalStore } from "@/zustand/globalstore";
import FetchIsWishListed from "../FetchIsWishlisted";

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

      setIsClickable(false);
      await FetchCreateWishlist({ userId, wishlist, isWishlisted, setIsWishlisted, setIsClickable });
   };

   const removeWishlist = async () => {
      if (!isClickable) return;

      setIsClickable(false);
      await FetchRemoveWishlist({ userId, productId, isWishlisted, setIsWishlisted, setIsClickable });
   };

   return (
      <>
         <div>
            {isWishlisted ? (
               <Image onClick={removeWishlist} className="hover:scale-110 duration-200 cursor-pointer" src={heart_full} width={40} height={40} alt="heart" />
            ) : (
               <Image onClick={createWishlist} className="hover:scale-110 duration-200 cursor-pointer" src={heart_empty} width={40} height={40} alt="heart" />
            )}
         </div>
      </>
   );
}
