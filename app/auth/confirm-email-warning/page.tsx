"use client";
import { useSearchParams } from "next/navigation";

export default function VerifyEmail() {
   const params = useSearchParams();
   const userEmail = params.get("email");

   return (
      <>
         <div className="flex min-h-screen items-center justify-center">
            <h1>Verify Email Page {userEmail}</h1>
         </div>
      </>
   );
}
