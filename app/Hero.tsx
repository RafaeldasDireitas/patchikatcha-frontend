"use client";
import Image from "next/image";
import bearPyjama from "@/public/bear_pyjama_party.png";
import { useEffect, useState } from "react";
import { categories } from "@/data/CategoriesObject";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
   const [href, setHref] = useState("");

   useEffect(() => {
      setHref(getRandomHref());
   }, []);

   const getRandomHref = () => {
      const hrefs = categories.flatMap((category) => category.href);
      const randomIndex = Math.floor(Math.random() * hrefs.length);
      return hrefs[randomIndex];
   };

   return (
      <>
         <section className="bg-body-background">
            <div className="flex flex-row max-w-screen-xl mx-auto lg:py-8 py-4">
               <div className="mx-auto place-self-center lg:justify-start justify-center">
                  <div className="flex lg:hidden flex-col justify-center items-center">
                     <Image src={bearPyjama} width={250} height={250} alt="Epic bear" priority />
                  </div>
                  <h1 className="max-w-2xl mb-4 mt-1 lg:text-4xl md:text-4xl text-3xl tracking-tight lg:mx-0 md:mx-2 sm:mx-2 mx-2 leading-none xl:text-6xl text-dark text-center lg:text-start">
                     Cuteness without limits!
                  </h1>
                  <p className="max-w-2xl mb-6 text-black lg:mb-8 md:text-lg lg:text-xl lg:text-start text-center lg:mx-0 mx-6 ">
                     Join our fluffy companions on their journey of bringing joy and happiness to every day of your life. Whether you are looking for
                     the perfect gift or a little treat for yourself, our items are sure to warm your heart!{" "}
                  </p>
                  <div className="flex lg:justify-start xl:justify-start justify-center">
                     <motion.div transition={{}} whileHover={{ rotateY: 30 }}>
                        <Link href={`${href}`}>
                           <button className="btn flex bg-button-background hover:bg-button-focused border-none items-center rounded-3xl px-5 py-3 mr-3 text-base text-white">
                              Shop Now
                              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                 ></path>
                              </svg>
                           </button>
                        </Link>
                     </motion.div>
                  </div>
               </div>
               <div className="hidden lg:flex">
                  <Image src={bearPyjama} width={500} height={500} alt="Epic turtle" priority />
               </div>
            </div>
         </section>
      </>
   );
}
