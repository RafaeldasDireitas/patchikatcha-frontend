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

export default function ProductName({ params }: any) {
   const [product, setProduct] = useState<ProductType>();
   const [quantity, setQuantity] = useState(0);
   const [sizeId, setSizeId] = useState(0);
   const [colorId, setColorId] = useState(0);
   const globalStore = useGlobalStore();

   const searchParams = useSearchParams();
   const productName = params.productName;

   const productId = searchParams.get("productId");

   useEffect(() => {
      FetchGrabProduct({ productId, setProduct });
   }, []);

   const incrementQuantity = () => {
      if (quantity >= 10) {
         toast.error("You cannot add more than 10 products!");
      } else {
         setQuantity(quantity + 1);
      }
   };

   const decrementQuantity = () => {
      if (quantity <= 0) {
         return;
      } else {
         setQuantity(quantity - 1);
      }
   };

   if (!product || !productId) {
      return <Loading />;
   }

   const productVariants: VariantsType[] = product.variants.filter((product) => product.is_enabled === true);

   console.log(product);

   const addToCart = async () => {
      const grabIds = await fetch(`https://localhost:7065/api/Stripe/grab-price-id?productId=${productId}`); //no need to make a separate file for this
      const priceId = await grabIds.text();

      globalStore.setCart({
         name: product.title,
         description: product.description,
         price: product?.variants[0]?.price,
         price_id: priceId,
         image: product?.images[0].src,
         quantity: 1,
         product_id: productId,
         variant_id: product.variants[0].id
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
            </div>
         </div>
      </div>
   );
}
