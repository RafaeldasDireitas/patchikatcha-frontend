"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { useEffect, useState } from "react";
import FetchIsEmailConfirmed from "../profile/FetchIsEmailConfirmed";

export default function IsNotAuthenticated() {
   const globalStore = useGlobalStore();
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;
   const isAuthenticated = globalStore.isAuthenticated;

   const [countdown, setCountdown] = useState(10);

   if (!jwtToken || !userId || !isAuthenticated) {
      return (
         <div className="flex min-h-screen justify-center items-center">
            <h1 className="text-3xl text-center text-dark font-bold quicksand-bold">You must be logged in!</h1>
         </div>
      );
   }

   useEffect(() => {
      if (countdown > 0) {
         const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
         }, 1000);

         return () => clearInterval(interval);
      }
   }, [countdown]);

   useEffect(() => {
      if (countdown === 0) {
         window.location.href = "/auth/confirm-email-warning";
      }
   }, [countdown]);

   return (
      <>
         <div className="flex flex-col min-h-screen items-center justify-center">
            <h1 className="text-3xl text-center text-dark font-bold quicksand-bold">
               Checking your account status...<span className="loading loading-spinner text-error mx-2"></span>
            </h1>
            <h1 className="text-xl text-center text-red-800 font-bold quicksand-semibold my-2">
               Please confirm your email to continue. Redirecting in {countdown} seconds...
            </h1>
         </div>
      </>
   );
}
