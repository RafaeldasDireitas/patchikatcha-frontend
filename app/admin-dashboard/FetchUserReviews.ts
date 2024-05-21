import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchUserReviews({ setHasReviews, userId, setUserReviews }: any) {
   const grabUserReviews = await fetch(endpoints.url + endpoints.grabUserReviews(userId), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (!grabUserReviews.ok) {
      toast.error("No reviews found");
      return;
   }

   const grabuserReviewsJson = await grabUserReviews.json();
   setHasReviews(true);
   setUserReviews(grabuserReviewsJson);
}
