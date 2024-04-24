"use client";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "@/app/components/navbar/Navbar";
import { useGlobalStore } from "@/zustand/globalstore";
import CountryModal from "./components/CountryModal/CountryModal";
import Script from "next/script";

export default function Hydrate({ children }: { children: ReactNode }) {
   const [isHydrated, setIsHydrated] = useState(false);
   const globalStore = useGlobalStore();
   const userGeo = globalStore.userGeo;

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
               {Object.keys(userGeo).length === 0 ? <CountryModal /> : <></>}
               <main className="flex-grow">
                  <div className="gtranslate_wrapper"></div>
                  <Script
                     dangerouslySetInnerHTML={{
                        __html: `
            window.gtranslateSettings = {"default_language": "en", "languages":["en","fr","de","it","es", "pt"]};
          `
                     }}
                  />
                  <Script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer />
                  <div>{children}</div>
               </main>
            </>
         ) : (
            <Navbar />
         )}
      </>
   );
}
