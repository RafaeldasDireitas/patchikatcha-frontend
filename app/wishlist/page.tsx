"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import FetchWishlist from "./FetchWishlist";
import { WishlistType } from "@/types/WishlistType";
import Loading from "../components/Loading";
import Image from "next/image";

export default function Wishlist() {
   const [wishlist, setWishlist] = useState<WishlistType[]>();

   const globalStore = useGlobalStore();
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;

   if (!userId && !jwtToken) {
      return <Loading />;
   }

   useEffect(() => {
      if (userId && jwtToken) {
         FetchWishlist({ userId, setWishlist });
      }
   }, [userId, jwtToken]);

   return (
      <div className="p-12">
         <ProductCard title={"epic"}></ProductCard>
      </div>
   );
}
