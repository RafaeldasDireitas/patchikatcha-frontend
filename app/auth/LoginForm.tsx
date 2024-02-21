import { endpoints } from "@/endpoints/endpoints";
import { useGlobalStore } from "@/zustand/globalstore";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginForm({ setIsLoginForm }: any) {
   const globalStore = useGlobalStore();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

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

   const checkUserAccount = async () => {
      const createUser = await fetch(endpoints.url + endpoints.login, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(userData)
      });

      if (!createUser.ok) {
         console.log("there was an error");
      }

      const responseData = await createUser.json();
      globalStore.setJwtToken(responseData.jwtToken);
      globalStore.setIsAuthenticated(true);
      globalStore.setUserEmail(userData.email);
      toast.success("You successfuly logged in!");
   };

   return (
      <>
         <div className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
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
                     onClick={checkUserAccount}
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
         </div>
      </>
   );
}
