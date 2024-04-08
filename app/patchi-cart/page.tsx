"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import CartProductCard from "./components/CartProductCard";
import CheckoutCard from "./components/CheckoutCard";

export default function PatchiCart() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   return (
      <div className="m-24">
         <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
               <h1 className="text-3xl text-dark yeseva-one-regular text-center lg:text-start">Patchi Cart</h1>
               <p className="josefin-sans text-center lg:text-start">Please note that each item will be shipped individually.</p>
               <div>
                  {cart.map((product, key) => {
                     const formattedPrice = (product.price / 100).toFixed(2) + " €";

                     return (
                        <CartProductCard
                           image={product.image}
                           name={product.name}
                           price={formattedPrice}
                           size={product.size}
                           color={product.color}
                           quantity={product.quantity}
                           index={key}
                        ></CartProductCard>
                     );
                  })}
               </div>
            </div>
            <div className="m-24">
               <CheckoutCard></CheckoutCard>
            </div>
         </div>
      </div>
   );
}
