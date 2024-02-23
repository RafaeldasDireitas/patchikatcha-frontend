"use client";
import { endpoints } from "@/endpoints/endpoints";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ConfirmEmail() {
   const params = useSearchParams();
   const userEmail = params.get("email");
   const token = params.get("token");

   useEffect(() => {
      const confirmEmail = async () => {
         const encodedToken = token?.replace(/ /g, "+");

         const sendData = await fetch(endpoints.url + endpoints.confirmEmail(encodeURIComponent(encodedToken as unknown as string), userEmail), {
            method: "PUT"
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
