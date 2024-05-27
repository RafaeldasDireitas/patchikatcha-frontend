"use client";
import { ProductType, VariantsType } from "@/types/ProductType";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FetchGrabProduct from "./FetchGrabProduct";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";
import Sizes from "./components/Sizes";
import Title from "./components/Title";
import Colors from "./components/Colors";
import Images from "./components/Images";
import AddToCart from "./components/AddToCart";
import { endpoints } from "@/endpoints/endpoints";
import FetchShippingRate from "./FetchShippingRate";
import { ShippingRateType } from "@/types/ShippingRateType";
import DetailedDescription from "./components/DetailedDescription";
import ImageDescription from "./components/ImageDescription";
import FetchCreateCart from "./FetchCreateCart";
import ProductPrice from "./components/ProductPrice";
import Wishlist from "./components/Wishlist";
import Review from "./components/review/Review";
import ProductLoading from "./components/ProductLoading";
import Breadcrumb from "@/app/components/Breadcrumb";
import RecommendedProducts from "./components/RecommendedProducts";
import Skeleton from "@/app/components/Skeleton";

export default function ProductName({ params }: any) {
   const [product, setProduct] = useState<ProductType>();
   const [addedToCart, setAddedToCart] = useState<string>("Add to cart");
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
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;

   const searchParams = useSearchParams();
   const productName = params.productName;
   const decodedProductName = decodeURIComponent(productName);
   const productId = searchParams.get("productId");
   let variantId = product?.variants[0].id; //app enters a loop if its a state

   document.title = decodedProductName;

   useEffect(() => {
      FetchGrabProduct({ productId, setProduct, setBlueprintId, setPrintProviderId, setIsProductGrabbed });

      if (isProductGrabbed) {
         FetchShippingRate(blueprintId, printProviderId, setShippingRate);
      }
   }, [sizeId, colorId]);

   if (!product || !productId) {
      return <ProductLoading />;
   }

   const findCountryShippingRate = shippingRate?.profiles.find((profile) => profile.countries.includes(userCountry));

   const productPrice = product.variants.find((variant) => variant.is_enabled === true);

   const productIVA = productPrice && productPrice.price * 0.23;

   const basePrice = productPrice && productIVA && productPrice.price + productIVA;

   const adjustedPrice = basePrice && Math.floor(basePrice / 100) + 0.99;

   const formattedPrice = adjustedPrice && adjustedPrice.toFixed(2) + " €";

   const productVariants: VariantsType[] = product.variants.filter((product) => product.is_enabled === true);

   const matchingVariant = productVariants.find((variant) => {
      return variant.options.includes(colorId) && variant.options.includes(sizeId);
   });

   if (matchingVariant) {
      variantId = matchingVariant.id;
   }

   const addToCart = () => {
      setAddedToCart("Adding to cart...");

      setTimeout(async () => {
         if (findCountryShippingRate) {
            setAddedToCart("Added to cart!");
            const grabPriceId = await fetch(endpoints.url + endpoints.grabPriceId(productId)); //no need to make a separate file for this
            const priceId = await grabPriceId.text();
            const findCart = globalStore.cart.find((cart) => cart.name === product.title && cart.size === sizeId && cart.color === colorId);

            if (adjustedPrice && !findCart) {
               globalStore.setCart({
                  name: product.title,
                  description: product.description,
                  base_price: adjustedPrice * 100,
                  price: adjustedPrice * 100 * quantity,
                  price_id: priceId,
                  image: product?.images[0].src,
                  quantity: quantity,
                  size: sizeId,
                  color: colorId,
                  product_id: productId,
                  variant_id: variantId ?? 0,
                  first_item: findCountryShippingRate.first_item.cost,
                  additional_items: findCountryShippingRate.additional_items.cost,
                  blueprint_id: product.blueprint_id,
                  print_provider_id: product.print_provider_id
               });

               if (globalStore.userId && globalStore.jwtToken) {
                  const userId = globalStore.userId;

                  const cart = {
                     name: product.title,
                     description: product.description,
                     basePrice: adjustedPrice * 100,
                     price: adjustedPrice * 100 * quantity,
                     priceId: priceId,
                     image: product?.images[0].src,
                     quantity: quantity,
                     size: sizeId,
                     color: colorId,
                     productId: productId,
                     variantId: variantId ?? 0,
                     firstItem: findCountryShippingRate.first_item.cost,
                     additionalItems: findCountryShippingRate.additional_items.cost,
                     blueprintId: product.blueprint_id,
                     printProviderId: product.print_provider_id
                  };

                  FetchCreateCart({ userId, jwtToken, cart });
               }

               toast.success("Added to cart!");
            } else {
               toast.error("Item already added to cart");
               setAddedToCart("Added to cart!");
            }
         } else {
            toast.error("There was an error adding to the cart");
         }
      }, 2000); // Run after 2 seconds
   };

   const links = ["Home", "Product", `${decodedProductName}`];

   return (
      <div className="bg-white">
         <div className="flex flex-col lg:p-12 bg-white rounded-xl">
            <div className="flex justify-center lg:justify-start">
               <Breadcrumb links={links} />
            </div>
            <div className="flex lg:flex-row flex-col gap-4 lg:p-12">
               <Images product={product}></Images>

               <div className="flex flex-col">
                  <div className="flex flex-row justify-center lg:justify-start gap-4">
                     <Title product={product} />
                  </div>
                  <ProductPrice formattedPrice={formattedPrice} />

                  {/* <Description product={product} /> */}

                  <Sizes productVariants={productVariants} setSizeId={setSizeId} />

                  <Colors setColorId={setColorId} productVariants={productVariants} />

                  <AddToCart addToCart={addToCart} addedToCart={addedToCart} />

                  <Wishlist userId={userId} title={productName} price={basePrice} image={product.images[0].src} productId={productId} />
               </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-12">
               <div className="flex lg:flex-row flex-col">
                  <DetailedDescription product={product} />
                  <ImageDescription product={product}></ImageDescription>
               </div>

               {/* <hr className="my-2" /> */}

               <RecommendedProducts tag={product.tags[0]}></RecommendedProducts>

               <div>
                  <Review productId={productId} productTitle={productName} productImage={product.images[0].src} />
               </div>
            </div>
         </div>
      </div>
   );
}
