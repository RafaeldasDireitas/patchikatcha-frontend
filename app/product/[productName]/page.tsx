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
import useFindMineValue from "@/lib/useFindMinValue";
import DetailedDescription from "./components/DetailedDescription";
import ImageDescription from "./ImageDescription";

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
   let variantId = product?.variants[0].id; //app enters a loop if its a state
   let shippingCosts: number[] = [];

   document.title = decodedProductName;

   useEffect(() => {
      FetchGrabProduct({ productId, setProduct, setBlueprintId, setPrintProviderId, setIsProductGrabbed });

      if (isProductGrabbed) {
         FetchShippingRate(blueprintId, printProviderId, setShippingRate);
      }
   }, [sizeId, colorId]);

   if (!product || !productId) {
      return <Loading />;
   }

   const findCountryShippingRate = shippingRate && shippingRate.profiles.find((profile) => profile.countries.includes(userCountry));

   shippingRate?.profiles.map((profile) => shippingCosts.push(profile.first_item.cost)); //grab shipping prices

   const productPrice = product.variants.find((variant) => variant.is_enabled === true);

   const productIVA = productPrice && productPrice.price * 0.23;

   const basePrice = productPrice && productIVA && productPrice.price + productIVA;

   const formattedPrice = basePrice && (basePrice / 100).toFixed(2) + " €";

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

         if (basePrice) {
            globalStore.setCart({
               name: product.title,
               description: product.description,
               price: basePrice,
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
      }
   };

   return (
      <div className="bg-body-background">
         <div className="lg:m-12 bg-white rounded-xl max-w-[1920px]">
            <div className="flex lg:flex-row flex-col gap-6 lg:p-12">
               <Images product={product}></Images>

               <div className="flex flex-col">
                  <Title product={product} />

                  <Description product={product} />

                  <Sizes productVariants={productVariants} setSizeId={setSizeId} />

                  <Colors setColorId={setColorId} productVariants={productVariants} />

                  <Quantity quantity={quantity} setQuantity={setQuantity} />

                  <AddToCart addToCart={addToCart} />
                  {formattedPrice}
               </div>
            </div>

            <div className="lg:m-12 p-2 gap-6 flex lg:flex-row flex-col">
               <DetailedDescription product={product} />
               <ImageDescription product={product}></ImageDescription>
            </div>
         </div>
      </div>
   );
}
