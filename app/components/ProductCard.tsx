import Image from "next/image";
import fallback from "@/public/Happy_Halloween.jpg";

export default function ProductCard({ title, price, image }: any) {
   const productIVA = price * 0.23;

   const basePrice = productIVA && price + productIVA;

   const adjustedPrice = basePrice && Math.floor(basePrice / 100) + 0.99;

   const formattedPrice = basePrice && adjustedPrice.toFixed(2) + " €";

   const imageUrl = image || fallback;

   return (
      <div className="flex flex-col justify-center items-center rounded-xl lg:hover:scale-110 hover:cursor-pointer duration-200">
         <Image className="rounded-xl" src={imageUrl} width={275} height={275} alt="Product image" />
         <h1 className="text-center pt-3 text-xl text-light truncate w-80">{title}</h1>
         <h2 className="text-center pb-2 ">{formattedPrice}</h2>
      </div>
   );
}
