import { endpoints } from "@/endpoints/endpoints";

export default async function FetchGrabUserReviews({ userId, setUserReviews }: any) {
   const grabUserReviews = await fetch(endpoints.url + endpoints.grabUserReviews(userId), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (grabUserReviews.ok) {
      const grabUserReviewsJson = await grabUserReviews.json();
      setUserReviews(grabUserReviewsJson);
   }
}
