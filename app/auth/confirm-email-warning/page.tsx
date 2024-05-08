"use client";
import Image from "next/image";
import turtle from "@/public/turtle.png";
import cloud from "@/public/cloud.png";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import FetchEmailVerification from "../FetchEmailVerification";
import { useGlobalStore } from "@/zustand/globalstore";
import FetchEmailToken from "../FetchEmailToken";

export default function VerifyEmail() {
   const globalStore = useGlobalStore();

   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
   const [emailToken, setEmailToken] = useState("");
   const [userEmail, setUserEmail] = useState("");

   const emailData = {
      emailToken: emailToken,
      email: userEmail
   };

   const emailHandler = (e: any) => {
      const userEmail = e.target.value;
      setUserEmail(userEmail);
   };

   const handleSendVerificationEmail = async () => {
      setIsButtonDisabled(true);
      FetchEmailToken({ email: userEmail, setEmailToken });
   };

   useEffect(() => {
      if (emailToken) {
         FetchEmailVerification(emailData);
      }
   }, [emailToken]);

   return (
      <div className="flex flex-col min-h-screen items-center justify-center">
         <Image className="mb-4" src={cloud} width={400} height={400} alt="No turtle found"></Image>
         <h1 className="text-2xl text-light quicksand-bold">Please verify your email!</h1>
         <p className="my-4 quicksand-medium">We sent a link to your email. Please note this can take up to a few minutes.</p>
         <p className="quicksand-medium">Didn’t receive your link? Type it again to retry!</p>
         <input
            type="text"
            placeholder="example@email.com"
            className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white quicksand-light"
            id="email"
            onChange={emailHandler}
            value={userEmail}
         />
         <button
            className="btn btn-circle w-60 bg-button-background hover:bg-button-focused text-white my-1 border-none"
            onClick={handleSendVerificationEmail}
            disabled={isButtonDisabled}
         >
            Submit
         </button>
      </div>
   );
}
