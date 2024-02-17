"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Hero from "./Hero";

export default function Home() {
   const [dataE, setData] = useState<any>();

   return (
      <>
         <Hero></Hero>
      </>
   );
}
