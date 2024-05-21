import { endpoints } from "@/endpoints/endpoints";

export default async function FetchIsWishListed({ userId, jwtToken, productId, setIsWishlisted }: any) {
   const isWishlisted = await fetch(endpoints.url + endpoints.isWishlisted(userId, productId), {
      method: "GET",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      }
   });

   if (isWishlisted.ok) {
      setIsWishlisted(true);
   } else {
      setIsWishlisted(false);
   }
}
