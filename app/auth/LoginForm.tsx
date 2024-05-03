import { useGlobalStore } from "@/zustand/globalstore";
import { useState } from "react";
import FetchLogin from "./FetchLogin";
import star from "@/public/star.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import { loginValidation } from "@/zod/zod";
import { toast } from "sonner";
import { z } from "zod";

export default function LoginForm({ setIsLoginForm }: any) {
   const globalStore = useGlobalStore();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

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

   const userData = {
      email: email,
      password: password
   };

   const authenticateUser = async () => {
      const isValid = await loginValidation.safeParseAsync(userData);

      if (!isValid.success) {
         toast.error("Credentials are wrong, try again");
         return;
      }

      await FetchLogin({ userData, setUserId, setJwtToken, setIsAuthenticated, setUserEmail, setCart, userCart, userCountry });
   };

   return (
      <div className="flex flex-row">
         <div className="lg:w-1/3 bg-body-background min-h-screen items-center lg:flex hidden justify-center">
            <Image src={star} width={300} height={300} alt="No turtle found..."></Image>
         </div>

         <div className="lg:w-2/3 w-full mx-2 lg:mx-0 bg-white min-h-screen items-center flex flex-col justify-center">
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
               <div className="flex flex-col items-end">
                  <button className="btn btn-circle w-40 bg-button-background hover:bg-button-focused border-none my-2 text-white quicksand-semibold" onClick={authenticateUser}>
                     Log in
                  </button>
               </div>
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
         </div>
      </div>
   );
}
