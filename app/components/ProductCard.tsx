import Image from "next/image";

export default function ProductCard({ title, price, image }: any) {
   return (
      <div className="flex flex-col overflow-hidden justify-center items-center rounded-xl hover:scale-110 hover:cursor-pointer duration-200">
         <Image className="rounded-xl" src={image} width={250} height={250} alt="Product image"></Image>
         <h1 className="text-center quicksand pt-3 text-xl yeseva-one-regular text-light truncate w-80">{title}</h1>
         <h2 className="text-center quicksand pb-2 josefin-sans">{price}</h2>
      </div>
   );
}
