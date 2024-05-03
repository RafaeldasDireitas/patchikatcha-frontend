import Image from "next/image";

export default function ProductCard({ title, price, image }: any) {
   return (
      <div className="flex flex-col justify-center items-center rounded-xl hover:scale-110  hover:cursor-pointer duration-200">
         <Image className="rounded-xl" src={image} width={250} height={250} alt="Product image"></Image>
         <h1 className="text-center quicksand pt-3 text-xl quicksand-semibold text-light truncate w-80">{title}</h1>
         <h2 className="text-center quicksand pb-2 quicksand-medium">{price}</h2>
      </div>
   );
}
