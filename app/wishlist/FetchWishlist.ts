import { endpoints } from "@/endpoints/endpoints";

export default async function FetchWishlist({ userId, jwtToken, setWishlist }: any) {
   const grabWishlist = await fetch(endpoints.url + endpoints.grabWishlist(userId), {
      method: "GET",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      }
   });

   if (grabWishlist.ok) {
      const wishlistJson = await grabWishlist.json();
      setWishlist(wishlistJson);
   }
}
