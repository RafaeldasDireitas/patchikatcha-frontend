"use client";
import Quantity from "@/app/product/[productName]/components/Quantity";
import { ProductsData } from "@/data/ProductsData";
import { useGlobalStore } from "@/zustand/globalstore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CartProductCard({ image, name, basePrice, price, size, color, quantity, index }: any) {
   const globalStore = useGlobalStore();
   const translateSize = Object.keys(ProductsData).find((product: any) => ProductsData[product] === size);
   const translateColor = Object.keys(ProductsData).find((product: any) => ProductsData[product] === color);
   const [formattedPrice, setFormattedPrice] = useState<string>("");

   useEffect(() => {
      if (index !== undefined && globalStore.cart[index]) {
         const priceInEuro = (globalStore.cart[index].price / 100).toFixed(2);
         setFormattedPrice(priceInEuro + " €");
      }
   }, [index, globalStore.cart]);

   const incrementQuantity = () => {
      if (quantity >= 10) {
         toast.error("You cannot add more than 10 products!");
      } else {
         globalStore.setCart({ ...globalStore.cart[index], quantity: +1, price: basePrice * (globalStore.cart[index].quantity + 1) }); // quantity + 1 because it grabs the previous quantity from globalStore
      }
   };

   const decrementQuantity = () => {
      if (quantity <= 1) {
         return;
      } else {
         globalStore.setCart({ ...globalStore.cart[index], quantity: -1, price: basePrice * (globalStore.cart[index].quantity - 1) }); // quantity - 1 because it grabs the previous quantity from globalStore
      }
   };

   const removeProduct = () => {
      globalStore.removeFromCart(index);
   };

   const openModal = () => {
      const modal: any = document.getElementById("remove_modal");

      if (modal) {
         modal.showModal();
      }
   };

   return (
      <>
         <div className="mx-auto lg:mx-0 flex justify-center lg:justify-start lg:flex-none lg:w-[600px] w-[300px] m-4 shadow-lg bg-white rounded-xl">
            <div className="flex lg:flex-row flex-col p-8 gap-8">
               <div className="flex flex-col items-center">
                  <Image src={image} width={120} height={120} alt="No image found"></Image>
                  <Quantity width="w-28" quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}></Quantity>
               </div>
               <div className="flex flex-col">
                  <h1 className="text-2xl text-light font-bold">{name}</h1>
                  <h2 className="text-center text-lg lg:text-start">{formattedPrice} + Shipping</h2>
                  <h2 className="text-center lg:text-start">Size: {translateSize}</h2>
                  <h2 className="text-center lg:text-start">Color: {translateColor}</h2>
                  <button
                     className="btn rounded-xl w-40 border-none bg-button-background hover:bg-red-800 text-white josefin-sans mt-2 items-center"
                     onClick={openModal}
                  >
                     Remove
                  </button>
               </div>
            </div>
         </div>

         <dialog id="remove_modal" className="modal">
            <div className="flex flex-col justify-center modal-box bg-white">
               <h3 className="font-bold text-lg text-center">Are you sure you want to delete this product?</h3>
               <div className="flex justify-center gap-4 mt-2">
                  <button className="btn bg-red-800 hover:bg-button-focused border-none text-white" onClick={removeProduct}>
                     Yes!
                  </button>
               </div>
            </div>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
      </>
   );
}
