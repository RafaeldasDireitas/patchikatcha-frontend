"use client";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { useGlobalStore } from "@/zustand/globalstore";
import CountryModal from "./components/CountryModal/CountryModal";
import Script from "next/script";
import Loading from "./components/Loading";

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
               <main>
                  <div className="gtranslate_wrapper"></div>
                  <Script
                     dangerouslySetInnerHTML={{
                        __html: `
         window.gtranslateSettings = {"default_language":"en","languages":["en","fr","de","it","es", "pt"],"wrapper_selector":".gtranslate_wrapper","switcher_horizontal_position":"right"};
      `
                     }}
                  ></Script>
                  <Script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer />
                  <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
                  <div className="flex-grow">{children}</div>
               </main>
            </>
         ) : (
            <>
               <Navbar />
               <Loading />
            </>
         )}
      </>
   );
}
