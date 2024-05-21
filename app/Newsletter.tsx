"use client";
import message from "@/public/Message_light.svg";
import send from "@/public/Send_hor_light.svg";
import newsletter from "@/public/cat_newsletter.png";
import newsletterHeart from "@/public/epic-cute-hearts.png";
import { newsLetterValidation } from "@/zod/zod";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
   const [email, setEmail] = useState("");

   const handleEmail = (e: any) => {
      const email = e.target.value;
      setEmail(email);
   };

   const sendEmail = async () => {
      const isValid = await newsLetterValidation.safeParseAsync(email);

      if (!isValid.success) {
         toast.error("Email is invalid");
         return;
      }

      const send = await fetch("/api/create-contact", {
         method: "POST",
         headers: {
            "Content-type": "application/json"
         },
         body: JSON.stringify({ email })
      });

      window.location.href = "/newsletter-confirmed";
   };

   return (
      <div className="flex items-center justify-center gap-8 bg-body-background h-60">
         <div>
            <Image className="hidden lg:flex mt-10" src={newsletter} width={200} height={200} alt="No letter found" />
         </div>
         {/* < className="flex flex-col items-center gap-y-2 mr-[150px]"> */}
         <div className="flex flex-col items-center gap-y-2">
            <h1 className="text-3xl lg:text-start text-center text-dark font-bold quicksand-bold">Sign up for our Newsletter!</h1>
            <p className="josefin-sans text-center quicksand-medium">
               Be the first one to know about new designs, special events or promotional code.
            </p>
            <label className="flex flex-row input rounded-full bg-white gap-2 border-border-light focus-within:border-border-light border-2">
               <Image src={message} width={30} height={30} alt="No icon found" />
               <input
                  className="bg-white w-56 quicksand-light"
                  onChange={handleEmail}
                  value={email}
                  placeholder="Enter your email"
                  type="email"
                  id="email"
               ></input>
               <Image
                  src={send}
                  onClick={sendEmail}
                  className="hover:cursor-pointer hover:scale-110 duration-200"
                  width={30}
                  height={30}
                  alt="No icon found"
               />
            </label>
         </div>
         <div>
            <Image className="hidden lg:flex mb-60" src={newsletterHeart} width={100} height={100} alt="No letter found" />
         </div>
      </div>
   );
}
