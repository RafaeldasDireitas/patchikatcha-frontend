"use client";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/zustand/globalstore";
import { CartType } from "@/types/CartType";
import FetchCreateCheckoutSession from "./FetchCreateCheckoutSession";
import FetchSessionStatus from "./FetchSessionStatus";
import { UserDataType } from "@/types/UserDataType";
import IsNotAuthenticated from "../components/IsNotAuthenticated";
import FetchIsEmailConfirmed from "../profile/FetchIsEmailConfirmed";

const stripePromise = loadStripe("pk_test_51Onkz6Lwv2BbZpNwCznBgyiBZjWKIEQUJZPyyzbaLha0vf4Eu55o9h7fN0O9jMotkYsR6kgZtSYLq4lcbkntkRaD00g5Dird6V");

export default function Checkout() {
   const [clientSecret, setClientSecret] = useState("");
   const [clientId, setClientId] = useState("");
   const globalStore = useGlobalStore();
   const userEmail = globalStore.userEmail;
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;
   const userGeo: UserDataType = globalStore.userGeo;
   const cart: CartType[] = globalStore.cart;
   const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

   const checkoutObject = cart.map((product) => ({
      index: product.index,
      name: product.name,
      description: product.description,
      price: product.price,
      priceId: product.price_id,
      image: product.image,
      quantity: product.quantity,
      productId: product.product_id,
      variantId: product.variant_id,
      firstItem: product.first_item,
      additionalItems: product.additional_items
   }));

   if (!cart) {
      return (
         <div>
            <div className="flex min-h-screen items-center justify-center">
               <h1>You must have items in your cart!</h1>
            </div>
         </div>
      );
   }
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

   if (!isEmailConfirmed) {
      return <IsNotAuthenticated />;
   }

   return (
      <>
         <div id="checkout">
            {clientSecret && (
               <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
                  <EmbeddedCheckout />
               </EmbeddedCheckoutProvider>
            )}
         </div>
      </>
   );
}
