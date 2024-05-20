import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchChangeProductTag({ productId, tag, jwtToken }: any) {
   const changeProductTag = await fetch(endpoints.url + endpoints.changeProductTag(productId), {
      method: "PUT",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(tag)
   });

   if (changeProductTag.ok) {
      toast.success("Product tag changed");
      return;
   }

   toast.error("There was an error, try again");
}
