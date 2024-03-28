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
import { endpoints } from "@/endpoints/endpoints";
import FetchShippingRate from "./FetchShippingRate";
import { ShippingRateType } from "@/types/ShippingRateType";

export default function ProductName({ params }: any) {
   const [product, setProduct] = useState<ProductType>();
   const [quantity, setQuantity] = useState<number>(1);
   const [sizeId, setSizeId] = useState<number>(0);
   const [colorId, setColorId] = useState<number>(0);
   const [blueprintId, setBlueprintId] = useState<number>(0);
   const [printProviderId, setPrintProviderId] = useState<number>(0);
   const [shippingRate, setShippingRate] = useState<ShippingRateType>();
   const [isProductGrabbed, setIsProductGrabbed] = useState(false);
   const globalStore = useGlobalStore();
   const userGeo = globalStore.userGeo;
   const userCountry = userGeo.userCountry;

   const searchParams = useSearchParams();
   const productName = params.productName;
   const decodedProductName = decodeURIComponent(productName);
   const productId = searchParams.get("productId");
   let variantId = 0; //app enters a loop if its a state

   document.title = decodedProductName;

   useEffect(() => {
      FetchGrabProduct({ productId, setProduct, setBlueprintId, setPrintProviderId, setIsProductGrabbed });

      if (isProductGrabbed) {
         FetchShippingRate(blueprintId, printProviderId, setShippingRate);
      }
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

   const findCountryShippingRate = shippingRate && shippingRate.profiles.find((profile) => profile.countries.includes(userCountry));

   const productVariants: VariantsType[] = product.variants.filter((product) => product.is_enabled === true);

   const matchingVariant = productVariants.find((variant) => {
      return variant.options.includes(colorId) && variant.options.includes(sizeId);
   });

   if (matchingVariant) {
      variantId = matchingVariant.id;
   }

   const addToCart = async () => {
      if (!findCountryShippingRate) {
         toast.error("There was an error, try again");
      } else {
         const grabPriceId = await fetch(endpoints.url + endpoints.grabPriceId(productId)); //no need to make a separate file for this
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
            variant_id: variantId ?? 0,
            first_item: findCountryShippingRate.first_item.cost,
            additional_items: findCountryShippingRate.additional_items.cost
         });

         toast.success("Added to cart!");
      }
   };

   console.log(findCountryShippingRate);

   return (
      <div className="p-12">
         <div className="flex flex-row gap-10">
            <Images product={product}></Images>

            <div className="flex flex-col">
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
