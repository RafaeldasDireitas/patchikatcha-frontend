import Image from "next/image";
import fallback from "@/public/Happy_Halloween.jpg";

export default function ProductCard({ title, price, image }: any) {
   const productIVA = price * 0.23;

   const basePrice = productIVA && price + productIVA;

   const adjustedPrice = basePrice && Math.floor(basePrice / 100) + 0.99;

   const formattedPrice = basePrice && adjustedPrice.toFixed(2) + " €";

   const imageUrl = image || fallback;

   return (
      <div className="flex flex-col justify-center items-center rounded-xl hover:scale-110  hover:cursor-pointer duration-200">
         <Image className="rounded-xl" src={imageUrl} width={250} height={250} alt="Product image" unoptimized />
         <h1 className="text-center quicksand pt-3 text-xl quicksand-semibold text-light truncate w-80">{title}</h1>
         <h2 className="text-center quicksand pb-2 quicksand-medium">{formattedPrice}</h2>
      </div>
   );
}
