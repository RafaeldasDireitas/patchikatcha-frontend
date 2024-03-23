"use client";
import { useEffect, useState } from "react";
import FetchAllProducts from "../FetchAllProducts";
import { ProductType } from "@/types/ProductType";
import { MenProductsType } from "@/types/MenProductsType";

export default function CategoriesMen() {
   const [menProducts, setMenProducts] = useState<MenProductsType>();
   const [pageNumber, setPageNumber] = useState<number>(1);
   const limit = 10;
   const filteredProducts = menProducts?.data.filter((product) => product.tags.map((product) => product.includes("Men's Clothing")));

   console.log(filteredProducts);

   useEffect(() => {
      FetchAllProducts({ limit, pageNumber, setMenProducts });
   }, []);

   return (
      <>
         <div className="p-12">
            <h1>Men</h1>
            <h1>{menProducts?.current_page}</h1>
         </div>
      </>
   );
}
