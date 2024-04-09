"use client";
import message from "@/public/Message_light.svg";
import send from "@/public/Send_hor_light.svg";
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
      const send = await fetch("/api/create-contact", {
         method: "POST",
         headers: {
            "Content-type": "application/json"
         },
         body: JSON.stringify({ email })
      });

      if (!send.ok) {
         toast.error("There was an error");
         return;
      }

      window.location.href = "/newsletter-confirmed";
   };

   return (
      <div className="flex flex-col items-center m-2 gap-y-4">
         <h1 className="text-3xl lg:text-start text-center text-dark font-bold yeseva-one-regular">Sign up for our Newsletter!</h1>
         <p className="josefin-sans">Stay up to date with new products and announcements!</p>
         <label className="flex flex-row input rounded-full bg-white gap-2 border-border-light focus-within:border-border-light border-2">
            <Image src={message} width={30} height={30} alt="No icon found"></Image>
            <input
               className="bg-white w-56 josefin-sans"
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
            ></Image>
         </label>
      </div>
   );
}
