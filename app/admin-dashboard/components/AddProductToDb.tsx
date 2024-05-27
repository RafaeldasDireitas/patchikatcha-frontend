"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import FetchAddProductToDb from "../FetchAddProductToDb";
import { useGlobalStore } from "@/zustand/globalstore";

export default function AddProductToDb() {
   const globalStore = useGlobalStore();
   const jwtToken = globalStore.jwtToken;

   const [productId, setProductId] = useState("");
   const [title, setTitle] = useState("");
   const [price, setPrice] = useState(0);
   const [image, setImage] = useState("");
   const [tag, setTag] = useState("Hoodies");

   const dbProductDto = {
      productId: productId,
      title: title,
      tag: tag,
      price: price,
      image: image,
      purchases: 0
   };

   const handleProductId = (e: any) => {
      const productId = e.target.value;
      setProductId(productId);
   };

   const handleTitle = (e: any) => {
      const title = e.target.value;
      setTitle(title);
   };

   const handlePrice = (e: any) => {
      const price = e.target.value;
      setPrice(price);
   };

   const handleImage = (e: any) => {
      const image = e.target.value;
      setImage(image);
   };

   const tagHandler = (value: string) => {
      const tag = value;
      setTag(tag);
   };

   const createProduct = () => {
      FetchAddProductToDb({ dbProductDto, jwtToken });
   };

   return (
      <>
         <h1 className="my-1 text-xl">Create product in database</h1>
         <p>(Price is base price in printify)</p>
         <input
            type="text"
            onChange={handleProductId}
            value={productId}
            placeholder="Product Id"
            className="input input-bordered input-warning w-full max-w-xs my-1 bg-white"
            id="productId"
         />
         <input
            type="text"
            onChange={handleTitle}
            value={title}
            placeholder="Title"
            className="input input-bordered input-warning w-full max-w-xs my-1 bg-white"
            id="title"
         />
         <input
            type="number"
            onChange={handlePrice}
            value={price}
            placeholder="Price"
            className="input input-bordered input-warning w-full max-w-xs my-1 bg-white"
            id="price"
         />
         <input
            type="text"
            onChange={handleImage}
            value={image}
            placeholder="Image"
            className="input input-bordered input-warning w-full max-w-xs my-1 bg-white"
            id="image"
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
         <button className="btn btn-circle w-60 bg-button-background hover:bg-button-focused text-white my-1 border-none" onClick={createProduct}>
            Create
         </button>
      </>
   );
}
