"use client";
import Image from "next/image";
import cloud from "@/public/cloud.png";
import { useEffect, useState } from "react";
import FetchEmailVerification from "../FetchEmailVerification";
import FetchEmailToken from "../FetchEmailToken";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SendEmailModal from "./SendEmailModal";

export default function VerifyEmail() {
   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
   const [emailToken, setEmailToken] = useState("");
   const [userEmail, setUserEmail] = useState("");

   const emailData = {
      emailToken: emailToken,
      email: userEmail
   };

   useEffect(() => {
      if (emailToken) {
         FetchEmailVerification(emailData);
      }
   }, [emailToken]);

   return (
      <div className="flex flex-col min-h-screen my-16 items-center text-center justify-center gap-4">
         <Image src={cloud} width={400} height={400} alt="No turtle found" />
         <h1 className="text-2xl text-light quicksand-bold">Please verify your email!</h1>
         <p>We sent a link to your email. Please note this might take a few minutes.</p>

         <Dialog>
            <DialogTrigger asChild>
               <p>
                  Didn’t receive your link? <span className="text-light hover:cursor-pointer hover:underline">Click here to retry!</span>
               </p>
            </DialogTrigger>
            <SendEmailModal
               setUserEmail={setUserEmail}
               setEmailToken={setEmailToken}
               setIsButtonDisabled={setIsButtonDisabled}
               userEmail={userEmail}
               isButtonDisabled={isButtonDisabled}
            />
         </Dialog>
      </div>
   );
}
