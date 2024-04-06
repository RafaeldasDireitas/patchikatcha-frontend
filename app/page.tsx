"use client";
import Categories from "./Categories";
import Hero from "./Hero";
import NewProducts from "./NewProducts";
import Newsletter from "./Newsletter";

export default function Home() {
   return (
      <>
         <Hero />
         <NewProducts />
         <Categories />
         {/* <Newsletter /> */}
      </>
   );
}
