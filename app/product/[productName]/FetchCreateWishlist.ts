import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchCreateWishlist({ userId, jwtToken, wishlist, isWishlisted, setIsWishlisted, setIsClickable }: any) {
   const createWishlist = await fetch(endpoints.url + endpoints.createWishlist(userId), {
      method: "POST",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(wishlist)
   });

   if (createWishlist.ok) {
      setIsWishlisted(!isWishlisted);
      setTimeout(() => {
         setIsClickable(true);
      }, 1000);
      toast.success("You wishlisted this product!");
   } else {
      toast.error("There was an error, try again");
   }
}
