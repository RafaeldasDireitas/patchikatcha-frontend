"use client";
import { useState } from "react";
import FetchChangePasswordEmail from "./FetchChangePasswordEmail";

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
            className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white quicksand-light"
            id="email"
            onChange={emailHandler}
            value={userEmail}
         />
         <button
            className="btn btn-circle w-60 bg-button-background hover:bg-button-focused text-white border-none quicksand-semibold"
            onClick={() => FetchChangePasswordEmail({ userEmail })}
         >
            Submit
         </button>
      </div>
   );
}
