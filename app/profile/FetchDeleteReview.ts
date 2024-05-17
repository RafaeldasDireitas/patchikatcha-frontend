import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchDeleteReview({ userId, id, jwtToken }: any) {
   const deleteReview = await fetch(endpoints.url + endpoints.deleteReview(userId, id), {
      method: "DELETE",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      }
   });

   if (deleteReview.ok) {
      toast.success("Review deleted");
      window.location.href = "/profile";
      return;
   }

   toast.error("There was an error, try again");
}
