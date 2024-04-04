"use client";
import { useEffect, useState } from "react";
import FetchHoodies from "./FetchHoodies";
import { ProductDataType } from "@/types/ProductDataType";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import Loading from "@/app/components/Loading";

type Hoodies = {
   current_page: number;
   data: ProductDataType[];
   from: number;
};

export default function CategoriesMen() {
   const [products, setProducts] = useState<Hoodies>();
   const limit = 15;
   const pageNumber = 1;

   const hoodies = products?.data.filter((product) => product.tags.includes("Hoodies"));

   useEffect(() => {
      FetchHoodies({ limit, pageNumber, setProducts });
   }, []);

   if (!hoodies) {
      return <Loading />;
   }

   return (
      <div className="lg:p-12 py-8 flex flex-col items-center">
         <div className="lg:p-12 grid lg:grid-cols-3 grid-cols-1 gap-8">
            {hoodies &&
               hoodies.map((hoodie, key) => {
                  const productPrice = hoodie.variants.find((variant) => variant.is_enabled === true);

                  const productIVA = productPrice && productPrice.price * 0.23;

                  const basePrice = productPrice && productIVA && productPrice.price + productIVA;

                  const formattedPrice = basePrice && (basePrice / 100).toFixed(2) + " €";

                  return (
                     <Link key={key} href={{ pathname: `/product/${hoodie.title}`, query: { productId: hoodie.id } }}>
                        <ProductCard key={key} title={hoodie.title} price={formattedPrice} image={hoodie.images[0].src}></ProductCard>
                     </Link>
                  );
               })}
         </div>
      </div>
   );
}
