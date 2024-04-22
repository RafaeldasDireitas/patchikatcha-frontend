"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
   const globalStore = useGlobalStore();

   return (
      <>
         <div className="p-12">
            <ProductCard title={"epic"}></ProductCard>
         </div>
      </>
   );
}
