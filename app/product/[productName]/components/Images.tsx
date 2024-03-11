import Image from "next/image";

export default function Images({ product }: any) {
   const sideImages = product.images;
   const defaultImage = product.images.find((product: any) => product.is_default === true);
   const mainImage = defaultImage?.src;

   return (
      <>
         <div className="flex flex-col mr-7 max-h-96 overflow-auto">
            {sideImages.map((image: any, key: number) => {
               return (
                  <Image
                     className="my-1 rounded-xl hover:scale-110 hover:cursor-pointer duration-200"
                     key={key}
                     src={image.src}
                     width={200}
                     height={200}
                     alt="No image found"
                  ></Image>
               );
            })}
         </div>
         <div>{mainImage && <Image className="rounded-xl" src={mainImage} width={1000} height={1000} alt="No image found" />}</div>
      </>
   );
}
