"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
   const [dataE, setData] = useState<any>();

   useEffect(() => {
      const fetchData = async () => {
         const data = await fetch("https://localhost:7185/api/Mug", {
            method: "GET"
         });

         const jsonData = await data.json();
         setData(jsonData);
      };

      fetchData();
   }, []);

   console.log(dataE);

   return <>{dataE && <h1>{dataE[0].name}</h1>}</>;
}
