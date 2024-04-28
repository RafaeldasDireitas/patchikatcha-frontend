import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import FetchNewProducts from "@/app/FetchNewProducts";
import Link from "next/link";
import { NewProductsType } from "@/types/NewProductsType";
import Skeleton from "./components/Skeleton";

export default function NewProducts() {
   const [newProducts, setNewProducts] = useState<NewProductsType>();
   const skeletons = 6;

   useEffect(() => {
      FetchNewProducts({ setNewProducts });
   }, []);

   if (!newProducts) {
      return (
         <div className="flex flex-col justify-center items-center lg:p-12">
            <h1 className="text-3xl lg:text-start text-center text-dark font-bold yeseva-one-regular">New Products</h1>
            <p className="py-4 lg:text-start text-center">Here is just a little description that is a little bit bigger than normal body copy.</p>

            <div className="lg:p-12 grid lg:grid-cols-3 grid-cols-1 gap-8">
               {[...Array(skeletons)].map((skeleton, key) => (
                  <Skeleton key={key} widthInPx={350} heightInPx={450} />
               ))}
            </div>
         </div>
      );
   }

   return (
      <div className="lg:p-12 my-8 flex flex-col items-center">
         <h1 className="text-3xl lg:text-start text-center text-dark font-bold yeseva-one-regular">New Products</h1>
         <p className="py-4 lg:text-start text-center">Here is just a little description that is a little bit bigger than normal body copy.</p>
         <div className="lg:p-12 grid lg:grid-cols-3 grid-cols-1 gap-8">
            {newProducts.data.map((product, key) => {
               const productPrice = product.variants.find((variant) => variant.is_enabled === true);

               const productIVA = productPrice && productPrice.price * 0.23;

               const basePrice = productPrice && productIVA && productPrice.price + productIVA;

               const formattedPrice = basePrice && (basePrice / 100).toFixed(2) + " €";

               return (
                  <Link key={key} href={{ pathname: `/product/${product.title}`, query: { productId: product.id } }}>
                     <ProductCard key={key} title={product.title} price={formattedPrice} image={product.images[0].src}></ProductCard>
                  </Link>
               );
            })}
         </div>
      </div>
   );
}
