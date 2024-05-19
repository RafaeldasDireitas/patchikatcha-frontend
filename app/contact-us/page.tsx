"use client";
import { useEffect } from "react";

export default function ContactUs() {
   useEffect(() => {
      document.title = "Contact us";
   }, []);

   return (
      <div className="p-12">
         <h1 className="text-3xl text-dark quicksand-bold">Contact us</h1>
      </div>
   );
}
