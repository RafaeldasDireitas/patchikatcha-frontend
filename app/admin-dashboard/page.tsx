"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function AdminDashboard() {
   const [publishProductId, setPublishProductId] = useState();
   const [isAuthorized, setIsAuthorized] = useState(false);
   const globalStore = useGlobalStore();

   const handlePublishProductId = (e: any) => {
      const productId = e.target.value;
      setPublishProductId(productId);
   };

   useEffect(() => {
      const verifyUserRole = async () => {
         const verify = await fetch(`https://localhost:7065/api/Auth/verify-user-role?email=${globalStore.userEmail}`, {
            method: "POST",
            headers: {
               Authorization: `Bearer ${globalStore.jwtToken}`
            },
            body: JSON.stringify(globalStore.userEmail)
         });

         if (!verify.ok) {
            console.log("Something went wrong");
         }

         setIsAuthorized(true);
      };

      verifyUserRole();
   }, []);

   if (!isAuthorized) {
      return <Loading />;
   }

   console.log(publishProductId);

   const publishProduct = async () => {
      const sendData = await fetch("/api/publish-product", {
         method: "POST",
         body: JSON.stringify(publishProductId)
      });

      if (sendData.ok) {
         console.log("Data sent");
      }
   };

   return (
      <div className="flex min-h-screen items-center justify-center">
         <div className="flex flex-col">
            <h1 className="my-1 text-center text-xl">Publish product</h1>
            <input
               type="text"
               onChange={handlePublishProductId}
               value={publishProductId}
               placeholder="Product Id"
               className="input input-bordered input-warning w-full max-w-xs my-1 bg-white"
               id="publish"
            />
            <button className="btn bg-button-background text-white my-1 border-none" onClick={publishProduct}>
               Publish
            </button>
         </div>
      </div>
   );
}
