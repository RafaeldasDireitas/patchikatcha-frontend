"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import FetchWishlist from "./FetchWishlist";
import { WishlistType } from "@/types/WishlistType";
import Link from "next/link";
import IsNotAuthenticated from "../components/IsNotAuthenticated";

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
         FetchWishlist({ userId, setWishlist });
      }
   }, [userId, jwtToken]);

   return (
      <div className="lg:p-12 grid lg:grid-cols-3 grid-cols-1 gap-8">
         {wishlist &&
            wishlist.map((product, key) => {
               const formattedPrice = (product.price / 100).toFixed(2) + " €";
               const formattedTitle = decodeURIComponent(product.title);

               return (
                  <div>
                     <Link key={key} href={{ pathname: `/product/${product.title}`, query: { productId: product.productId } }}>
                        <ProductCard title={formattedTitle} price={formattedPrice} image={product.image}></ProductCard>
                     </Link>
                  </div>
               );
            })}
      </div>
   );
}
