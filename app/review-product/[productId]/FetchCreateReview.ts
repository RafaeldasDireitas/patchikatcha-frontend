import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchCreateReview({ review }: any) {
   const createReview = await fetch(endpoints.url + endpoints.createReview, {
      method: "POST",
      headers: {
         "Content-type": "application/json"
      },
      body: JSON.stringify(review)
   });

   if (createReview.ok) {
      toast.success("Review submitted!");
      window.location.href = "/";
      return;
   }

   toast.error("There was an error, try again");
}
