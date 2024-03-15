"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";
import IsNotAuthenticated from "./IsNotAuthenticated";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import FetchOrders from "./FetchOrders";
import { OrderType } from "@/types/OrderType";
import Order from "./components/Order";
import Link from "next/link";

export default function Profile() {
   const [orders, setOrders] = useState<OrderType>();

   const globalStore = useGlobalStore();
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const setJwtToken = globalStore.setJwtToken;
   const setUserEmail = globalStore.setUserEmail;
   const isAuthenticated = globalStore.isAuthenticated;
   const jwtToken = globalStore.jwtToken;
   const formattedDate = orders && new Date(orders?.created_at).toLocaleDateString().split(" ")[0];
   const formattedPrice = orders && (orders?.total_price / 100).toFixed(2) + " €";
   const status = orders && orders.status;
   const address = orders && orders.address_to.address1;

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
      if (jwtToken) {
         FetchOrders({ orderId, setOrders, jwtToken });
      }
   }, []);

   return (
      <>
         <div className="p-12">
            <h1>User profile</h1>
            <button className="btn" onClick={signOutHandler}>
               Sign out
            </button>
            <a href={orders?.printify_connect.url} target="_blank">
               Click here for order details
            </a>
            <Order orderId={orders?.id} createdAt={formattedDate} totalPrice={formattedPrice} status={status} address={address}></Order>
            <Link href={"/auth/change-password"}>
               <p>Change password</p>
            </Link>
         </div>
      </>
   );
}
