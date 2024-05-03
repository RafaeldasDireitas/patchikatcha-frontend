"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";
import IsNotAuthenticated from "../components/IsNotAuthenticated";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { OrderType } from "@/types/OrderType";
import Link from "next/link";
import FetchOrdersId from "./FetchOrdersId";
import { OrderIdType } from "@/types/OrderIdType";
import FetchOrders from "./FetchOrders";
import Loading from "../components/Loading";
import { ReviewType } from "@/types/ReviewType";
import FetchGrabUserReviews from "./FetchGrabUserReviews";
import OrderHistory from "./OrderHistory";

export default function Profile() {
   const [ordersId, setOrdersId] = useState<OrderIdType[]>([]);
   const [idsGrabbed, setIdsGrabbed] = useState<boolean>(false);
   const [orders, setOrders] = useState<OrderType[]>([]);
   const [userReviews, setUserReviews] = useState<ReviewType[]>();

   const [isOrderHistory, setIsOrderHistory] = useState<boolean>(true);
   const [isDeleteAccount, setIsDeleteAccount] = useState<boolean>(false);

   const globalStore = useGlobalStore();
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const setUserId = globalStore.setUserId;
   const setJwtToken = globalStore.setJwtToken;
   const setUserEmail = globalStore.setUserEmail;
   const setUserGeo = globalStore.setUserGeo;
   const setCart = globalStore.setCart;
   const isAuthenticated = globalStore.isAuthenticated;
   const cart = globalStore.cart;
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;
   const userEmail = globalStore.userEmail;

   const signOutHandler = () => {
      setIsAuthenticated(false);
      setUserId("");
      setJwtToken("");
      setUserEmail("");
      setCart(null);

      toast.success("You successfuly logged out.");
      redirect((window.location.href = "/auth"));
   };

   const handleProfilePages = (page: string) => {
      if (page === "orderHistory") {
         setIsOrderHistory(true);
         setIsDeleteAccount(false);
      } else if (page === "deleteAccount") {
         setIsOrderHistory(false);
         setIsDeleteAccount(true);
      }
   };

   const changeCountry = () => {
      setUserGeo("");
      window.location.reload();
   };

   if (!isAuthenticated) {
      return <IsNotAuthenticated />;
   }

   if (!orders) {
      return <Loading></Loading>;
   }

   useEffect(() => {
      if (jwtToken && !idsGrabbed) {
         FetchOrdersId({ userEmail, jwtToken, setOrdersId, setIdsGrabbed });
         FetchGrabUserReviews({ userId, jwtToken, setUserReviews });
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
      <>
         <div className="flex flex-row">
            <div className="p-12 my-8 w-1/3">
               <h1 className="text-2xl text-light quicksand-bold">Your Account</h1>
               <p className="quicksand-light">Track your orders or change your settings</p>

               <div className="mt-10">
                  <h1 className="text-xl text-dark quicksand-bold">My orders</h1>
                  <div className="p-4 quicksand-medium">
                     <h2 onClick={() => handleProfilePages("orderHistory")} className="hover:underline hover:text-light hover:cursor-pointer">
                        Order history
                     </h2>
                     <h2 className="hover:underline hover:text-light hover:cursor-pointer">Help & Support</h2>
                  </div>
               </div>

               <div className="mt-4">
                  <h1 className="text-xl text-dark quicksand-bold">Account settings</h1>
                  <div className="p-4 quicksand-medium">
                     <h2 className="hover:underline hover:text-light hover:cursor-pointer">Change personal details</h2>
                     <h2 className="hover:underline hover:text-light hover:cursor-pointer">Newsletter subscription</h2>
                     <h2 onClick={changeCountry} className="hover:underline hover:text-light hover:cursor-pointer">
                        Change country
                     </h2>
                  </div>
               </div>

               <div className="mt-4">
                  <h1 className="text-xl text-dark quicksand-bold">Additional settings</h1>
                  <div className="p-4 quicksand-medium">
                     <h2 className="hover:underline hover:text-light hover:cursor-pointer">View reviews</h2>
                  </div>
               </div>

               <div className="flex flex-col">
                  <button onClick={signOutHandler} className="btn mt-3 btn-circle quicksand-semibold bg-transparent hover:bg-button-focused hover:border-none border-border-light border-2 text-light hover:text-white w-64">
                     Sign Out
                  </button>

                  <Link href={"/auth/change-password-warning"}>
                     <button className="btn mt-3 btn-circle bg-transparent quicksand-semibold hover:bg-button-focused hover:border-none border-border-light border-2 text-light hover:text-white w-64">Change Password</button>
                  </Link>

                  <button onClick={() => handleProfilePages("deleteAccount")} className="btn mt-3 btn-circle bg-transparent quicksand-semibold hover:bg-red-800 hover:border-none border-border-light border-2 text-light hover:text-white w-64">
                     Delete Account
                  </button>
               </div>
            </div>

            {isOrderHistory && <OrderHistory orders={orders} />}
            {isDeleteAccount && (
               <div>
                  <h1>delete account</h1>
               </div>
            )}
         </div>
      </>
   );
}
