import { Metadata } from "next";
import ProductLayout from "./layout";
import FetchGrabProduct from "./FetchGrabProduct";
import { ProductType } from "@/types/ProductType";
import fallback from "@/public/new_logo.svg";

export async function generateMetadata({ params, searchParams }: any): Promise<Metadata> {
   const productId = searchParams.productId;
   const productName = params.productName;
   const decodedProductName = decodeURIComponent(productName);

   const productData: ProductType | undefined = await FetchGrabProduct({ productId });

   return {
      title: productData?.title,
      description: "Check all the products in our categories!",
      openGraph: {
         images: {
            url: productData ? productData.images[0].src : fallback
         }
      }
   };
}

export default function ProductPage() {
   return (
      <>
         <ProductLayout />
      </>
   );
}
