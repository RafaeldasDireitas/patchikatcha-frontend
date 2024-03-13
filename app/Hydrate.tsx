"use client";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "./components/Footer";
import { useGlobalStore } from "@/zustand/globalstore";

export default function Hydrate({ children }: { children: ReactNode }) {
   const [isHydrated, setIsHydrated] = useState(false);
   const globalStore = useGlobalStore();

   useEffect(() => {
      if (globalStore.jwtToken.length !== 0) {
         globalStore.setIsAuthenticated(true);
      }
   }, []);

   // Wait until after hydration to show
   useEffect(() => {
      setIsHydrated(true);
   }, []);

   return (
      <>
         {isHydrated ? (
            <>
               <Navbar />
               <main>
                  <div>{children}</div>
               </main>
               <Footer />
            </>
         ) : (
            <Navbar />
         )}
      </>
   );
}
