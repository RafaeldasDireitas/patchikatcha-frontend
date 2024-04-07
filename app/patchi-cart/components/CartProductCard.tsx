"use client";

import Quantity from "@/app/product/[productName]/components/Quantity";
import { useGlobalStore } from "@/zustand/globalstore";
import Image from "next/image";

export default function CartProductCard() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   return (
      <div className="w-[600px] m-4 shadow-lg bg-white rounded-xl">
         <div className="flex flex-row p-8 gap-8">
            <div className="flex flex-col items-center">
               <Image src={cart[0].image} width={120} height={120} alt="No image found"></Image>
               <Quantity width="w-28" quantity="0"></Quantity>
            </div>
            <div>
               <h1 className="text-xl">{cart[0].name}</h1>
               <h2>{cart[0].price} € + Shipping</h2>
               <h2>Size: {cart[0].size}</h2>
               <h2>Color: {cart[0].color}</h2>
            </div>
         </div>
      </div>
   );
}
