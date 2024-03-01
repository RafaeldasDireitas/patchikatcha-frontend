"use client";

import { useGlobalStore } from "@/zustand/globalstore";

export default function ProductCard() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   console.log(cart);

   return (
      <div className="flex flex-row p-4">
         <button className="btn btn-square w-30 h-30 btn-lg bg-slate-600"></button>
         <h1 className="px-2 text-lg">Epic Galaxy Hoodie</h1>
      </div>
   );
}
