"use client";
import { redirection } from "@/endpoints/redirection";
import message from "@/public/Message_light.svg";
import send from "@/public/Send_hor_light.svg";
import newsletter from "@/public/cat_newsletter.png";
import newsletterHeart from "@/public/epic-cute-hearts.png";
import { newsLetterValidation } from "@/zod/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { GiLoveLetter } from "react-icons/gi";
import { CiLocationArrow1 } from "react-icons/ci";
import { SlEnvolopeLetter } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { BiLike } from "react-icons/bi";

export default function Newsletter() {
   const [email, setEmail] = useState("");
   const [isSent, setIsSent] = useState(false);

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

      if (send.ok) {
         setIsSent(true);
      }
   };

   return (
      <div className="flex items-center justify-center gap-8 bg-body-background">
         <div>
            <Image className="hidden lg:flex mt-24" src={newsletter} width={200} height={200} alt="No letter found" />
         </div>
         {/* < className="flex flex-col items-center gap-y-2 mr-[150px]"> */}
         <div className="flex flex-col items-center gap-y-2">
            <h1 className="text-3xl lg:text-start text-center text-dark mt-4 lg:mt-0">Sign up for our Newsletter!</h1>
            <p className="josefin-sans text-center ">Be the first one to know about new designs, special events or promotional codes.</p>
            <label className="flex flex-row input rounded-full bg-white gap-2 border-border-light focus-within:border-border-light border-2">
               <MdEmail size={30} className="text-light my-auto" />
               <input className="bg-white w-56 " onChange={handleEmail} value={email} placeholder="Enter your email" type="email" id="email"></input>
               {isSent ? (
                  <BiLike size={25} className="text-light my-auto" />
               ) : (
                  <CiLocationArrow1 size={25} onClick={sendEmail} className="hover:cursor-pointer lg:hover:scale-110 duration-200 my-auto" />
               )}
            </label>
            <p className="text-center mb-4 lg:mb-0">
               By clicking the button you agree to our{" "}
               <span>
                  <Link href={"/terms-and-services"} className="hover:underline text-light hover:cursor-pointer">
                     Terms and Services.
                  </Link>
               </span>
            </p>
         </div>
         <div>
            <Image className="hidden lg:flex mb-52" src={newsletterHeart} width={100} height={100} alt="No letter found" />
         </div>
      </div>
   );
}
