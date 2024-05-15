import { ProductType } from "@/types/ProductType";
import Image from "next/image";

export default function ImageDescription({ product }: any) {
   const lastImage = product.images[product.images.length - 1];

   return (
      <div className="flex flex-1 w-full justify-center lg:w-1/3">
         <Image className="rounded-xl max-h-[380px]" src={lastImage.src} width={380} height={380} alt="No image found" />
      </div>
   );
}
