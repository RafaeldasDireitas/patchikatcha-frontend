import { endpoints } from "@/endpoints/endpoints";
import { ProductType } from "@/types/ProductType";
import { Dispatch, SetStateAction } from "react";

type FetchGrabProductPropType = {
   productId: string | undefined;
   setProduct?: Dispatch<SetStateAction<ProductType | undefined>>;
   setIsProductGrabbed?: Dispatch<SetStateAction<boolean>>;
   setBlueprintId?: Dispatch<SetStateAction<number | undefined>>;
   setPrintProviderId?: Dispatch<SetStateAction<number | undefined>>;
};

export default async function FetchGrabProduct({
   productId,
   setProduct,
   setIsProductGrabbed,
   setBlueprintId,
   setPrintProviderId
}: FetchGrabProductPropType) {
   const product = await fetch(endpoints.url + endpoints.grabProduct(productId), {
      method: "GET",
      headers: {
         "Content-Type": "application/json"
      }
   });

   if (product.ok) {
      const data: ProductType = await product.json();
      if (setProduct) setProduct(data);
      if (setIsProductGrabbed) setIsProductGrabbed(true);
      if (setBlueprintId) setBlueprintId(data.blueprint_id);
      if (setPrintProviderId) setPrintProviderId(data.print_provider_id);
      return data;
   } else {
      console.error("There was an error");
   }
}
