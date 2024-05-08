"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import FetchWishlist from "./FetchWishlist";
import { WishlistType } from "@/types/WishlistType";
import Link from "next/link";
import IsNotAuthenticated from "../components/IsNotAuthenticated";
import raccoonHeart from "@/public/raccoon_heart.png";
import Image from "next/image";

export default function Wishlist() {
   const [wishlist, setWishlist] = useState<WishlistType[]>();

   const globalStore = useGlobalStore();
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;

   if (!userId && !jwtToken) {
      return <IsNotAuthenticated />;
   }

   useEffect(() => {
      if (userId && jwtToken) {
         FetchWishlist({ userId, jwtToken, setWishlist });
      }
   }, [userId, jwtToken]);

   if (wishlist?.length === 0) {
      return (
         <>
            <div className="flex flex-col min-h-screen justify-center items-center">
               <Image src={raccoonHeart} width={300} height={300} alt="No raccoon found!"></Image>
               <h1 className="text-2xl text-light font-bold">No items in your wishlist yet!</h1>
            </div>
         </>
      );
   }

   return (
      <div className="lg:p-12 grid lg:grid-cols-3 grid-cols-1 gap-8">
         {wishlist &&
            wishlist.map((product, key) => {
               const formattedTitle = decodeURIComponent(product.title);

               return (
                  <div>
                     <Link key={key} href={{ pathname: `/product/${product.title}`, query: { productId: product.productId } }}>
                        <ProductCard title={formattedTitle} price={product.price} image={product.image}></ProductCard>
                     </Link>
                  </div>
               );
            })}
      </div>
   );
}
