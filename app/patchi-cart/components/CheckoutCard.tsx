import Image from "next/image";
import turtle from "@/public/turtle.png";
import Link from "next/link";

export default function CheckoutCard({ totalPrice }: any) {
   const formattedPrice = (totalPrice / 100).toFixed(2) + " €";

   return (
      <div className="mx-auto w-96 bg-white shadow-lg rounded-xl lg:fixed lg:top-52">
         <div className="flex flex-col p-8">
            <div className="flex justify-center">
               <Image src={turtle} width={150} height={150} alt="No image found"></Image>
            </div>

            <div className="flex flex-col">
               <h1 className="text-xl font-semibold">Order details:</h1>
               <div className="flex flex-row justify-between my-2">
                  <h1 className="text-start">Subtotal:</h1>
                  <h1 className="text-end">{formattedPrice}</h1>
               </div>
               <div className="flex flex-row justify-between my-2">
                  <h1 className="text-start">Tax:</h1>
                  <h1 className="text-end">Calculated at checkout</h1>
               </div>
               <div className="flex flex-row justify-between my-2">
                  <h1 className="text-start">Shipping:</h1>
                  <h1 className="text-end">Calculated at checkout</h1>
               </div>
               <div className="flex flex-row justify-between my-2">
                  <h1 className="text-start">Total:</h1>
                  <h1 className="text-end">{formattedPrice}</h1>
               </div>
               <div className="flex justify-center mt-2">
                  <Link href={"/checkout"}>
                     <button className="btn w-64 bg-button-background hover:bg-button-focused border-none text-white  josefin-sans">Checkout</button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
