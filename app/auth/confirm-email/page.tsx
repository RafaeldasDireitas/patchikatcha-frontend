"use client";
import { endpoints } from "@/endpoints/endpoints";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ConfirmEmail() {
   const params = useSearchParams();
   const userEmail = params.get("email");
   const token = params.get("token");

   const emailData = {
      userEmail: userEmail,
      token: token
   };

   useEffect(() => {
      const confirmEmail = async () => {
         const sendData = await fetch(endpoints.url + endpoints.confirmEmail(token, userEmail), {
            method: "PUT",
            headers: {
               "Content-type": "application/json"
            },
            body: JSON.stringify(emailData)
         });
      };

      confirmEmail();
   }, []);

   return (
      <>
         <div className="flex min-h-screen items-center justify-center">
            <h1>Congrats, your email was confirmed! You can now start shopping</h1>
         </div>
      </>
   );
}
