"use client";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe("pk_test_51Onkz6Lwv2BbZpNwCznBgyiBZjWKIEQUJZPyyzbaLha0vf4Eu55o9h7fN0O9jMotkYsR6kgZtSYLq4lcbkntkRaD00g5Dird6V");

export default function Checkout() {
   const [clientSecret, setClientSecret] = useState("");

   useEffect(() => {
      const fetchSession = async () => {
         const dataSession = await fetch("https://localhost:7065/api/Stripe/create-checkout-session", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            }
         });

         const data = await dataSession.json();
         setClientSecret(data);
      };

      fetchSession();
   }, []);

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
