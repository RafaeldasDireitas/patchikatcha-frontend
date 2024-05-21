"use client";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FetchChangeProductTag from "../FetchChangeProductTag";
import { useGlobalStore } from "@/zustand/globalstore";

export default function ChangeProductTag() {
   const globalStore = useGlobalStore();
   const jwtToken = globalStore.jwtToken;

   const [productId, setProductId] = useState("");
   const [tag, setTag] = useState("Hoodies");

   const handleProductId = (e: any) => {
      const productId = e.target.value;
      setProductId(productId);
   };

   const tagHandler = (value: string) => {
      const tag = value;
      setTag(tag);
   };

   const changeProductTag = () => {
      FetchChangeProductTag({ productId, tag, jwtToken }); //printify product tag, not db tag
   };

   return (
      <>
         <h1 className="my-1 text-xl">Change product tag (Printify)</h1>

         <input
            type="text"
            onChange={handleProductId}
            value={productId}
            placeholder="Product Id"
            className="input input-bordered input-warning w-full max-w-xs my-1 bg-white"
            id="productId"
         />

         <Select onValueChange={tagHandler} defaultValue={tag}>
            <SelectTrigger className="w-full max-w-xs">
               <SelectValue placeholder="Tag" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="Hoodies">Hoodies</SelectItem>
               <SelectItem value="Mugs">Mugs</SelectItem>
            </SelectContent>
         </Select>

         <button className="btn btn-circle w-60 bg-button-background hover:bg-button-focused text-white my-1 border-none" onClick={changeProductTag}>
            Change
         </button>
      </>
   );
}
