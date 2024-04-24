import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchProduct({ productId, setProduct }: any) {
   const product = await fetch(endpoints.url + endpoints.grabProduct(productId), {
      method: "GET",
      headers: {
         "Content-Type": "application/json"
      }
   });

   if (product.ok) {
      const productJson = await product.json();

      setProduct(productJson);
   } else {
      toast.error("There was an error");
   }
}
