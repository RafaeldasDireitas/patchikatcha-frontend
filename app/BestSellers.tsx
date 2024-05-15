"use client";

import { useEffect, useState } from "react";
import FetchBestSellers from "./FetchBestSellers";
import { BestSellerType } from "@/types/BestSellerType";

export default function BestSellers() {
   const [bestSellers, setBestSellers] = useState<BestSellerType[]>();

   useEffect(() => {
      FetchBestSellers({ setBestSellers });
   }, []);

   return (
      <>
         <h1>{bestSellers && bestSellers[0].price}</h1>
      </>
   );
}
