export default function AddToCart({ addToCart }: any) {
   return (
      <>
         <div>
            <button className="btn bg-button-background border-none text-white" onClick={addToCart}>
               Add to cart
            </button>
         </div>
      </>
   );
}
