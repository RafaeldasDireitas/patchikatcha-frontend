"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import CartProduct from "./CartProduct";
import { CartType } from "@/types/CartType";

export default function Cart() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   console.log(cart);

   const cartData: CartType = {
      id: 0,
      name: "Epic ee",
      description: "lpol",
      price: 4.99,
      price_id: "aijdaiwopda",
      quantity: 1
   };

   return (
      <div className="drawer-side z-50">
         <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

         <ul className="menu p-4 w-96 min-h-full bg-body-background">
            <div>
               <h1 className="text-3xl text-left">Your cart</h1>
            </div>
            {cart &&
               cart.map((product, key) => {
                  return (
                     <>
                        <div key={key}>
                           <CartProduct />
                        </div>
                     </>
                  );
               })}
            <button className="btn" onClick={() => globalStore.setCart(cartData)}>
               hello
            </button>
            <button className="btn" onClick={() => globalStore.removeFromCart(0)}>
               Remove
            </button>
            <div className="flex flex-col"></div>
         </ul>
      </div>
   );
}
