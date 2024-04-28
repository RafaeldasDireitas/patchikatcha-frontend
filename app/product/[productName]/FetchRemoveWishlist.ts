import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchRemoveWishlist({ userId, jwtToken, productId, isWishlisted, setIsWishlisted, setIsClickable }: any) {
   const removeWishlist = await fetch(endpoints.url + endpoints.removeWishlist(userId, productId), {
      method: "DELETE",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      }
   });

   if (removeWishlist.ok) {
      toast.success("You removed this product from your wishlist");
      setIsWishlisted(!isWishlisted);
      setTimeout(() => {
         setIsClickable(true);
      }, 1000);
   } else {
      toast.error("There was an error, try again");
   }
}
