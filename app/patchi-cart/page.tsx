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
   let totalShipping = 0;

   cart.forEach((product) => {
      totalPrice = totalPrice + product.price;
   });

   cart.forEach((product) => {
      if (product.quantity === 1) {
         totalShipping = totalShipping + product.first_item;
      }

      if (product.quantity > 1) {
         totalShipping = totalShipping + product.first_item + product.additional_items * (product.quantity - 1);
      }
   });

   return (
      <div className="lg:m-20">
         <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
               <h1 className="text-3xl text-dark yeseva-one-regular text-center lg:text-start">Patchi Cart</h1>
               <p className="josefin-sans text-center lg:text-start">Please note that each item will be shipped individually.</p>
               <div className="lg:m-24 m-6 lg:hidden block">
                  <CheckoutCard totalPrice={totalPrice} totalShipping={totalShipping}></CheckoutCard>
               </div>
               <div>
                  {cart.length !== 0 ? (
                     cart.map((product, key: number) => {
                        return (
                           <div key={key}>
                              <CartProductCard
                                 productId={product.product_id}
                                 image={product.image}
                                 name={product.name}
                                 basePrice={product.base_price}
                                 price={totalPrice}
                                 size={product.size}
                                 color={product.color}
                                 quantity={product.quantity}
                                 index={product.index}
                              >
                                 <button
                                    className="btn rounded-xl w-40 border-none bg-button-background hover:bg-red-800 text-white josefin-sans mt-2 items-center"
                                    onClick={() => product.index !== undefined && globalStore.removeFromCart(product.index)}
                                 >
                                    Remove
                                 </button>
                              </CartProductCard>
                           </div>
                        );
                     })
                  ) : (
                     <div>
                        <h1 className="josefin-sans text-center lg:text-start">No products in your cart.</h1>
                     </div>
                  )}
               </div>
            </div>
            <div className="m-24 hidden lg:block">
               <CheckoutCard totalPrice={totalPrice} totalShipping={totalShipping}></CheckoutCard>
            </div>
         </div>
      </div>
   );
}
