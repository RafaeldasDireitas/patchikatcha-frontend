"use client";
import Hero from "./Hero";
import NewProducts from "./NewProducts";

export default function Home() {
   const sendEmail = async () => {
      const email = await fetch("/api/send-email-verification", {
         method: "POST",
         body: JSON.stringify("lol")
      });
   };

   return (
      <>
         <Hero />
         <NewProducts />
         <button className="btn" onClick={sendEmail}>
            Send Email
         </button>
      </>
   );
}
