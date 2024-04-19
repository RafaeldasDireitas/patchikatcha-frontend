import { ProductsData } from "@/data/ProductsData";
import { useEffect, useState } from "react";

export default function Colors({ setColorId, productVariants }: any) {
   const colorsId = productVariants.map((product: any) => (product.options[0].toString().length >= 3 ? product.options[0] : product.options[1])); //FOR SOME REASON PRINTIFY CHANGES THE ORDER OF THE ARRAY
   const uniqueColorsId = colorsId.filter((value: any, index: any) => colorsId.indexOf(value) === index);
   const colorsName = uniqueColorsId.map((colorId: number) => {
      return Object.keys(ProductsData).find((key: any) => ProductsData[key] === colorId);
   });

   const [isFocused, setIsFocused] = useState<number>(uniqueColorsId[0]);

   useEffect(() => {
      setColorId(uniqueColorsId[0]);
   }, []);

   const handleColorClick = (colorId: number) => {
      setColorId(colorId);
      setIsFocused(colorId);
   };

   return (
      <>
         {productVariants.length > 1 ? (
            <>
               <h1 className="text-lg text-light josefin-sans text-center lg:text-start">Colors:</h1>
               <div className="flex flex-row flex-wrap my-2 justify-center lg:justify-start">
                  {colorsName.map((colorName: any, key: number) => {
                     const colorId = uniqueColorsId[key];

                     return (
                        <button
                           className={`btn ml-1 my-1 w-16 josefin-sans ${
                              colorId === isFocused
                                 ? "bg-button-light-focus text-black border-1 min-h-10 h-10 josefin-sans border-border-light hover:bg-transparent hover:border-border-light"
                                 : "bg-transparent hover:bg-transparent hover:border-border-light border-border-light border-1 min-h-10 h-10 josefin-sans text-black"
                           }`}
                           key={colorId}
                           onClick={() => handleColorClick(colorId)}
                        >
                           {colorName}
                        </button>
                     );
                  })}
               </div>
            </>
         ) : (
            <></>
         )}
      </>
   );
}
