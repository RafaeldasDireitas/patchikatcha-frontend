import { useEffect, useRef, useState } from "react";
import FetchRegister from "./FetchRegister";
import FetchEmailToken from "./FetchEmailToken";
import Image from "next/image";
import star from "@/public/star.png";
import { toast } from "sonner";
import { registerValidation } from "@/zod/zod";
import { z } from "zod";
import { useGlobalStore } from "@/zustand/globalstore";
import ReCAPTCHA from "react-google-recaptcha";
import { redirection } from "@/endpoints/redirection";

export default function RegisterForm({ setIsLoginForm }: any) {
   const globalStore = useGlobalStore();
   const userCountry = globalStore.userGeo.userCountry;

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [username, setUsername] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [redirectToVerifyEmail, setRedirectToVerifyEmail] = useState(false);
   const [fetchEmailToken, setFetchEmailToken] = useState(false);
   const [emailToken, setEmailToken] = useState("");
   const [apiKey, setApiKey] = useState("");
   const [isRegistering, setIsRegistering] = useState(false);
   const recaptchaRef = useRef<ReCAPTCHA | null>(null);

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

   const apiKeyHandler = (value: any) => {
      const apiKey = value;
      setApiKey(apiKey);
   };

   const userData = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      apiKey: apiKey,
      userCountry: userCountry
   };

   const emailData = {
      emailToken: emailToken,
      email: email
   };

   const createUserAccount = async () => {
      const isValid = await registerValidation.safeParseAsync(userData);

      if (!isValid.success) {
         isValid.error.errors.forEach((error) => {
            toast.error(error.message);
         });
         return;
      }

      await FetchRegister({ userData, setRedirectToVerifyEmail, setFetchEmailToken, setIsRegistering });
      recaptchaRef.current?.reset();

      //the rest of the code is in the useEffect if you need to debug this
   };

   useEffect(() => {
      if (fetchEmailToken) {
         FetchEmailToken({ email, setEmailToken });
      }
   }, [fetchEmailToken]);

   useEffect(() => {
      if (emailToken && fetchEmailToken) {
         const sendData = async () => {
            const send = await fetch("/api/send-email-verification", {
               method: "POST",
               headers: {
                  "Content-type": "application/json"
               },
               body: JSON.stringify(emailData)
            });

            if (redirectToVerifyEmail) {
               window.location.href = redirection["confirm-email-warning"];
            }
         };
         sendData();
      }
   }, [emailToken]);

   return (
      <div className="flex flex-row">
         <div className="lg:w-1/3 bg-body-background min-h-screen items-center lg:flex hidden justify-center">
            <Image src={star} width={300} height={300} alt="No turtle found..." />
         </div>

         <div className="lg:w-2/3 w-full my-16 mx-2 lg:mx-0 bg-white min-h-screen items-center flex flex-col justify-center">
            <div className="lg:w-[500px] w-full flex flex-col justify-center">
               <h1 className="text-light text-3xl text-start">Sign up</h1>
               <p className="text-start my-2 ">Create an account to keep track of your orders.</p>
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
                  className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white "
                  id="email"
                  onChange={emailHandler}
                  value={email}
                  required
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white "
                  onChange={passwordHandler}
                  value={password}
                  id="password"
               />
               <input
                  type="password"
                  placeholder="Confirm password"
                  className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white "
                  onChange={confirmPasswordHandler}
                  value={confirmPassword}
                  id="confirmPassword"
               />
               <div className="flex flex-col items-end">
                  <button
                     className="btn btn-circle w-40 bg-button-background hover:bg-button-focused border-none my-2 text-white "
                     onClick={createUserAccount}
                  >
                     {isRegistering ? <span className="loading loading-spinner text-error"></span> : "Sign up"}
                  </button>
               </div>

               <p className="my-1 " onClick={() => setIsLoginForm(true)}>
                  Already have an account? Log in <span className="underline text-light hover:cursor-pointer ">here</span>.
               </p>
               <div className="flex justify-center mt-4">
                  <ReCAPTCHA sitekey={`${process.env.NEXT_PUBLIC_RECAPATCHA_SITE_KEY}`} onChange={apiKeyHandler} size="normal" ref={recaptchaRef} />
               </div>
            </div>
         </div>
      </div>
   );
}
