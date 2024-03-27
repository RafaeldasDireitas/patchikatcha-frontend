"use client";
import { useEffect, useState } from "react";
import countries from "@/data/countries.json";
import { useGlobalStore } from "@/zustand/globalstore";
import CountryDropDown from "./CountryDropdown";

export default function CountryModal() {
   const [isOpen, setIsOpen] = useState(false);
   const globalStore = useGlobalStore();
   const userGeo = globalStore.userGeo;

   const toggleModal = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      if (userGeo) {
         const modal: any = document.getElementById("country_modal");
         modal.showModal();
      }
   }, []);

   return (
      <dialog id="country_modal" className="modal">
         <div className="modal-box text-white bg-button-background">
            <h3 className="font-bold text-lg">Hello!</h3>
            <div className="flex flex-col">
               <CountryDropDown />
            </div>
            <div className="modal-action">
               <form method="dialog">{/* if there is a button in form, it will close the modal */}</form>
            </div>
         </div>
      </dialog>
   );
}
