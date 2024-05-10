"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import CartProduct from "./CartProduct";
import Link from "next/link";

export default function Cart({ htmlFor }: any) {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   return (
      <div className="drawer-side z-50 right-0">
         <label htmlFor={htmlFor} aria-label="close sidebar" className="drawer-overlay"></label>

         <ul className="menu p-4 w-80 min-h-full bg-body-background">
            <div>
               <h1 className="text-3xl text-left text-dark quicksand-medium">Your cart:</h1>
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
                           size={product.size}
                           color={product.color}
                           quantity={product.quantity}
                           index={product.index}
                           product_id={product.product_id}
                        ></CartProduct>
                     </div>
                  );
               })}
            <div className="flex flex-col my-2">
               <hr></hr>
               <div className="flex flex-col items-center gap-y-3">
                  <Link href={"/patchi-cart"}>
                     <button className="btn mt-3 btn-circle quicksand-semibold bg-transparent hover:bg-button-focused hover:border-none border-border-light border-2 text-light hover:text-white w-64">
                        View Cart
                     </button>
                  </Link>
                  <Link href={"/checkout"}>
                     <button className="btn btn-circle quicksand-semibold bg-button-background hover:bg-button-focused hover:border-none border-none w-64 text-white">
                        Checkout
                     </button>
                  </Link>
               </div>
            </div>
         </ul>
      </div>
   );
}
