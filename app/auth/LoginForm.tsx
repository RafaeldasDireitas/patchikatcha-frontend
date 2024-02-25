import { endpoints } from "@/endpoints/endpoints";
import { useGlobalStore } from "@/zustand/globalstore";
import { useState } from "react";
import { toast } from "sonner";
import FetchLogin from "./FetchLogin";
import turtle from "@/public/turtle.png";
import Image from "next/image";

export default function LoginForm({ setIsLoginForm }: any) {
   const globalStore = useGlobalStore();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const setJwtToken = globalStore.setJwtToken;
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const setUserEmail = globalStore.setUserEmail;

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
{
   /* <div className="w-1/2 max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
               <form className="space-y-6" action="#">
                  <div className="flex justify-center">
                     <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                  </div>
                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={emailHandler}
                        value={email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="email@gmail.com"
                        required
                     ></input>
                  </div>
                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                     <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        onChange={passwordHandler}
                        value={password}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                     ></input>
                  </div>
                  <div className="flex justify-center">
                     <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">
                        Lost Password?
                     </a>
                  </div>
                  <button
                     type="button"
                     onClick={() => FetchLogin({ userData, setJwtToken, setIsAuthenticated, setUserEmail })}
                     className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Login to your account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                     Not registered?{" "}
                     <a className="text-blue-700 hover:underline dark:text-blue-500 hover:cursor-pointer" onClick={() => setIsLoginForm(false)}>
                        Create account
                     </a>
                  </div>
               </form>
            </div>
         </div> */
}
