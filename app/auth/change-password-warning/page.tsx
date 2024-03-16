"use client";
import { endpoints } from "@/endpoints/endpoints";
import { useState } from "react";
import FetchChangePassword from "./FetchChangePassword";

export default function ChangePassword() {
   const [userEmail, setUserEmail] = useState<string>();

   const emailHandler = (e: any) => {
      const email = e.target.value;
      setUserEmail(email);
   };

   return (
      <div className="flex flex-col min-h-screen items-center justify-center">
         <input
            type="text"
            placeholder="example@email.com"
            className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white josefin-sans"
            id="email"
            onChange={emailHandler}
            value={userEmail}
         />
         <button className="btn w-40 bg-button-background text-white border-none" onClick={() => FetchChangePassword({ userEmail })}>
            Submit
         </button>
      </div>
   );
}
