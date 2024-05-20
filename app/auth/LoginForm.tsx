import { useGlobalStore } from "@/zustand/globalstore";
import { useRef, useState } from "react";
import FetchLogin from "./FetchLogin";
import star from "@/public/star.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import { loginValidation } from "@/zod/zod";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginForm({ setIsLoginForm }: any) {
   const globalStore = useGlobalStore();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [apiKey, setApiKey] = useState("");
   const [isLoggingIn, setIsLoggingIn] = useState(false);
   const recaptchaRef = useRef<ReCAPTCHA | null>(null);

   const setUserId = globalStore.setUserId;
   const setJwtToken = globalStore.setJwtToken;
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const setUserEmail = globalStore.setUserEmail;
   const setCart = globalStore.setCart;
   const isAuthenticated = globalStore.isAuthenticated;
   const userCart = globalStore.cart;
   const userCountry = globalStore.userGeo.userCountry;

   if (isAuthenticated) {
      redirect(process.env.NEXT_PUBLIC_BASE_URL as string);
   }

   const emailHandler = (e: any) => {
      const email = e.target.value;
      setEmail(email);
   };

   const passwordHandler = (e: any) => {
      const password = e.target.value;
      setPassword(password);
   };

   const apiKeyHandler = (value: any) => {
      const apiKey = value;
      setApiKey(apiKey);
   };

   const userData = {
      email: email,
      password: password,
      apiKey: apiKey
   };

   const authenticateUser = async () => {
      const isValid = await loginValidation.safeParseAsync(userData);

      if (!isValid.success) {
         toast.error("Credentials are wrong, try again");
         return;
      }

      await FetchLogin({ userData, setUserId, setJwtToken, setIsAuthenticated, setUserEmail, setCart, userCart, userCountry, setIsLoggingIn });
      recaptchaRef.current?.reset();
   };

   return (
      <div className="flex flex-row">
         <div className="lg:w-1/3 bg-body-background min-h-screen items-center lg:flex hidden justify-center">
            <Image src={star} width={300} height={300} alt="No turtle found..." />
         </div>

         <div className="lg:w-2/3 w-full my-16 mx-2 lg:mx-0 bg-white min-h-screen items-center flex flex-col justify-center">
            <div className="lg:w-[500px] w-full flex flex-col justify-center">
               <h1 className="text-light text-3xl text-start quicksand-bold">Log in</h1>
               <p className="text-start my-2 quicksand-medium">Log in to start buying!</p>
               <input
                  type="text"
                  placeholder="example@email.com"
                  className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white quicksand-light"
                  id="email"
                  onChange={emailHandler}
                  value={email}
                  required
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white quicksand-light"
                  onChange={passwordHandler}
                  value={password}
                  id="password"
               />
               <div className="flex justify-end">
                  <button
                     className="btn btn-circle w-1/2 bg-button-background hover:bg-button-focused border-none my-2 text-white quicksand-semibold"
                     onClick={authenticateUser}
                  >
                     {isLoggingIn ? <span className="loading loading-spinner text-error"></span> : "Log in"}
                  </button>
               </div>

               <div>
                  <p className="my-1 quicksand-medium" onClick={() => setIsLoginForm(false)}>
                     Don't have an account yet? Sign up <span className="underline text-light hover:cursor-pointer">here</span>.
                  </p>
                  <p className="my-1 quicksand-medium">
                     Forgot your password? Reset it{" "}
                     <span className="underline text-light hover:cursor-pointer">
                        <Link href={"/auth/change-password-warning"}>here</Link>
                     </span>
                     .
                  </p>
               </div>

               <div className="flex justify-center mt-4">
                  <ReCAPTCHA sitekey={`${process.env.NEXT_PUBLIC_RECAPATCHA_SITE_KEY}`} onChange={apiKeyHandler} size="normal" ref={recaptchaRef} />
               </div>
            </div>
         </div>
      </div>
   );
}
