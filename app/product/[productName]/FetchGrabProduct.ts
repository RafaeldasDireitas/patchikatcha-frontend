import { endpoints } from "@/endpoints/endpoints";

export default async function FetchGrabProduct({ productId, setProduct }: any) {
   const product = await fetch(endpoints.url + endpoints.grabProduct(productId), {
      method: "GET",
      headers: {
         "Content-Type": "application/json"
      }
   });

   if (product.ok) {
      const data = await product.json();
      setProduct(data);
      return true;
   }

   return false;
}
