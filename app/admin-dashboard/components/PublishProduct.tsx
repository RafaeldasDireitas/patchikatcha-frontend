"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { useState } from "react";
import FetchPublishProduct from "../FetchPublishProduct";

export default function PublishProduct() {
   const [productId, setProductId] = useState("");

   const globalStore = useGlobalStore();
   const jwtToken = globalStore.jwtToken;

   const handleProductId = (e: any) => {
      const productId = e.target.value;
      setProductId(productId);
   };

   const publishProduct = () => {
      FetchPublishProduct({ jwtToken, productId });
   };

   return (
      <>
         <h1 className="my-1 text-xl">Publish product</h1>
         <input
            type="text"
            onChange={handleProductId}
            value={productId}
            placeholder="Product Id"
            className="input input-bordered input-warning w-full max-w-xs my-1 bg-white"
            id="publish"
         />
         <button className="btn btn-circle w-60 bg-button-background hover:bg-button-focused text-white my-1 border-none" onClick={publishProduct}>
            Publish
         </button>
      </>
   );
}
