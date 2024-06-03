"use client";
import { ProductsData } from "@/data/ProductsData";
import Image from "next/image";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

export default function CartProduct({ name, description, price, price_id, quantity, image, index, product_id, size, color }: any) {
   const formattedPrice = (price / 100).toFixed(2) + " €";
   const sizeName = Object.keys(ProductsData).find((key: any) => ProductsData[key] === size);
   const colorName = Object.keys(ProductsData).find((key: any) => {
      const value = ProductsData[key];
      return Array.isArray(value) ? value.includes(color) : value === color;
   });

   return (
      <div className="flex flex-row p-1 py-8">
         <div className="flex flex-col relative">
            <Link href={{ pathname: `/product/${name}`, query: { productId: product_id } }}>
               <SheetClose>
                  <Image className="rounded-xl hover:scale-110 duration-200" src={image} width={100} height={100} alt="Product image" />
               </SheetClose>
            </Link>
         </div>
         <div className="flex flex-col px-2 text-start">
            <h1 className="text-lg text-light ">{name}</h1>
            <p>Price: {formattedPrice}</p>
            <p>Quantity: {quantity}</p>
            <p>Size: {sizeName}</p>
            <p>Color: {colorName}</p>
         </div>
      </div>
   );
}
