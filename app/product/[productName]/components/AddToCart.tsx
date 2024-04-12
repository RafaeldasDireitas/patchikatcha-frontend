"use client";
import { useState } from "react";

export default function AddToCart({ addToCart, addedToCart }: any) {
   return (
      <>
         <div>
            <button className="btn bg-button-background border-none text-white" onClick={addToCart}>
               {addedToCart ? "Added!" : "Add to cart"}
            </button>
         </div>
      </>
   );
}
