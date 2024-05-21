import { endpoints } from "@/endpoints/endpoints";
import { ReviewType } from "@/types/ReviewType";
import { Dispatch, SetStateAction } from "react";

type Reviews = {
   reviews: ReviewType[];
   reviewsCount: number;
};

type FetchGrabProductReviewsPropsType = {
   productId: string;
   reviews: ReviewType[];
   setReviews: Dispatch<SetStateAction<ReviewType[]>>;
   setReviewsCount: Dispatch<SetStateAction<number>>;
   setIsButtonDisabled: Dispatch<SetStateAction<boolean>>;
   limit: number;
   page: number;
};

export default async function FetchGrabProductReviews({
   productId,
   reviews,
   setReviews,
   setReviewsCount,
   setIsButtonDisabled,
   limit,
   page
}: FetchGrabProductReviewsPropsType) {
   const grabReviews = await fetch(endpoints.url + endpoints.grabProductReviews(productId, limit, page), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (grabReviews.ok) {
      const grabReviewsJson: Reviews = await grabReviews.json();

      setReviewsCount(grabReviewsJson.reviewsCount);

      if (grabReviewsJson.reviews.length < 4) {
         setReviews([...reviews, ...grabReviewsJson.reviews]);
         setIsButtonDisabled(true);
         return;
      }

      if (reviews.length === 0) {
         setReviews(grabReviewsJson.reviews);
      } else {
         setReviews([...reviews, ...grabReviewsJson.reviews]);
      }
   }
}
