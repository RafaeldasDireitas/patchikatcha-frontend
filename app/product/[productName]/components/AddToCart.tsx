"use client";
import { useState } from "react";

export default function AddToCart({ addToCart, addedToCart }: any) {
   return (
      <div className="flex lg:justify-start justify-center my-2">
         <button className="btn w-96 btn-circle hover:bg-button-focused bg-button-background border-none text-white" onClick={addToCart}>
            {addedToCart ? "Added to cart!" : "Add to cart"}
         </button>
      </div>
   );
}
