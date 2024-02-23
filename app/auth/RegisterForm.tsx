import { useEffect, useState } from "react";
import FetchRegister from "./FetchRegister";
import FetchEmailToken from "./FetchEmailToken";

export default function RegisterForm({ setIsLoginForm }: any) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [redirectToVerifyEmail, setRedirectToVerifyEmail] = useState(false);
   const [emailToken, setEmailToken] = useState("");

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

   const emailData = {
      emailToken: emailToken,
      email: email
   };

   const createUserAccount = async () => {
      await FetchRegister({ userData, setRedirectToVerifyEmail });
      await FetchEmailToken({ email, setEmailToken });
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

            // if (redirectToVerifyEmail) {
            //    window.location.href = `http://localhost:3000/auth/confirm-email-warning?email=${email}`;
            // }
         };
         sendData();
      }
   }, [emailToken]);

   return (
      <>
         <div className="min-h-screen flex justify-center items-center">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
               <form className="space-y-6" action="#">
                  <div className="flex justify-center">
                     <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
                  </div>
                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                     <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="email@gmail.com"
                        onChange={emailHandler}
                        value={email}
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
                     onClick={createUserAccount}
                     className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Register account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                     Already registered?{" "}
                     <a className="text-blue-700 hover:underline dark:text-blue-500 hover:cursor-pointer" onClick={() => setIsLoginForm(true)}>
                        Sign in
                     </a>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}
