import { endpoints } from "@/endpoints/endpoints";
import { useGlobalStore } from "@/zustand/globalstore";
import { useState } from "react";
import { toast } from "sonner";
import FetchLogin from "./FetchLogin";
import turtle from "@/public/turtle.png";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function LoginForm({ setIsLoginForm }: any) {
   const globalStore = useGlobalStore();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const setJwtToken = globalStore.setJwtToken;
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const setUserEmail = globalStore.setUserEmail;

   if (globalStore.isAuthenticated) {
      setTimeout(redirect(process.env.NEXT_PUBLIC_BASE_URL as string), 2000);
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

   return (
      <div className="flex flex-row">
         <div className="w-1/3 bg-body-background min-h-screen items-center flex justify-center">
            <Image src={turtle} width={200} height={200} alt="No turtle found..."></Image>
         </div>

         <div className="w-2/3 bg-white min-h-screen items-center flex flex-col justify-center">
            <div className="w-[500px] flex flex-col justify-center">
               <h1 className="text-light text-3xl text-start yeseva-one-regular">Log in</h1>
               <p className="text-start my-2 josefin-sans">Log in to start buying!</p>
               <input
                  type="text"
                  placeholder="example@email.com"
                  className="input input-bordered rounded-full max-w-[500px] my-2 input-warning w-full bg-white josefin-sans"
                  id="email"
                  onChange={emailHandler}
                  value={email}
                  required
               />
               <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered rounded-full max-w-[500px] my-2 input-warning w-full bg-white josefin-sans"
                  onChange={passwordHandler}
                  value={password}
                  id="password"
               />
               <div className="flex flex-col items-end">
                  <button
                     className="btn btn-circle w-40 bg-button-background border-none my-2 text-white josefin-sans"
                     onClick={() => FetchLogin({ userData, setJwtToken, setIsAuthenticated, setUserEmail })}
                  >
                     Log in
                  </button>
               </div>
               <p className="my-1 josefin-sans">
                  Don't have an account yet? Sign up{" "}
                  <span className="underline text-light hover:cursor-pointer josefin-sans" onClick={() => setIsLoginForm(false)}>
                     here
                  </span>
                  .
               </p>
               <p className="my-1 josefin-sans">
                  Forgot your password? Reset it <span className="underline text-light hover:cursor-pointer josefin-sans">here</span>.
               </p>
            </div>
         </div>
      </div>
   );
}
