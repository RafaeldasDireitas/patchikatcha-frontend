import { endpoints } from "@/endpoints/endpoints";

export default async function FetchWishlist({ userId, setWishlist }: any) {
   const grabWishlist = await fetch(endpoints.url + endpoints.grabWishlist(userId), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (grabWishlist.ok) {
      const wishlistJson = await grabWishlist.json();
      setWishlist(wishlistJson);
   }
}
