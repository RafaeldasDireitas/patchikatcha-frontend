"use client";
import Image from "next/image";
import { useState } from "react";

export default function Images({ product }: any) {
   const sideImages = product.images;
   const defaultImage = product.images.find((product: any) => product.is_default === true);
   const [mainImage, setMainImage] = useState(defaultImage.src);

   const changeMainImage = (src: any) => {
      setMainImage(src);
   };

   return (
      <>
         <div className="flex flex-col max-h-96 lg:overflow-y-auto overflow-x-auto">
            {sideImages.map((image: any, key: number) => {
               return (
                  <Image
                     className="hidden lg:block my-1 rounded-xl hover:scale-110 hover:cursor-pointer duration-200"
                     key={key}
                     src={image.src}
                     width={200}
                     height={200}
                     alt="No image found"
                     onClick={() => changeMainImage(image.src)}
                  ></Image>
               );
            })}
         </div>
         {mainImage && (
            <Image className="rounded-xl max-w-[380px] max-h-[380px] justify-center" src={mainImage} width={380} height={380} alt="No image found" />
         )}
      </>
   );
}
