import Image from "next/image";
import fallback from "@/public/Happy_Halloween.jpg";

export default function ProductCard({ title, price, image, secondImage }: any) {
   const productIVA = price * 0.23;

   const basePrice = productIVA && price + productIVA;

   const adjustedPrice = basePrice && Math.floor(basePrice / 100) + 0.99;

   const formattedPrice = basePrice && adjustedPrice.toFixed(2) + " €";

   const imageUrl = image || fallback;

   return (
      <div className="flex flex-col justify-center items-center rounded-xl lg:hover:scale-110 hover:cursor-pointer duration-200">
         <div className="relative">
            <Image className="rounded-xl transition-opacity duration-500" src={imageUrl} width={275} height={275} alt="Product image" />
            <Image
               className="rounded-xl absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
               src={secondImage || imageUrl}
               width={275}
               height={275}
               alt="Second image"
            />
         </div>{" "}
         <h1 className="text-center pt-3 text-xl text-light truncate w-80">{title}</h1>
         <h2 className="text-center pb-2 ">{formattedPrice}</h2>
      </div>
   );
}
