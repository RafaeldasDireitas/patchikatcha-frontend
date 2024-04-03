import { ProductType } from "@/types/ProductType";

export default function Tags({ product }: any) {
   const firstTag = product.tags.slice(0, 1);

   return (
      <>
         <div className="flex flex-row flex-wrap my-2 justify-center lg:justify-start">
            {/* {product.tags.map((tag: string[], key: number) => {
               return (
                  <div>
                     <h1 className="josefin-sans text-xl text-dark">{firstTag}</h1>
                  </div>
               );
            })} */}
            {firstTag}
         </div>
      </>
   );
}
