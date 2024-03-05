"use client";
import Image from "next/image";
import Link from "next/link";

export default function CartProduct({ name, description, price, price_id, quantity, image, index, product_id }: any) {
   const formattedPrice = (price / 100).toFixed(2) + " €";

   return (
      <div className="flex flex-row p-4">
         <div className="flex flex-col">
            <Link href={{ pathname: `/product/${name}`, query: { productId: product_id } }}>
               <Image src={image} width={100} height={100} alt="Product image"></Image>
            </Link>
         </div>
         <div className="flex flex-col px-2">
            <h1 className="text-lg">{name}</h1>
            <p>{formattedPrice}</p>
            <p>Quantity: {quantity}</p>
         </div>
      </div>
   );
}
