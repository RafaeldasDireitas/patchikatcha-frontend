import { useEffect, useState } from "react";
import FetchRegister from "./FetchRegister";
import FetchEmailToken from "./FetchEmailToken";
import Image from "next/image";
import turtle from "@/public/turtle.png";
import { toast } from "sonner";
import { registerValidation } from "@/zod/zod";
import { z } from "zod";

export default function RegisterForm({ setIsLoginForm }: any) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [redirectToVerifyEmail, setRedirectToVerifyEmail] = useState(false);
   const [emailToken, setEmailToken] = useState("");

   const usernameHandler = (e: any) => {
      const username = e.target.value;
      setUsername(username);
   };

   const emailHandler = (e: any) => {
      const email = e.target.value;
      setEmail(email);
   };

   const passwordHandler = (e: any) => {
      const password = e.target.value;
      setPassword(password);
   };

   const confirmPasswordHandler = (e: any) => {
      const confirmPassword = e.target.value;
      setConfirmPassword(confirmPassword);
   };

   const userData = {
      username: username,
      email: email,
      password: password
   };

   const emailData = {
      emailToken: emailToken,
      email: email
   };

   const createUserAccount = async () => {
      try {
         registerValidation.parse(userData);
         if (password === confirmPassword) {
            await FetchRegister({ userData, setRedirectToVerifyEmail });
            await FetchEmailToken({ email, setEmailToken });
         } else {
            toast.error("Passwords don't match.");
         }
      } catch (error) {
         if (error instanceof z.ZodError) {
            error.errors.forEach((errorMessage) => {
               toast.error(errorMessage.message);
            });
         }
      }

      //the rest of the code is in the useEffect if you need to debug this
   };

   useEffect(() => {
      if (emailToken) {
         const sendData = async () => {
            const send = await fetch("/api/send-email-verification", {
               method: "POST",
               headers: {
                  "Content-type": "application/json"
               },
               body: JSON.stringify(emailData)
            });

            if (redirectToVerifyEmail) {
               window.location.href = `/auth/confirm-email-warning`;
            }
         };
         sendData();
      }
   }, [emailToken]);

   return (
      <div className="flex flex-row">
         <div className="w-1/3 bg-body-background min-h-screen items-center flex justify-center">
            <Image src={turtle} width={400} height={400} alt="No turtle found..."></Image>
         </div>

         <div className="w-2/3 bg-white min-h-screen items-center flex flex-col justify-center">
            <div className="w-[500px] flex flex-col justify-center">
               <h1 className="text-light text-3xl text-start yeseva-one-regular">Sign up</h1>
               <p className="text-start my-2 josefin-sans">Create an account to keep track of your orders.</p>
               <input
                  type="text"
                  placeholder="Username"
                  className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white josefin-sans"
                  id="username"
                  onChange={usernameHandler}
                  value={username}
                  required
               />
               <input
                  type="text"
                  placeholder="example@email.com"
                  className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white josefin-sans"
                  id="email"
                  onChange={emailHandler}
                  value={email}
                  required
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white josefin-sans"
                  onChange={passwordHandler}
                  value={password}
                  id="password"
               />
               <input
                  type="password"
                  placeholder="Confirm password"
                  className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white josefin-sans"
                  onChange={confirmPasswordHandler}
                  value={confirmPassword}
                  id="password"
               />
               <div className="flex flex-col items-end">
                  <button className="btn btn-circle w-40 bg-button-background border-none my-2 text-white josefin-sans" onClick={createUserAccount}>
                     Sign up
                  </button>
               </div>
               <p className="my-1 josefin-sans">
                  Already have an account? Log in{" "}
                  <span className="underline text-light hover:cursor-pointer josefin-sans" onClick={() => setIsLoginForm(true)}>
                     here
                  </span>
                  .
               </p>
            </div>
         </div>
      </div>
   );
}
