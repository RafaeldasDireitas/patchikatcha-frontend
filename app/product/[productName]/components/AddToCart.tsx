"use client";

export default function AddToCart({ addToCart, addedToCart }: any) {
   return (
      <div className="flex lg:justify-start justify-center my-4 quicksand-semibold">
         <button className="btn lg:w-96 w-80 btn-circle hover:bg-button-focused bg-button-background border-none text-white" onClick={addToCart}>
            {addedToCart}
         </button>
      </div>
   );
}
