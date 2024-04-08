"use client";
import Quantity from "@/app/product/[productName]/components/Quantity";
import { useGlobalStore } from "@/zustand/globalstore";
import Image from "next/image";
import { toast } from "sonner";

export default function CartProductCard({ image, name, price, size, color, quantity, index }: any) {
   const globalStore = useGlobalStore();

   const incrementQuantity = () => {
      if (quantity >= 10) {
         toast.error("You cannot add more than 10 products!");
      } else {
         globalStore.setCart({ ...globalStore.cart[index], quantity: +1 });
      }
   };

   const decrementQuantity = () => {
      if (quantity <= 1) {
         return;
      } else {
         globalStore.setCart({ ...globalStore.cart[index], quantity: -1 });
      }
   };

   return (
      <div className="w-[600px] m-4 shadow-lg bg-white rounded-xl">
         <div className="flex flex-row p-8 gap-8">
            <div className="flex flex-col items-center">
               <Image src={image} width={120} height={120} alt="No image found"></Image>
               <Quantity width="w-28" quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}></Quantity>
            </div>
            <div>
               <h1 className="text-2xl text-light font-bold">{name}</h1>
               <h2>{price} + Shipping</h2>
               <h2>Size: {size}</h2>
               <h2>Color: {color}</h2>
            </div>
         </div>
      </div>
   );
}
