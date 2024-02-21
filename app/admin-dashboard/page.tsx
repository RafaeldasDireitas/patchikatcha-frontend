"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { FetchVerifyUserRole } from "./FetchVerifyUserRole";

export default function AdminDashboard() {
   const [publishProductId, setPublishProductId] = useState();
   const [isAuthorized, setIsAuthorized] = useState(false);
   const globalStore = useGlobalStore();
   const jwtToken = globalStore.jwtToken;
   const userEmail = globalStore.userEmail;

   const handlePublishProductId = (e: any) => {
      const productId = e.target.value;
      setPublishProductId(productId);
   };

   useEffect(() => {
      FetchVerifyUserRole({ jwtToken, userEmail, setIsAuthorized });
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
