"use client";
import { ProductType, VariantsType } from "@/types/ProductType";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FetchGrabProduct from "./FetchGrabProduct";
import { useGlobalStore } from "@/zustand/globalstore";
import Loading from "@/app/components/Loading";
import { toast } from "sonner";
import Image from "next/image";

export default function ProductName({ params }: any) {
   const [product, setProduct] = useState<ProductType>();
   const [quantity, setQuantity] = useState(0);
   const [availableSizes, setAvailableSizes] = useState([
      {
         title: "",
         id: 0
      }
   ]);
   const [availableColors, setAvailableColors] = useState([]);
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

   const sideImages = product.images.slice(0, 5);
   const defaultImage = product.images.find((product) => product.is_default === true);
   const mainImage = defaultImage?.src;
   const productVariants: VariantsType[] = product.variants.filter((product) => product.is_enabled === true);
   const sizes = productVariants.map((size) => size.options[0]);
   const colors = productVariants.flatMap((color) => [...availableColors, color.options[0]]);
   console.log(productVariants);
   console.log(sizes);

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
                  {sideImages.map((image, key) => {
                     return <Image className="my-1 rounded-xl" key={key} src={image.src} width={200} height={200} alt="No image found"></Image>;
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

                  <h1 className="text-2xl text-light yeseva-one-regular">Sizes:</h1>
                  <div className="flex flex-row flex-wrap my-2">
                     {product.options[1].values.map((value, key) => {
                        return (
                           <button className="btn ml-1 my-1 w-20 josefin-sans bg-button-background border-none text-white" key={key}>
                              {value.title}
                           </button>
                        );
                     })}
                  </div>

                  <h1 className="text-2xl text-light yeseva-one-regular">Colors:</h1>
                  <div className="flex flex-row flex-wrap my-2">
                     {product.options[0].values.map((value, key) => {
                        return (
                           <button className="btn ml-1 my-1 w-20 josefin-sans bg-button-background border-none text-white" key={key}>
                              {value.title}
                           </button>
                        );
                     })}
                  </div>

                  <div className="flex justify-end">
                     <div className="w-40 rounded-xl flex items-center justify-start bg-button-background">
                        <button className="flex items-center justify-start p-2 hover:scale-110 duration-150" onClick={decrementQuantity}>
                           <svg
                              className="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <path d="M5 12h14" />
                           </svg>
                        </button>

                        <div className="flex w-1/2 justify-center items-center">
                           <h1 className="text-white josefin-sans">{quantity}</h1>
                        </div>

                        <button className="flex items-center justify-end p-2" onClick={incrementQuantity}>
                           <svg
                              className="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                           </svg>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
