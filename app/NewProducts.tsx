import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import FetchNewProducts from "@/app/FetchNewProducts";
import { NewProductsType } from "@/types/NewProductsType";
import { ProductType } from "@/types/ProductType";

export default function NewProducts() {
   const [newProducts, setNewProducts] = useState<ProductType[]>();

   useEffect(() => {
      FetchNewProducts({ setNewProducts });
   }, []);

   if (!newProducts) {
      return <h1>gay</h1>;
   }

   return (
      <div className="lg:p-12 py-8 flex flex-col items-center">
         <h1 className="text-3xl lg:text-start text-center text-light font-bold">New Products</h1>
         <p className="py-4 lg:text-start text-center">Here is just a little description that is a little bit bigger than normal body copy.</p>
         <div className="lg:p-12 grid lg:grid-cols-3 grid-cols-1 gap-8">
            {newProducts.map((product, key) => {
               const formattedPrice = (product.variants[0].price / 100).toFixed(2) + " €";

               return (
                  <ProductCard
                     key={key}
                     title={product.title}
                     tag={product.tags[0]}
                     price={formattedPrice}
                     image={product.images[0].src}
                  ></ProductCard>
               );
            })}
         </div>
      </div>
   );
}
