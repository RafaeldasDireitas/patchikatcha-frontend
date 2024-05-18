import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchAddProductToDb({ dbProductDto, jwtToken }: any) {
   const sendProduct = await fetch(endpoints.url + endpoints.createProductInDb, {
      method: "POST",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(dbProductDto)
   });

   if (sendProduct.ok) {
      toast.success("Product created");
      return;
   }

   const sendProductJson = await sendProduct.json();

   toast.error(sendProductJson.message);
}
