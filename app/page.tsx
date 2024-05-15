"use client";
import BestSellers from "./BestSellers";
import Hero from "./Hero";
import NewProducts from "./NewProducts";
import Newsletter from "./Newsletter";

export default function Home() {
   return (
      <>
         <Hero />
         <NewProducts />
         <BestSellers />
         {/* <Categories /> */}
         <Newsletter />
      </>
   );
}
