import { useEffect, useRef, useState } from "react";
import ProductCard from "./components/ProductCard";
import Link from "next/link";
import { NewProductsType } from "@/types/NewProductsType";
import Skeleton from "./components/Skeleton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FetchNewProducts from "./FetchNewProducts";
import { ProductInDbType } from "@/types/ProductInDbType";

export default function NewProducts() {
   const [newProducts, setNewProducts] = useState<ProductInDbType[]>();
   const productListRef: any = useRef(null);

   const scrollLeft = () => {
      if (productListRef.current) {
         productListRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
   };

   const scrollRight = () => {
      if (productListRef.current) {
         productListRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
   };

   useEffect(() => {
      FetchNewProducts({ setNewProducts });
   }, []);

   if (!newProducts) {
      return (
         <div className="flex flex-col justify-center items-center lg:p-12 my-4">
            <h1 className="text-3xl lg:text-start text-center text-dark">New Products</h1>
            <p className="my-2 lg:text-start text-center mx-4 lg:mx-0">
               Here is just a little description that is a little bit bigger than normal body copy.
            </p>

            <div className="flex flex-row overflow-x-auto w-full justify-center gap-8 lg:p-12 my-8">
               <Skeleton widthInPx={320} heightInPx={322} />
               <div className="lg:flex hidden gap-8">
                  <Skeleton widthInPx={320} heightInPx={322} />
                  <Skeleton widthInPx={320} heightInPx={322} />
                  <Skeleton widthInPx={320} heightInPx={322} />
               </div>
            </div>
         </div>
      );
   }

   return (
      <div className="lg:p-12 flex flex-col justify-center items-center relative">
         <h1 className="text-3xl lg:text-start text-center text-dark">New Products</h1>
         <p className="my-2 lg:text-start text-center mx-4 lg:mx-0">
            Here is just a little description that is a little bit bigger than normal body copy.
         </p>
         <div ref={productListRef} className="flex flex-row px-6 lg:px-0 overflow-x-auto hide-scroll w-full lg:gap-8 lg:p-12 mt-4 lg:mt-0">
            {newProducts.map((product, key) => {
               return (
                  <Link key={key + key} href={{ pathname: `/product/${product.title}`, query: { productId: product.productId } }}>
                     <ProductCard
                        key={key + key}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        secondImage={product.secondImage}
                     ></ProductCard>
                  </Link>
               );
            })}
         </div>
         <button
            className="btn absolute hidden lg:flex left-4 z-50 btn-circle bg-button-background hover:bg-button-focused text-white border-none"
            onClick={scrollLeft}
         >
            <FaArrowLeft />
         </button>

         <button
            className="btn absolute flex right-4 z-50 btn-circle bg-button-background hover:bg-button-focused text-white border-none"
            onClick={scrollRight}
         >
            <FaArrowRight />
         </button>
      </div>
   );
}
