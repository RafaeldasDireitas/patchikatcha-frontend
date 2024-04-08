"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import CartProductCard from "./components/CartProductCard";
import CheckoutCard from "./components/CheckoutCard";
import { useEffect } from "react";
import Loading from "../components/Loading";

export default function PatchiCart() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;
   let totalPrice = 0;

   cart.forEach((product) => {
      totalPrice = totalPrice + product.price;
   });

   if (cart.length === 0) {
      return <Loading />;
   }

   return (
      <div className="lg:m-24">
         <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
               <h1 className="text-3xl text-dark yeseva-one-regular text-center lg:text-start">Patchi Cart</h1>
               <p className="josefin-sans text-center lg:text-start">Please note that each item will be shipped individually.</p>
               <div className="lg:m-24 m-6 lg:hidden block">
                  <CheckoutCard totalPrice={totalPrice}></CheckoutCard>
               </div>
               <div>
                  {cart.map((product, key: number) => {
                     return (
                        <CartProductCard
                           key={product.index}
                           image={product.image}
                           name={product.name}
                           basePrice={product.base_price}
                           price={totalPrice}
                           size={product.size}
                           color={product.color}
                           quantity={product.quantity}
                           index={product.index}
                        ></CartProductCard>
                     );
                  })}
               </div>
            </div>
            <div className="m-24 hidden lg:block">
               <CheckoutCard totalPrice={totalPrice}></CheckoutCard>
            </div>
         </div>
         {/* <div className="flex flex-col lg:mt-40 lg:w-1/2">
            <h1 className="text-3xl text-dark josefin-sans">Detailed description:</h1>
            <p className="mt-2 text-black josefin-sans">
               Here is a very very very very long description with like all the details very epic okay okay very epic very long. Here is a very very
               very very long description with like all the details very epic okay okay very epic very long. Here is a very very very very long
               description with like all the details very epic okay okay very epic very long. Here is a very very very very long description with like
               all the details very epic okay okay very epic very long. Here is a very very very very long description with like all the details very
               epic okay okay very epic very long.{" "}
            </p>
         </div> */}
      </div>
   );
}
