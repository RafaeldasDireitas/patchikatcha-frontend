"use client";
import { useEffect, useState } from "react";
import { useGlobalStore } from "@/zustand/globalstore";
import CountryDropDown from "./CountryDropdown";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export default function CountryModal() {
   const globalStore = useGlobalStore();
   const userGeo = globalStore.userGeo;

   return (
      <Dialog defaultOpen>
         <CountryDropDown />
      </Dialog>
   );
}
