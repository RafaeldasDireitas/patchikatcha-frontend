import { endpoints } from "@/endpoints/endpoints";

export default async function FetchRecommendedProducts({ tag, setRecommendedProducts }: any) {
   const grabRecommendedProducts = await fetch(endpoints.url + endpoints.recommendedProducts(tag), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (grabRecommendedProducts.ok) {
      const grabRecommendedProductsJson = await grabRecommendedProducts.json();

      setRecommendedProducts(grabRecommendedProductsJson);
   }
}
