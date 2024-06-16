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
import Breadcrumb from "../components/Breadcrumb";
import { categories } from "@/data/CategoriesObject";

export default function Wishlist() {
   const [wishlist, setWishlist] = useState<WishlistType[]>();
   const [href, setHref] = useState("");

   const globalStore = useGlobalStore();
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;

   useEffect(() => {
      if (userId && jwtToken) {
         FetchWishlist({ userId, jwtToken, setWishlist });
      }
   }, [userId, jwtToken]);

   useEffect(() => {
      setHref(getRandomHref());
   }, []);

   const getRandomHref = () => {
      const hrefs = categories.flatMap((category) => category.href);
      const randomIndex = Math.floor(Math.random() * hrefs.length);
      return hrefs[randomIndex];
   };

   if (!userId && !jwtToken) {
      return <IsNotAuthenticated />;
   }

   if (!wishlist) {
      return <IsNotAuthenticated />;
   }

   if (wishlist.length === 0) {
      return (
         <div className="flex flex-col min-h-screen justify-center items-center my-16">
            <Image src={raccoonHeart} width={300} height={300} alt="No raccoon found!" />
            <h1 className="text-2xl text-light ">Your wishlist is empty!</h1>
            <p className="text-center">
               Let's change that! Browse our products!{" "}
               <Link href={`${href}`} className="text-light hover:cursor-pointer">
                  Browse our products!
               </Link>
            </p>
         </div>
      );
   }

   const links = ["Home", "Wishlist"];

   return (
      <>
         <div className="flex flex-col justify-center items-center min-h-screen my-16">
            <Breadcrumb links={links} />
            <h1 className="text-3xl lg:text-start text-center text-dark ">Your wishlist</h1>
         </div>
         <div className="lg:p-12 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 mt-8 lg:mt-0">
            {wishlist.map((product, key) => {
               const formattedTitle = decodeURIComponent(product.title);

               return (
                  <div key={key + key}>
                     <Link href={{ pathname: `/product/${product.title}`, query: { productId: product.productId } }}>
                        <ProductCard title={formattedTitle} price={product.price} image={product.image}></ProductCard>
                     </Link>
                  </div>
               );
            })}
         </div>
      </>
   );
}
