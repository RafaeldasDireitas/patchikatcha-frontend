import { endpoints } from "@/endpoints/endpoints";

export default async function FetchGrab3Reviews({ productId, setReviews }: any) {
   const grab3Reviews = await fetch(endpoints.url + endpoints.grab3Reviews(productId), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (grab3Reviews.ok) {
      const grab3ReviewsJson = await grab3Reviews.json();

      setReviews(grab3ReviewsJson);
   }
}
