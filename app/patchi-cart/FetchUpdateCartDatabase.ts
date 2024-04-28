import { endpoints } from "@/endpoints/endpoints";

export default async function FetchUpdateCartDatabase({ userId, jwtToken, cart }: any) {
   const updateCart = await fetch(endpoints.url + endpoints.updateCart(userId), {
      method: "PUT",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(cart)
   });
}
