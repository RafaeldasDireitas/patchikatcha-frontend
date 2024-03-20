"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";
import IsNotAuthenticated from "./IsNotAuthenticated";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { OrderType } from "@/types/OrderType";
import Order from "./components/Order";
import Link from "next/link";
import FetchOrdersId from "./FetchOrdersId";
import { OrderIdType } from "@/types/OrderIdType";
import FetchOrders from "./FetchOrders";
import Loading from "../components/Loading";

export default function Profile() {
   const [ordersId, setOrdersId] = useState<OrderIdType[]>([]);
   const [idsGrabbed, setIdsGrabbed] = useState(false);
   const [orders, setOrders] = useState<OrderType[]>([]);

   const globalStore = useGlobalStore();
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const setJwtToken = globalStore.setJwtToken;
   const setUserEmail = globalStore.setUserEmail;
   const isAuthenticated = globalStore.isAuthenticated;
   const jwtToken = globalStore.jwtToken;
   const userEmail = globalStore.userEmail;

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

   if (!orders) {
      return <Loading></Loading>;
   }

   useEffect(() => {
      if (jwtToken && !idsGrabbed) {
         FetchOrdersId({ userEmail, setOrdersId, setIdsGrabbed });
      }

      if (idsGrabbed) {
         ordersId.forEach(async (order: OrderIdType) => {
            const orderId = order.orderId;

            const orderData = await FetchOrders({ orderId, jwtToken });
            setOrders((prevOrders) => [...prevOrders, orderData]);
         });
      }
   }, [idsGrabbed]);

   return (
      <div className="p-12">
         <h1>User profile</h1>
         <button className="btn" onClick={signOutHandler}>
            Sign out
         </button>

         <Link href={"/auth/change-password-warning"}>
            <p>Change password</p>
         </Link>

         {orders.map((order, key) => {
            const formattedDate = new Date(order.created_at).toLocaleDateString().split(" ")[0];
            const formattedPrice = (order.total_price / 100).toFixed(2) + " €";
            const status = order.status;
            const address = order.address_to.address1;

            return (
               <>
                  <div key={key}>
                     <a href={order.printify_connect.url} target="_blank">
                        Click here for order details
                     </a>
                     <Order orderId={order.id} createdAt={formattedDate} totalPrice={formattedPrice} status={status} address={address}></Order>
                  </div>
               </>
            );
         })}
      </div>
   );
}
