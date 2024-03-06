"use client";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout, AddressElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/zustand/globalstore";
import { CartType } from "@/types/CartType";
import FetchCreateCheckoutSession from "./FetchCreateCheckoutSession";

const stripePromise = loadStripe("pk_test_51Onkz6Lwv2BbZpNwCznBgyiBZjWKIEQUJZPyyzbaLha0vf4Eu55o9h7fN0O9jMotkYsR6kgZtSYLq4lcbkntkRaD00g5Dird6V");

export default function Checkout() {
   const [clientSecret, setClientSecret] = useState("");
   const globalStore = useGlobalStore();
   const userEmail = globalStore.userEmail;
   const cart: CartType[] = globalStore.cart;

   const checkoutObject = cart.map((product) => ({
      name: product.name,
      description: product.description,
      price: product.price,
      priceId: product.price_id,
      image: product.image,
      quantity: product.quantity,
      productId: product.product_id
   }));

   useEffect(() => {
      FetchCreateCheckoutSession({ userEmail, checkoutObject, setClientSecret });
   }, []);

   console.log(clientSecret);

   if (!userEmail) {
      return (
         <div className="flex min-h-screen items-center justify-center">
            <h1>You must be logged in!</h1>
         </div>
      );
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
