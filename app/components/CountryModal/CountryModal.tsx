"use client";
import { useState } from "react";
import countries from "@/data/countries.json";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CountryModal() {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState(true);
   const globalStore = useGlobalStore();
   const userGeo = globalStore.userGeo;

   const handleUserGeoData = (country: any) => {
      globalStore.setUserGeo({
         userCountry: country.countryCode,
         countryName: country.countryName,
         currency: country.currencyCode
      });

      toast.success("Your country was selected!");

      location.reload();
   };

   return (
      <>
         {isOpen ? (
            <div className="dropdown dropdown-left fixed top-20 right-2">
               <div className="absolute -top-1 -right-1">
                  <button className="btn btn-circle bg-button-background min-h-0 w-6 h-6" onClick={() => setIsOpen(!isOpen)}></button>
               </div>
               <div tabIndex={0} role="button" className="btn m-1">
                  {userGeo.countryName} - {userGeo.currency}
               </div>
               <ul
                  tabIndex={0}
                  className="dropdown-content fixed z-[1] max-h-96 max-w-56 text-white flex flex-row overflow-y-scroll menu p-2 shadow bg-base-100 rounded-box w-52"
               >
                  {countries.countries.country.map((country, key) => (
                     <div key={key} className="w-full">
                        <li>
                           <a onClick={() => handleUserGeoData(country)}>{country.countryName}</a>
                        </li>
                     </div>
                  ))}
               </ul>
            </div>
         ) : (
            <div className="fixed top-20 right-2">
               <button className="btn btn-circle bg-button-background min-h-0 w-6 h-6" onClick={() => setIsOpen(!isOpen)}></button>
            </div>
         )}
      </>
   );
}
