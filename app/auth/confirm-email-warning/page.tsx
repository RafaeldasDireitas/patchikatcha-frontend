"use client";
import Image from "next/image";
import cloud from "@/public/cloud.png";
import { useEffect, useState } from "react";
import FetchEmailVerification from "../FetchEmailVerification";
import FetchEmailToken from "../FetchEmailToken";

export default function VerifyEmail() {
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
      <div className="flex flex-col min-h-screen items-center justify-center gap-4">
         <Image src={cloud} width={400} height={400} alt="No turtle found" />
         <h1 className="text-2xl text-light quicksand-bold">Please verify your email!</h1>
         <p>We sent a link to your email. Please note this might take a few minutes.</p>
         <p>
            Didn’t receive your link? <span className="text-light">Type it again to retry!</span>
         </p>
         <input
            type="text"
            placeholder="example@email.com"
            className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] w-full bg-white quicksand-light"
            id="email"
            onChange={emailHandler}
            value={userEmail}
         />
         <button
            className="btn btn-circle w-60 bg-button-background hover:bg-button-focused text-white border-none"
            onClick={handleSendVerificationEmail}
            disabled={isButtonDisabled}
         >
            Submit
         </button>
      </div>
   );
}
