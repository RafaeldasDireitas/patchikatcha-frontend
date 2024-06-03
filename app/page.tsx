"use client";
import AboutUs from "./AboutUs";
import BestSellers from "./BestSellers";
import Categories from "./Categories";
import Hero from "./Hero";
import NewProducts from "./NewProducts";
import Newsletter from "./Newsletter";

export default function Home() {
   return (
      <>
         <Hero />
         <div className="flex flex-col">
            <BestSellers />
            <NewProducts />
            <Categories />

            <AboutUs />
         </div>
         <Newsletter />

         {/* <Categories /> */}
      </>
   );
}
