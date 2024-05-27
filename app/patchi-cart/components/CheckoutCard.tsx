"use client";
import Image from "next/image";
import turtle from "@/public/turtle.png";
import Link from "next/link";
import { useGlobalStore } from "@/zustand/globalstore";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import IsNotLoggedInModal from "@/app/components/IsNotLoggedInModal";
import visa from "@/public/visa_icon.svg";
import mastercard from "@/public/mastercard_icon.svg";
import paypal from "@/public/paypal_icon.svg";
import dinoCart from "@/public/dinoCart.png";

export default function CheckoutCard({ totalPrice, totalShipping }: any) {
   const globalStore = useGlobalStore();
   const jwtToken = globalStore.jwtToken;
   const userId = globalStore.userId;
   const isAuthenticated = globalStore.isAuthenticated;

   const formattedPrice = (totalPrice / 100).toFixed(2) + " €";
   const formattedShipping = (totalShipping / 100).toFixed(2) + " €";
   const total = ((totalPrice + totalShipping) / 100).toFixed(2) + " €";

   return (
      <div className="mx-auto w-96 bg-white shadow-lg rounded-xl lg:top-52 z-10">
         <div className="flex flex-col p-8">
            <div className="flex justify-center">
               <Image src={dinoCart} width={170} height={170} alt="No image found" />
            </div>

            <div className="flex flex-col">
               <div className="flex flex-row justify-center">
                  <Image className="mx-1" src={visa} width={50} height={50} alt="Visa icon"></Image>
                  <Image className="mx-1" src={mastercard} width={50} height={50} alt="Mastercard icon"></Image>
                  <Image className="mx-1" src={paypal} width={50} height={50} alt="Paypal icon"></Image>
               </div>
               <h1 className="text-xl ">Order details:</h1>
               <div className="flex flex-row justify-between my-2 ">
                  <h1 className="text-start">Subtotal:</h1>
                  <h1 className="text-end">{formattedPrice}</h1>
               </div>
               <div className="flex flex-row justify-between my-2 ">
                  <h1 className="text-start">Tax:</h1>
                  <h1 className="text-end">Calculated at checkout</h1>
               </div>
               <div className="flex flex-row justify-between my-2 ">
                  <h1 className="text-start">Shipping:</h1>
                  <h1 className="text-end">{formattedShipping}</h1>
               </div>
               <div className="flex flex-row justify-between my-2 ">
                  <h1 className="text-start">Total:</h1>
                  <h1 className="text-end">{total}</h1>
               </div>
               <div className="flex justify-center mt-2">
                  {!isAuthenticated || !jwtToken || !userId ? (
                     <AlertDialog>
                        <AlertDialogTrigger>
                           <button className="btn btn-circle w-80 bg-button-background hover:bg-button-focused border-none text-white ">
                              Checkout
                           </button>
                        </AlertDialogTrigger>
                        <IsNotLoggedInModal />
                     </AlertDialog>
                  ) : (
                     <Link href={"/checkout"}>
                        <button className="btn btn-circle w-80 bg-button-background hover:bg-button-focused border-none text-white ">Checkout</button>
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
