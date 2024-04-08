import Image from "next/image";

export default function ProductCard({ title, tag, price, image }: any) {
   return (
      <>
         <div className="p-4 rounded-3xl bg-white w-96 shadow-lg hover:shadow-2xl hover:scale-105 duration-200">
            <div className="flex flex-col items-center">
               <h1 className="text-center py-1 text-2xl yeseva-one-regular text-light truncate w-80">{title}</h1>
               <Image src={image} width={305} height={227} alt="Product image" className="py-2 rounded-3xl"></Image>
               <h2 className="text-center py-1 text-lg josefin-sans font-semibold text-light">{tag}</h2>
               <h2 className="text-center py-1 josefin-sans">{price}</h2>
               <button className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">View Details</button>
            </div>
         </div>
      </>
   );
}
