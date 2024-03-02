import { endpoints } from "@/endpoints/endpoints";

export default async function FetchGrabProduct({ productId, setProduct }: any) {
   const product = await fetch(endpoints.url + endpoints.grabProduct(productId), {
      method: "GET",
      headers: {
         "Content-Type": "application/json"
      }
   });

   const data = await product.json();
   setProduct(data);
}
