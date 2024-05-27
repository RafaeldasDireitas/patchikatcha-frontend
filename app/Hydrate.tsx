"use client";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { useGlobalStore } from "@/zustand/globalstore";
import CountryModal from "./components/CountryModal/CountryModal";
import Script from "next/script";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function Hydrate({ children }: { children: ReactNode }) {
   const [isHydrated, setIsHydrated] = useState(false);
   const globalStore = useGlobalStore();
   const userGeo = globalStore.userGeo;

   // Wait until after hydration to show
   useEffect(() => {
      setIsHydrated(true);
   }, []);

   useEffect(() => {
      if (globalStore.jwtToken.length !== 0) {
         globalStore.setIsAuthenticated(true);
      }
   }, []);

   return (
      <>
         {isHydrated ? (
            <>
               <Navbar />

               {Object.keys(userGeo).length === 0 ? <CountryModal /> : <></>}
               <main className={`${quicksand.className}`}>
                  <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Q7WR8TJ192"></Script>
                  <Script>
                     {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-Q7WR8TJ192');
          `}
                  </Script>
                  <Script src="https://consent.cookiefirst.com/sites/patchikatcha.com-3640d558-7e25-482d-89b5-7bfe9d385b64/consent.js"></Script>
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
                  <div>{children}</div>
               </main>
               <Footer />
            </>
         ) : (
            <>
               <Navbar />
               <Loading />
               <Footer />
            </>
         )}
      </>
   );
}
