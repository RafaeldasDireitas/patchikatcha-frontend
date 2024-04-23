import { endpoints } from "@/endpoints/endpoints";

export default async function FetchIsWishListed({ userId, productId, setIsWishlisted }: any) {
   const isWishlisted = await fetch(endpoints.url + endpoints.isWishlisted(userId, productId), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (isWishlisted.ok) {
      setIsWishlisted(true);
   } else {
      setIsWishlisted(false);
   }
}
