import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import FetchNewProducts from "@/app/FetchNewProducts";
import { ProductDataType } from "@/types/ProductDataType";
import Loading from "./components/Loading";
import Link from "next/link";
import { ProductType } from "@/types/ProductType";
import { NewProductsType } from "@/types/NewProductsType";

export default function NewProducts() {
   const [newProducts, setNewProducts] = useState<NewProductsType>();

   useEffect(() => {
      FetchNewProducts({ setNewProducts });
   }, []);

   if (!newProducts) {
      return <Loading />;
   }

   return (
      <div className="lg:p-12 py-8 flex flex-col items-center">
         <h1 className="text-3xl lg:text-start text-center text-light font-bold">New Products</h1>
         <p className="py-4 lg:text-start text-center">Here is just a little description that is a little bit bigger than normal body copy.</p>
         <div className="lg:p-12 grid lg:grid-cols-3 grid-cols-1 gap-8">
            {newProducts.data.map((product, key) => {
               const productPrice = product.variants.find((variant) => variant.is_enabled === true);

               const productIVA = productPrice && productPrice.price * 0.23;

               const basePrice = productPrice && productIVA && productPrice.price + productIVA;

               const formattedPrice = basePrice && (basePrice / 100).toFixed(2) + " €";

               return (
                  <Link key={key} href={{ pathname: `/product/${product.title}`, query: { productId: product.id } }}>
                     <ProductCard
                        key={key}
                        title={product.title}
                        tag={product.tags[0]}
                        price={formattedPrice}
                        image={product.images[0].src}
                     ></ProductCard>
                  </Link>
               );
            })}
         </div>
      </div>
   );
}
