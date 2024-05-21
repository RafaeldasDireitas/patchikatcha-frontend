import { endpoints } from "@/endpoints/endpoints";
import { ProductType } from "@/types/ProductType";

export default async function FetchGrabProduct({ productId, setProduct, setIsProductGrabbed, setBlueprintId, setPrintProviderId }: any) {
   const product = await fetch(endpoints.url + endpoints.grabProduct(productId), {
      method: "GET",
      headers: {
         "Content-Type": "application/json"
      }
   });

   if (product.ok) {
      const data: ProductType = await product.json();
      setProduct(data);
      setIsProductGrabbed(true);
      setBlueprintId(data.blueprint_id);
      setPrintProviderId(data.print_provider_id);
      return true;
   }

   return false;
}
