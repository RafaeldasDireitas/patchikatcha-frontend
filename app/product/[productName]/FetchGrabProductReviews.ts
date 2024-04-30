import { endpoints } from "@/endpoints/endpoints";
import { ReviewType } from "@/types/ReviewType";

type Reviews = {
   reviews: ReviewType[];
   reviewsCount: number;
};

export default async function FetchGrabProductReviews({ productId, reviews, setReviews, setReviewsCount, limit, page }: any) {
   const grabReviews = await fetch(endpoints.url + endpoints.grabProductReviews(productId, limit, page), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (grabReviews.ok) {
      const grabReviewsJson: Reviews = await grabReviews.json();

      setReviewsCount(grabReviewsJson.reviewsCount);

      if (reviews.length === 0) {
         setReviews(grabReviewsJson.reviews);
      } else {
         setReviews([...reviews, ...grabReviewsJson.reviews]);
      }
   }
}
