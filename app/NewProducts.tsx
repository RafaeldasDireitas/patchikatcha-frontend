import { useEffect, useRef, useState } from "react";
import ProductCard from "./components/ProductCard";
import FetchNewProducts from "@/app/FetchNewProducts";
import Link from "next/link";
import { NewProductsType } from "@/types/NewProductsType";
import Skeleton from "./components/Skeleton";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function NewProducts() {
   const [newProducts, setNewProducts] = useState<NewProductsType>();
   const skeletons = 6;
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
         <div className="flex flex-col justify-center items-center lg:p-12 my-8">
            <h1 className="text-3xl lg:text-start text-center text-dark font-bold yeseva-one-regular">New Products</h1>
            <p className="py-4 lg:text-start text-center">Here is just a little description that is a little bit bigger than normal body copy.</p>

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
      <div className="lg:p-12 my-8 flex flex-col justify-center items-center relative">
         <h1 className="text-3xl lg:text-start text-center text-dark font-bold yeseva-one-regular">New Products</h1>
         <p className="py-4 lg:text-start text-center">Here is just a little description that is a little bit bigger than normal body copy.</p>
         <div ref={productListRef} className="flex flex-row overflow-x-auto hide-scroll w-full lg:gap-8 lg:p-12">
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
         <button className="btn absolute hidden lg:flex left-4 z-50 btn-circle bg-button-background hover:bg-button-focused text-white border-none" onClick={scrollLeft}>
            <FaArrowLeft />
         </button>

         <button className="btn absolute flex right-4 z-50 btn-circle bg-button-background hover:bg-button-focused text-white border-none" onClick={scrollRight}>
            <FaArrowRight />
         </button>
      </div>
   );
}
