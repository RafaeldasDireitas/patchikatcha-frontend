import { ProductsData } from "@/data/ProductsData";

export default function Sizes({ setSizeId, productVariants }: any) {
   const sizesId = productVariants.map((product: any) => (product.options[0].toString().length >= 3 ? product.options[1] : product.options[0])); //FOR SOME REASON PRINTIFY CHANGES THE ORDER OF THE ARRAY
   const uniqueSizesId = sizesId.filter((value: any, index: any) => sizesId.indexOf(value) === index);
   const sizesName = uniqueSizesId.map((sizeId: number) => {
      return Object.keys(ProductsData).find((key: any) => ProductsData[key] === sizeId);
   });

   return (
      <>
         <h1 className="text-2xl text-light yeseva-one-regular">Sizes:</h1>
         <div className="flex flex-row flex-wrap my-2">
            {sizesName.map((sizeName: any, key: number) => {
               const sizeId = uniqueSizesId[key];

               return (
                  <button
                     className="btn ml-1 my-1 w-20 josefin-sans bg-button-background border-none text-white"
                     key={sizeId}
                     onClick={() => setSizeId(sizeId)}
                  >
                     {sizeName}
                  </button>
               );
            })}
         </div>
      </>
   );
}
