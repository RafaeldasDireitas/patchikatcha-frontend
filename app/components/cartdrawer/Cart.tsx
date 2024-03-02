"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import CartProduct from "./CartProduct";

export default function Cart() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   return (
      <div className="drawer-side z-50">
         <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

         <ul className="menu p-4 w-96 min-h-full bg-body-background">
            <div>
               <h1 className="text-3xl text-left">Your cart</h1>
            </div>
            {cart &&
               cart.map((product, index) => {
                  return (
                     <div key={index}>
                        <CartProduct
                           name={product.name}
                           description={product.description}
                           price={product.price}
                           price_id={"aodjao"}
                           image={product.image}
                           quantity={product.quantity}
                           index={product.index}
                           product_id={product.product_id}
                        ></CartProduct>
                     </div>
                  );
               })}
            <div className="flex flex-col">
               <h2>Subtotal</h2>
               <hr></hr>
               <button className="btn bg-button-background border-none text-white my-8">View Cart</button>
            </div>
         </ul>
      </div>
   );
}
