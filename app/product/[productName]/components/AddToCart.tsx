"use client";
import { useState } from "react";

export default function AddToCart({ addToCart, addedToCart }: any) {
   return (
      <>
         <div>
            <button className="btn w-64 btn-circle hover:bg-button-focused bg-button-background border-none text-white my-1" onClick={addToCart}>
               {addedToCart ? "Added!" : "Add to cart"}
            </button>
         </div>
      </>
   );
}
