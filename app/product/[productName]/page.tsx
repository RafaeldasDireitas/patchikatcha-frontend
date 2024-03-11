"use client";
import { ProductType, VariantsType } from "@/types/ProductType";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FetchGrabProduct from "./FetchGrabProduct";
import { useGlobalStore } from "@/zustand/globalstore";
import Loading from "@/app/components/Loading";
import { toast } from "sonner";
import Sizes from "./components/Sizes";
import Description from "./components/Description";
import Tags from "./components/Tags";
import Title from "./components/Title";
import Colors from "./components/Colors";
import Quantity from "./components/Quantity";
import Images from "./components/Images";
import AddToCart from "./components/AddToCart";

export default function ProductName({ params }: any) {
   const [product, setProduct] = useState<ProductType>();
   const [quantity, setQuantity] = useState<number>(1);
   const [sizeId, setSizeId] = useState<number>(0);
   const [colorId, setColorId] = useState<number>(0);
   const globalStore = useGlobalStore();

   const searchParams = useSearchParams();
   const productName = params.productName;
   const productId = searchParams.get("productId");
   let variantId = 0;

   useEffect(() => {
      FetchGrabProduct({ productId, setProduct });
   }, [sizeId, colorId]);

   const incrementQuantity = () => {
      if (quantity >= 10) {
         toast.error("You cannot add more than 10 products!");
      } else {
         setQuantity(quantity + 1);
      }
   };

   const decrementQuantity = () => {
      if (quantity <= 1) {
         return;
      } else {
         setQuantity(quantity - 1);
      }
   };

   if (!product || !productId) {
      return <Loading />;
   }

   const productVariants: VariantsType[] = product.variants.filter((product) => product.is_enabled === true);

   const matchingVariant = productVariants.find((variant) => {
      return variant.options.includes(colorId) && variant.options.includes(sizeId);
   });

   if (matchingVariant) {
      variantId = matchingVariant.id;
   }

   const addToCart = async () => {
      const grabPriceId = await fetch(`https://localhost:7065/api/Stripe/grab-price-id?productId=${productId}`); //no need to make a separate file for this
      const priceId = await grabPriceId.text();

      globalStore.setCart({
         name: product.title,
         description: product.description,
         price: product?.variants[0]?.price,
         price_id: priceId,
         image: product?.images[0].src,
         quantity: quantity,
         size: sizeId,
         color: colorId,
         product_id: productId,
         variant_id: variantId ?? 0
      });

      toast.success("Added to cart!");
   };

   return (
      <div className="p-12">
         <div className="flex flex-row">
            <Images product={product}></Images>

            <div className="flex flex-col ml-20">
               <Title product={product}></Title>

               <Tags product={product}></Tags>

               <Description product={product}></Description>

               <Sizes productVariants={productVariants} setSizeId={setSizeId}></Sizes>

               <Colors setColorId={setColorId} productVariants={productVariants}></Colors>

               <Quantity quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}></Quantity>

               <AddToCart addToCart={addToCart}></AddToCart>
            </div>
         </div>
      </div>
   );
}
