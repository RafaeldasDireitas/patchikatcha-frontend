import { ProductsData } from "@/data/ProductsData";
import { useEffect, useState } from "react";

export default function Sizes({ setSizeId, productVariants }: any) {
   const sizesId = productVariants.map((product: any) => (product.options[0].toString().length >= 3 ? product.options[1] : product.options[0])); //FOR SOME REASON PRINTIFY CHANGES THE ORDER OF THE ARRAY
   const uniqueSizesId = sizesId.filter((value: any, index: any) => sizesId.indexOf(value) === index);
   const sizesName = uniqueSizesId.map((sizeId: number) => {
      return Object.keys(ProductsData).find((key: any) => ProductsData[key] === sizeId);
   });

   const [isFocused, setIsFocused] = useState<number>(uniqueSizesId[0]);

   useEffect(() => {
      setSizeId(uniqueSizesId[0]);
   }, []);

   const handleSizeClick = (sizeId: number) => {
      setSizeId(sizeId);
      setIsFocused(sizeId);
   };

   return (
      <>
         {productVariants.length > 1 ? (
            <>
               <h1 className="text-lg text-light quicksand-light text-center lg:text-start">Sizes:</h1>
               <div className="flex flex-row flex-wrap my-2 justify-center lg:justify-start">
                  {sizesName.map((sizeName: any, key: number) => {
                     const sizeId = uniqueSizesId[key];

                     return (
                        <button
                           className={`btn ml-1 my-1 w-16 quicksand-light ${
                              sizeId === isFocused
                                 ? "bg-button-light-focus text-black border-1 min-h-10 h-10 quicksand-light border-border-light hover:bg-transparent hover:border-border-light"
                                 : "bg-transparent hover:bg-transparent hover:border-border-light border-border-light border-1 min-h-10 h-10 quicksand-light text-black"
                           }`}
                           key={sizeId}
                           onClick={() => handleSizeClick(sizeId)}
                        >
                           {sizeName}
                        </button>
                     );
                  })}
               </div>
            </>
         ) : (
            <>
               <h1 className="text-lg text-light quicksand-light text-center lg:text-start my-1">Sizes:</h1>
               <p className="quicksand-medium lg:text-start text-center">This product only has one size.</p>
            </>
         )}
      </>
   );
}
