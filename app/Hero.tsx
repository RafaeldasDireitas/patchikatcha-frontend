import Image from "next/image";
import turtle from "@/public/turtle.png";
import bearPyjama from "@/public/bear_pyjama_party.png";

export default function Hero() {
   return (
      <>
         <section className="bg-hero-section-image">
            <div className="flex flex-row max-w-screen-xl py-8 mx-auto">
               <div className="mr-auto place-self-center lg:justify-start justify-center">
                  <h1 className="max-w-2xl mb-4 lg:text-4xl md:text-4xl text-3xl font-extrabold tracking-tight lg:mx-0 md:mx-2 sm:mx-2 mx-2 leading-none xl:text-6xl text-light text-center lg:text-start quicksand-bold">
                     Just a cute headline for a cute raccoon
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl lg:text-start text-center lg:mx-0 mx-6 quicksand-medium">Here is just a little description that is a little bit bigger than normal body copy. </p>
                  <div className="flex lg:justify-start xl:justify-start justify-center">
                     <button className="btn flex bg-button-background hover:bg-button-focused border-none quicksand-semibold items-center rounded-3xl px-5 py-3 mr-3  text-base text-white">
                        Shop Now
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                     </button>
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
