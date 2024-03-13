"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";
import IsNotAuthenticated from "./IsNotAuthenticated";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import FetchOrders from "./FetchOrders";

export default function Profile() {
   const globalStore = useGlobalStore();
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const setJwtToken = globalStore.setJwtToken;
   const setUserEmail = globalStore.setUserEmail;
   const isAuthenticated = globalStore.isAuthenticated;

   const [orders, setOrders] = useState();

   const signOutHandler = () => {
      setIsAuthenticated(false);
      setJwtToken("");
      setUserEmail("");

      toast.success("You successfuly logged out.");
      redirect((window.location.href = "/auth"));
   };

   if (!isAuthenticated) {
      return <IsNotAuthenticated />;
   }

   const orderId = "65f23132903caebea30db8e5";

   useEffect(() => {
      FetchOrders({ orderId, setOrders });
   }, []);

   console.log(orders);

   return (
      <>
         <h1>User profile</h1>
         <button className="btn" onClick={signOutHandler}>
            Sign out
         </button>
      </>
   );
}
