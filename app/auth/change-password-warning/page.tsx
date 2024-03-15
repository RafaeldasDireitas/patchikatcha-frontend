"use client";

import { useEffect, useState } from "react";

export default function ChangePassword() {
   const [email, setEmail] = useState<string>();

   const emailHandler = (e: any) => {
      const email = e.target.value;
      setEmail(email);
   };

   return (
      <>
         <div className="flex flex-col min-h-screen items-center justify-center">
            <input
               type="text"
               placeholder="example@email.com"
               className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white josefin-sans"
               name="Email"
               onChange={emailHandler}
               value={email}
            />
            <button className="btn w-40 bg-button-background text-white border-none">Submit</button>
         </div>
      </>
   );
}
