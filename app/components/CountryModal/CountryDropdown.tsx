"use client";
import countries from "@/data/countries.json";
import { useGlobalStore } from "@/zustand/globalstore";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function CountryDropDown() {
   const globalStore = useGlobalStore();
   const userGeo = globalStore.userGeo;

   const [focusButton, setFocusButton] = useState("");
   const [userGeoData, setUserGeoData] = useState({
      userCountry: "",
      countryName: "",
      currency: ""
   });

   const handleOnCountryClick = (country: any) => {
      setUserGeoData({
         userCountry: country.countryCode,
         countryName: country.countryName,
         currency: country.currencyCode
      });

      setFocusButton(country.countryCode);
   };

   const handleUserGeoData = () => {
      if (userGeoData.userCountry || userGeoData.countryName || userGeoData.currency) {
         globalStore.setUserGeo({
            userCountry: userGeoData.userCountry,
            countryName: userGeoData.countryName,
            currency: userGeoData.currency
         });

         toast.success("Your country was selected!");
      } else {
         toast.error("You didn't select a country");
      }
   };

   return (
      <>
         <div className="grid grid-cols-3 gap-2">
            {countries.countries.country.map((country, key) => {
               return (
                  <>
                     <button
                        className={`btn p-0 bg-white border-none text-black ${
                           focusButton === country.countryCode ? "focus:bg-button-background" : ""
                        }`}
                        onClick={() => handleOnCountryClick(country)}
                     >
                        <Image src={`${country.countryFlag}`} width={30} height={30} alt="No image found"></Image>
                        {country.countryName}
                     </button>
                  </>
               );
            })}
         </div>
         <button className="btn my-2" onClick={handleUserGeoData}>
            Confirm country!
         </button>
      </>
   );
}
