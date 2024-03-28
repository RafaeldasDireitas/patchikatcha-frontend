"use client";
import { useEffect, useState } from "react";
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
      // <div className="dropdown">
      //    <div tabIndex={0} role="button" className="btn m-1">
      //       Click
      //    </div>
      //    <ul
      //       tabIndex={0}
      //       className="dropdown-content fixed z-[1] max-h-96 max-w-56 text-white flex flex-col overflow-y-scroll menu p-2 shadow bg-base-100 rounded-box w-52"
      //    >
      //       {countries.countries.country.map((country, key) => (
      //          <div key={key} className="w-full flex flex-col">
      //             <li>
      //                <a>{country.countryName}</a>
      //             </li>
      //          </div>
      //       ))}
      //    </ul>
      // </div>
   );
}
