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
      <div className="flex flex-col items-center justify-center gap-y-2 min-h-screen px-2 text-center">
         <h1 className="text-3xl lg:text-start text-center text-dark quicksand-bold">Reset your password</h1>
         <p>Enter your email and we'll send you a link to reset your password.</p>
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
