import { useEffect, useState } from "react";
import FetchRegister from "./FetchRegister";
import FetchEmailToken from "./FetchEmailToken";
import Image from "next/image";
import turtle from "@/public/turtle.png";
import { toast } from "sonner";

export default function RegisterForm({ setIsLoginForm }: any) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
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

   const confirmPasswordHandler = (e: any) => {
      const confirmPassword = e.target.value;
      setConfirmPassword(confirmPassword);
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
      if (password === confirmPassword) {
         await FetchRegister({ userData, setRedirectToVerifyEmail });
         await FetchEmailToken({ email, setEmailToken });
      } else {
         toast.error("Passwords don't match.");
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
               window.location.href = `http://localhost:3000/auth/confirm-email-warning?email=${email}`;
            }
         };
         sendData();
      }
   }, [emailToken]);

   return (
      <>
         <div className="flex flex-row">
            <div className="w-1/3 bg-body-background min-h-screen items-center flex justify-center">
               <Image src={turtle} width={200} height={200} alt="No turtle found..."></Image>
            </div>

            <div className="w-2/3 bg-white min-h-screen items-center flex flex-col justify-center">
               <div className="w-[500px] flex flex-col justify-center">
                  <h1 className="text-light text-3xl text-start yeseva-one-regular">Sign up</h1>
                  <p className="text-start my-2 josefin-sans">Create an account to keep track of your orders.</p>
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
                  <input
                     type="password"
                     placeholder="Confirm password"
                     className="input input-bordered rounded-full max-w-[500px] my-2 input-warning w-full bg-white josefin-sans"
                     onChange={confirmPasswordHandler}
                     value={confirmPassword}
                     id="password"
                  />
                  <div className="flex flex-col items-end">
                     <button
                        className="btn btn-circle w-40 bg-button-background border-none my-2 text-white josefin-sans"
                        onClick={createUserAccount}
                     >
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
      </>
   );
}

{
   /* <div className="min-h-screen flex justify-center items-center">
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
         </div> */
}
