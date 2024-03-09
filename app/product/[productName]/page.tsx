"use client";
import { ProductType } from "@/types/ProductType";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FetchGrabProduct from "./FetchGrabProduct";
import { useGlobalStore } from "@/zustand/globalstore";
import Loading from "@/app/components/Loading";
import { toast } from "sonner";
import Image from "next/image";

export default function ProductName({ params }: any) {
   const [product, setProduct] = useState<ProductType>();
   const globalStore = useGlobalStore();

   const searchParams = useSearchParams();
   const productName = params.productName;

   const productId = searchParams.get("productId");
   const productVariants = product?.variants;

   useEffect(() => {
      FetchGrabProduct({ productId, setProduct });
   }, []);

   if (!product || !productId) {
      return <Loading />;
   }

   const defaultImage = product.images.find((product) => product.is_default === true);
   const mainImage = defaultImage?.src;

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

   console.log(product);

   return (
      <>
         <div className="p-12">
            <div className="flex flex-row">
               <div className="flex flex-col mr-7">
                  {product.images.map((image, key) => {
                     return <Image className="my-1" key={key} src={image.src} width={200} height={200} alt="No image found"></Image>;
                  })}
               </div>
               <div>{mainImage && <Image className="rounded-xl" src={mainImage} width={1000} height={1000} alt="No image found" />}</div>

               <div className="flex flex-col ml-20">
                  <h1 className="text-3xl text-light yeseva-one-regular">{product.title}</h1>
                  <div className="flex flex-row flex-wrap my-2">
                     {product.tags.map((tag, key) => {
                        return (
                           <button className="btn mx-1 my-1 josefin-sans bg-button-background border-none text-white" key={key}>
                              {tag}
                           </button>
                        );
                     })}
                  </div>

                  <h2 className="my-2 josefin-sans" dangerouslySetInnerHTML={{ __html: product.description }}></h2>
                  <h1 className="text-2xl text-light yeseva-one-regular">Size:</h1>
                  <div className="flex flex-row flex-wrap my-2">
                     {/* {productVariants?.map((variant, key) => {
                        return (
                           <button className="btn ml-1 my-1 w-40 josefin-sans bg-button-background border-none text-white" key={key}>
                              {variant.title}
                           </button>
                        );
                     })} */}
                     <button className="btn">{product.variants[0].title}</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
