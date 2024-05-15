import { endpoints } from "@/endpoints/endpoints";

export default async function FetchBestSellers({ setBestSellers }: any) {
   const grabBestSellers = await fetch(endpoints.url + endpoints.grabBestSellers, {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (grabBestSellers.ok) {
      const grabBestSellersJson = await grabBestSellers.json();
      setBestSellers(grabBestSellersJson);
   }
}
