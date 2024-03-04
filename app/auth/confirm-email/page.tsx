"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import FetchConfirmEmail from "./FetchConfirmEmail";
import turtle from "@/public/turtle.png";
import Image from "next/image";

export default function ConfirmEmail() {
   const params = useSearchParams();
   const userEmail = params.get("email");
   const token = params.get("token");

   useEffect(() => {
      FetchConfirmEmail({ token, userEmail });
   }, []);

   return (
      <>
         <div className="flex flex-col min-h-screen items-center justify-center">
            <Image src={turtle} width={200} height={200} alt="No turtle found"></Image>
            <h1 className="text-2xl text-light font-bold">Your Email has been verified successfully!</h1>
            <p className="my-4">
               You can now close this window or <span className="underline text-light hover:cursor-pointer">return to our products</span>.
            </p>
         </div>
      </>
   );
}
