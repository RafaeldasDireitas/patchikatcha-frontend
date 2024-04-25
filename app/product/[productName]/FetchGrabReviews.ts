import { endpoints } from "@/endpoints/endpoints";

export default async function FetchGrabReviews({ productId, setReviews, limit }: any) {
   const grabReviews = await fetch(endpoints.url + endpoints.grabReviews(productId, limit), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (grabReviews.ok) {
      const grabReviewsJson = await grabReviews.json();

      setReviews(grabReviewsJson);
   }
}
