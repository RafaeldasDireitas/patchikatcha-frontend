"use client";
import countries from "@/data/countries.json";
import { useGlobalStore } from "@/zustand/globalstore";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import FetchUpdateUserCountry from "./FetchUpdateUserCountry";
import { BlueprintType } from "@/types/BlueprintType";
import { ProfilesType } from "@/types/ProfilesType";
import FetchUpdateCartShippingDatabase from "@/app/profile/FetchUpdateCartShippingDatabase";

export default function CountryDropDown() {
   const globalStore = useGlobalStore();
   const userGeo = globalStore.userGeo;
   const jwtToken = globalStore.jwtToken;
   const userId = globalStore.userId;
   const cart = globalStore.cart;

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

   console.log(userGeoData.userCountry);

   const handleUserGeoData = async () => {
      if (userGeoData.userCountry || userGeoData.countryName || userGeoData.currency) {
         globalStore.setUserGeo({
            userCountry: userGeoData.userCountry,
            countryName: userGeoData.countryName,
            currency: userGeoData.currency
         });

         const newCountry = userGeoData.userCountry;

         if (jwtToken && userId) {
            await FetchUpdateUserCountry({ userId, newCountry, jwtToken });

            let cartBlueprint: BlueprintType[] = [];

            cart.forEach((product) => {
               cartBlueprint = [
                  ...cartBlueprint,
                  { blueprintId: product.blueprint_id, printProviderId: product.print_provider_id, userCountryCode: newCountry }
               ];
            });

            const profileList: ProfilesType[] = await FetchUpdateCartShippingDatabase({ userId, jwtToken, cartBlueprint });

            cart.forEach((product) => {
               const findMatch = profileList.find((profile) => profile.variant_ids.includes(product.variant_id));

               if (findMatch) {
                  globalStore.setCart({
                     ...product,
                     first_item: findMatch.first_item.cost,
                     additional_items: findMatch.additional_items.cost,
                     quantity: 0
                  });
               }
            });
         }

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
                        <Image src={`${country.countryFlag}`} width={30} height={30} alt="No image found" />
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
