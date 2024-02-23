"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import FetchConfirmEmail from "./FetchConfirmEmail";

export default function ConfirmEmail() {
   const params = useSearchParams();
   const userEmail = params.get("email");
   const token = params.get("token");

   useEffect(() => {
      FetchConfirmEmail({ token, userEmail });
   }, []);

   return (
      <>
         <div className="flex min-h-screen items-center justify-center">
            <h1>Congrats, your email was confirmed! You can now start shopping</h1>
         </div>
      </>
   );
}
