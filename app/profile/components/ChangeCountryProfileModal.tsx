"use client";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import countries from "@/data/countries.json";
import { ProfilesType } from "@/types/ProfilesType";
import { useGlobalStore } from "@/zustand/globalstore";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import FetchUpdateCartShippingDatabase from "../FetchUpdateCartShippingDatabase";
import { BlueprintType } from "@/types/BlueprintType";
import FetchUpdateUserCountry from "@/app/components/CountryModal/FetchUpdateUserCountry";

export default function ChangeCountryProfileModal() {
   const globalStore = useGlobalStore();
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

         toast.success("Your country was changed!");
      } else {
         toast.error("You didn't select a country");
      }
   };

   return (
      <DialogContent className="lg:w-[500px] ">
         <DialogHeader>
            <DialogTitle className="text-dark">Change country</DialogTitle>
            <DialogDescription>This will affect displayed product and shipping prices.</DialogDescription>
         </DialogHeader>
         <div className="grid lg:grid-cols-3 grid-cols-2 gap-2">
            {countries.countries.country.map((country, key) => {
               return (
                  <>
                     <div className="flex">
                        <button
                           key={key + key}
                           className={`btn p-0 w-full px-2 bg-white hover:bg-body-background border-border-light text-black  ${
                              focusButton === country.countryCode ? "focus:bg-button-background" : ""
                           }`}
                           onClick={() => handleOnCountryClick(country)}
                        >
                           <Image src={`${country.countryFlag}`} width={30} height={30} alt="No image found" />
                           {country.countryName}
                        </button>
                     </div>
                  </>
               );
            })}
         </div>
         <DialogFooter>
            <DialogClose onClick={handleUserGeoData}>
               <button className="btn btn-circle w-40 bg-button-background hover:bg-button-focused border-none my-2 text-white ">Confirm</button>
            </DialogClose>
         </DialogFooter>
      </DialogContent>
   );
}
