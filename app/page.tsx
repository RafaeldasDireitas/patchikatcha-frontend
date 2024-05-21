"use client";
import AboutUs from "./AboutUs";
import BestSellers from "./BestSellers";
import Hero from "./Hero";
import NewProducts from "./NewProducts";
import Newsletter from "./Newsletter";

export default function Home() {
   return (
      <>
         <Hero />
         <BestSellers />
         <NewProducts />
         <AboutUs />
         <Newsletter />

         {/* <Categories /> */}
      </>
   );
}
