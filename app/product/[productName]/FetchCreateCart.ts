import { endpoints } from "@/endpoints/endpoints";

export default async function FetchCreateCart({ userId, jwtToken, cart }: any) {
   const createCart = await fetch(endpoints.url + endpoints.createCart(userId), {
      method: "POST",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(cart)
   });

   if (createCart.ok) {
   }
}
