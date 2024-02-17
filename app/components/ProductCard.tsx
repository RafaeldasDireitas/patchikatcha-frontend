import cardImage from "@/public/card-image-test.png";
import Image from "next/image";

export default function ProductCard() {
   return (
      <>
         <div className="p-4 rounded-3xl bg-product-card w-96">
            <div className="flex flex-col items-center">
               <h1 className="text-center py-1 text-2xl font-semibold">Title</h1>
               <h2 className="text-center py-1 text-lg">Type</h2>
               <Image src={cardImage} width={305} height={227} alt="Product image" className="py-2"></Image>
               <p className="text-center">Just an examplatory text, maybe as a short description, hehe, huhe, hee.</p>
               <h2 className="text-center py-1">From 3.99€</h2>
               <button className="btn flex text-white bg-button-background border-none rounded-3xl my-3">View Details</button>
            </div>
         </div>
      </>
   );
}
