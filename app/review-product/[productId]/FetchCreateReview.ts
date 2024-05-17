import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchCreateReview({ review, jwtToken, decodedProductTitle, productId }: any) {
   const createReview = await fetch(endpoints.url + endpoints.createReview, {
      method: "POST",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(review)
   });

   if (createReview.ok) {
      toast.success("Review submitted!");
      window.location.href = `/product/${decodedProductTitle}?productId=${productId}`;
      return;
   } else {
      const responseData = await createReview.json();
      toast.error(responseData.message);
   }
}
