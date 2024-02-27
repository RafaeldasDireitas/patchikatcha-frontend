import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchPublishProduct({ jwtToken, productId }: any) {
   const sendData = await fetch(endpoints.url + endpoints.publishProduct, {
      method: "POST",
      headers: {
         Authorization: `Bearer ${jwtToken}`,
         "Content-Type": "application/json"
      },
      body: JSON.stringify(productId)
   });

   if (sendData.ok) {
      toast.success("Product published!");
   } else {
      toast.error("There was an error publishing the product.");
   }
}
