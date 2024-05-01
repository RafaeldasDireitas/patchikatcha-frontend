"use client";
import message from "@/public/Message_light.svg";
import send from "@/public/Send_hor_light.svg";
import newsletter from "@/public/newsletter_image.png";
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
      <div className="flex flex-col items-center justify-center gap-y-4 bg-body-background h-60 relative">
         <Image className="hidden lg:block absolute left-64" src={newsletter} width={150} height={150} alt="No letter found"></Image>
         <h1 className="text-3xl lg:text-start text-center text-dark font-bold yeseva-one-regular">Sign up for our Newsletter!</h1>
         <p className="josefin-sans text-center">Be the first one to know about new designs, special events or promotional code.</p>
         <label className="flex flex-row input rounded-full bg-white gap-2 border-border-light focus-within:border-border-light border-2">
            <Image src={message} width={30} height={30} alt="No icon found"></Image>
            <input className="bg-white w-56 josefin-sans" onChange={handleEmail} value={email} placeholder="Enter your email" type="email" id="email"></input>
            <Image src={send} onClick={sendEmail} className="hover:cursor-pointer hover:scale-110 duration-200" width={30} height={30} alt="No icon found"></Image>
         </label>
      </div>
   );
}
