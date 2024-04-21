"use client";
import Quantity from "@/app/product/[productName]/components/Quantity";
import { ProductsData } from "@/data/ProductsData";
import { useGlobalStore } from "@/zustand/globalstore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import FetchUpdateCartDatabase from "../FetchUpdateCartDatabase";

export default function CartProductCard({ productId, image, name, description, basePrice, price, priceId, size, color, quantity, index, additionalItems, firstItem, variantId, children }: any) {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;
   const translateSize = Object.keys(ProductsData).find((product: any) => ProductsData[product] === size);
   const translateColor = Object.keys(ProductsData).find((product: any) => ProductsData[product] === color);
   const [formattedPrice, setFormattedPrice] = useState<string>("");
   const [shippingCost, setShippingCost] = useState<string>("");
   const [isDecrementButtonDisabled, setIsDecrementButtonDisabled] = useState<boolean>(false);
   const [isIncrementButtonDisabled, setIsIncrementButtonDisabled] = useState<boolean>(false);

   useEffect(() => {
      if (index !== undefined && cart[index]) {
         const priceInEuro = (cart[index].price / 100).toFixed(2);
         setFormattedPrice(priceInEuro + " €");
      }

      if (cart[index].quantity === 1) {
         const formattedShippingPrice = (cart[index].first_item / 100).toFixed(2);
         setShippingCost(formattedShippingPrice);
      }

      if (cart[index].quantity > 1) {
         const formattedShippingPrice = ((cart[index].first_item + cart[index].additional_items * (quantity - 1)) / 100).toFixed(2);
         setShippingCost(formattedShippingPrice);
      }
   }, [index, cart]);

   const incrementQuantity = async () => {
      if (quantity > 9) {
         toast.error("You cannot add more than 10 products!");
      } else {
         const updatedQuantity = quantity + 1;
         setIsIncrementButtonDisabled(true);
         FetchUpdateCartDatabase({
            userId,
            cart: {
               name,
               description,
               basePrice,
               price,
               priceId,
               image,
               quantity: updatedQuantity,
               size,
               color,
               productId,
               variantId,
               firstItem,
               additionalItems
            }
         });
         globalStore.setCart({ ...cart[index], quantity: +1, price: basePrice * (cart[index].quantity + 1) }); // quantity + 1 because it grabs the previous quantity from globalStore
         setTimeout(() => {
            setIsIncrementButtonDisabled(false);
         }, 500);
      }
   };

   const decrementQuantity = async () => {
      if (quantity <= 1) {
         return;
      } else {
         const updatedQuantity = quantity - 1;
         setIsDecrementButtonDisabled(true);

         if (userId && jwtToken) {
            FetchUpdateCartDatabase({
               userId,
               cart: {
                  name,
                  description,
                  basePrice,
                  price,
                  priceId,
                  image,
                  quantity: updatedQuantity,
                  size,
                  color,
                  productId,
                  variantId,
                  firstItem,
                  additionalItems
               }
            });
         }

         globalStore.setCart({ ...cart[index], quantity: -1, price: basePrice * (cart[index].quantity - 1) }); // quantity - 1 because it grabs the previous quantity from globalStore
         setTimeout(() => {
            setIsDecrementButtonDisabled(false);
         }, 500);
      }
   };

   return (
      <>
         <div className="mx-auto lg:mx-0 flex justify-center lg:justify-start lg:flex-none lg:w-[600px] w-[300px] m-4 shadow-lg bg-white rounded-xl">
            <div className="flex lg:flex-row flex-col p-8 gap-8">
               <div className="flex flex-col items-center">
                  <Link href={`/product/${name}?productId=${productId}`}>
                     <Image src={image} width={120} height={120} className="hover:scale-110 duration-200" alt="No image found"></Image>
                  </Link>
                  <Quantity
                     width="w-28"
                     quantity={quantity}
                     incrementQuantity={incrementQuantity}
                     isDecrementButtonDisabled={isDecrementButtonDisabled}
                     isIncrementButtonDisabled={isIncrementButtonDisabled}
                     decrementQuantity={decrementQuantity}
                  ></Quantity>
               </div>
               <div className="flex flex-col">
                  <h1 className="text-2xl text-light text-center lg:text-start josefin-sans">{name}</h1>
                  <h2 className="text-center text-lg lg:text-start">
                     {formattedPrice} + {shippingCost} € (Shipping)
                  </h2>
                  <h2 className="text-center lg:text-start">Size: {translateSize}</h2>
                  <h2 className="text-center lg:text-start">Color: {translateColor}</h2>
                  <div className="flex justify-center lg:justify-start ">{children}</div>
               </div>
            </div>
         </div>
      </>
   );
}
