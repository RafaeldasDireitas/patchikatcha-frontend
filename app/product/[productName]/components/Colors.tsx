import { ProductsData } from "@/data/ProductsData";

export default function Colors({ setColorId, productVariants }: any) {
   const colorsId = productVariants.map((product: any) => (product.options[0].toString().length >= 3 ? product.options[0] : product.options[1])); //FOR SOME REASON PRINTIFY CHANGES THE ORDER OF THE ARRAY
   const uniqueColorsId = colorsId.filter((value: any, index: any) => colorsId.indexOf(value) === index);
   const colorsName = uniqueColorsId.map((colorId: number) => {
      return Object.keys(ProductsData).find((key: any) => ProductsData[key] === colorId);
   });

   return (
      <>
         <h1 className="text-2xl text-light yeseva-one-regular">Colors:</h1>
         <div className="flex flex-row flex-wrap my-2">
            {colorsName.map((colorName: any, key: number) => {
               const colorId = uniqueColorsId[key];

               return (
                  <button
                     className="btn ml-1 my-1 w-24 josefin-sans bg-button-background border-none text-white"
                     key={colorId}
                     onClick={() => setColorId(colorId)}
                  >
                     {colorName}
                  </button>
               );
            })}
         </div>
      </>
   );
}
