"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import { useEffect, useState } from "react";
import FetchCategoryProducts from "./FetchCategoryProducts";
import { useSearchParams } from "next/navigation";
import { categories } from "@/data/CategoriesObject";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import { ProductType } from "@/types/ProductType";

export default function CategoryName({ params }: any) {
   const categoryName = params.categoryName;
   const queryParams = useSearchParams();
   const categoryTitle = queryParams.get("title");

   const [products, setProducts] = useState<ProductType[]>();
   const [productPrice, setProductPrice] = useState<number>(0);

   const links = ["Home", "Categories", `${categoryName}`];
   const findContent = categories.find((category) => category.title === categoryTitle);

   useEffect(() => {
      FetchCategoryProducts({ setProducts, categoryName });
   }, []);

   const handleProductPrice = (e: any) => {
      const productPrice = e.target.value;
      setProductPrice(productPrice);
   };

   return (
      <div className="flex flex-row p-12">
         <div className="flex flex-col w-1/3 my-8">
            <Breadcrumb links={links} />
            <h1 className="quicksand-bold text-2xl text-light">{categoryName}</h1>
            <div className="mt-20">
               <h1 className="quicksand-bold text-xl text-dark">{categoryTitle}</h1>
               {findContent &&
                  findContent.content.map((content, key) => (
                     <Link href={{ pathname: `/categories/${content}`, query: { title: categoryTitle } }} key={key}>
                        <h2 className="mt-1 quicksand-medium text-base hover:text-light hover:underline hover:cursor-pointer">{content}</h2>
                     </Link>
                  ))}
            </div>
            <div className="mt-10">
               <h1 className="quicksand-bold text-xl text-dark">Filter by</h1>
               <input
                  type="range"
                  min={0}
                  max="100"
                  value={productPrice}
                  className="range [--range-shdw:#BC6C25] range-xs w-40"
                  onChange={handleProductPrice}
               />
            </div>
         </div>

         <div className="gap-4 grid grid-cols-3 w-2/3 my-8">
            {products &&
               products.map((product) => (
                  <Link href={{ pathname: `/product/${product.title}`, query: { productId: product.id } }}>
                     <ProductCard title={product.title} price={product.variants[0].cost} image={product.images[0].src} />
                  </Link>
               ))}
         </div>
      </div>
   );
}
