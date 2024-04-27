import { endpoints } from "@/endpoints/endpoints";
import { ReviewType } from "@/types/ReviewType";

export default async function FetchGrabProductReviews({ productId, setReviews, setAllReviews, limit }: any) {
   const grabReviews = await fetch(endpoints.url + endpoints.grabProductReviews(productId, limit), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (grabReviews.ok) {
      const grabReviewsJson: ReviewType[] = await grabReviews.json();
      const grab3Reviews = grabReviewsJson.slice(0, 3);

      setReviews(grab3Reviews);
      setAllReviews(grabReviewsJson);
   }
}
