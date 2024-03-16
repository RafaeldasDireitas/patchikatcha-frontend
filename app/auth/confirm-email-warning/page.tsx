"use client";
import Image from "next/image";
import turtle from "@/public/turtle.png";

export default function VerifyEmail() {
   return (
      <div className="flex flex-col min-h-screen items-center justify-center">
         <Image src={turtle} width={200} height={200} alt="No turtle found"></Image>
         <h1 className="text-2xl text-light font-bold">Please verify your Email!</h1>
         <p className="my-4">
            We sent a link to your Email. Please note this can take up to a few minutes. Didn’t receive your link? Click{" "}
            <span className="underline text-light hover:cursor-pointer">here</span> to retry.
         </p>
      </div>
   );
}
