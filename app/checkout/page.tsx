"use client";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/zustand/globalstore";
import { CartType } from "@/types/CartType";
import FetchCreateCheckoutSession from "./FetchCreateCheckoutSession";
import IsNotAuthenticated from "../components/IsNotAuthenticated";
import FetchIsEmailConfirmed from "../profile/FetchIsEmailConfirmed";

const stripePromise = loadStripe("pk_live_51Onkz6Lwv2BbZpNwUQ14JQ6IOqKRHlIj4Gy07KXm67vzjLKE7MwAMSTJBOpLkAhsrYhPxfsurNJXvmDP8t5fxouU00hx3eE6NV");

export default function Checkout() {
   const [clientSecret, setClientSecret] = useState("");
   const [clientId, setClientId] = useState("");
   const globalStore = useGlobalStore();
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;
   const cart: CartType[] = globalStore.cart;
   const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

   useEffect(() => {
      if (userId) {
         FetchIsEmailConfirmed({ userId, setIsEmailConfirmed });
      }
   }, []);

   useEffect(() => {
      if (userId) {
         FetchCreateCheckoutSession({ userId, jwtToken, setClientSecret, setClientId });
      }
   }, []);

   if (!cart) {
      return (
         <div>
            <div className="flex min-h-screen items-center justify-center">
               <h1>You must have items in your cart!</h1>
            </div>
         </div>
      );
   }

   if (!isEmailConfirmed) {
      return <IsNotAuthenticated />;
   }

   return (
      <div className="flex justify-center py-10">
         <div id="checkout" className="container">
            {clientSecret && (
               <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
                  <EmbeddedCheckout />
               </EmbeddedCheckoutProvider>
            )}
         </div>
      </div>
   );
}
