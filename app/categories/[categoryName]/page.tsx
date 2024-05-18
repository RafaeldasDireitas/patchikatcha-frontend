"use client";
import Breadcrumb from "@/app/components/Breadcrumb";
import { useEffect, useState } from "react";
import FetchCategoryProducts from "./FetchCategoryProducts";
import { useSearchParams } from "next/navigation";
import { categories } from "@/data/CategoriesObject";
import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import { ProductType } from "@/types/ProductType";
import CategoryLoading from "./components/CategoryLoading";

export default function CategoryName({ params }: any) {
   const categoryName = params.categoryName;
   const queryParams = useSearchParams();
   const categoryTitle = queryParams.get("title");
   const decodedCategoryName = categoryName && decodeURIComponent(categoryName);
   const decodedCategoryTitle = categoryTitle && decodeURIComponent(categoryTitle);

   const [products, setProducts] = useState<ProductType[]>();
   const [productPrice, setProductPrice] = useState<number>(500);
   const [searchProducts, setSearchProducts] = useState("");

   useEffect(() => {
      FetchCategoryProducts({ setProducts, categoryName });
   }, []);

   if (!products) {
      return <CategoryLoading categoryName={decodedCategoryName} categoryTitle={decodedCategoryTitle} />;
   }

   const handleProductPrice = (e: any) => {
      const productPrice = e.target.value;
      setProductPrice(productPrice);
   };

   const handleSearchProducts = (e: any) => {
      const searchProducts = e.target.value;
      setSearchProducts(searchProducts);
   };

   const links = ["Home", "Categories", `${decodedCategoryName}`];
   const findContent = categories.find((category) => category.title === categoryTitle);
   const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchProducts.toLocaleLowerCase()));

   console.log(filteredProducts);

   return (
      <div className="flex lg:flex-row flex-col p-12">
         <div className="flex flex-col lg:w-1/3 lg:text-start text-center lg:justify-start justify-center">
            <Breadcrumb links={links} />
            <h1 className="quicksand-bold text-2xl text-light">{decodedCategoryName}</h1>
            <div className="mt-10">
               <h1 className="quicksand-bold text-xl text-dark">{decodedCategoryTitle}</h1>
               {findContent?.content.map((content, key) => (
                  <Link href={{ pathname: `/categories/${content}`, query: { title: categoryTitle } }} key={key + key}>
                     <h2 className="mt-1 quicksand-medium text-base hover:text-light hover:underline hover:cursor-pointer">{content}</h2>
                  </Link>
               ))}
            </div>
            <div className="mt-10">
               <h1 className="quicksand-bold text-xl text-dark">Filter by</h1>
               <p className="quicksand-light mt-1">Price range: {productPrice} €</p>
               <input
                  type="range"
                  min={0}
                  max="500"
                  value={productPrice}
                  className="range [--range-shdw:#ffedd8] h-3 range-xs w-40 justify-center"
                  onChange={handleProductPrice}
               />
            </div>
         </div>

         <div className="flex flex-col lg:w-2/3">
            <div className="flex lg:justify-end justify-center">
               <input
                  type="text"
                  placeholder="Search product..."
                  className="input rounded-full border-border-light focus:border-border-light border-2 my-2 w-72 bg-white quicksand-light"
                  id="productSearch"
                  onChange={handleSearchProducts}
                  value={searchProducts}
               />
            </div>

            <div className="lg:gap-4 gap-6 grid lg:grid-cols-3 grid-cols-1 my-8">
               {products &&
                  filteredProducts &&
                  filteredProducts.map((product, key) => {
                     const productPrice = product.variants.find((variant) => variant.is_enabled === true);

                     return (
                        <Link key={key + key} href={{ pathname: `/product/${product.title}`, query: { productId: product.id } }}>
                           <ProductCard key={key + key} title={product.title} price={productPrice?.price} image={product.images[0].src} />
                        </Link>
                     );
                  })}
            </div>
         </div>
      </div>
   );
}
