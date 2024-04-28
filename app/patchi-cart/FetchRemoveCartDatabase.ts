import { endpoints } from "@/endpoints/endpoints";

export default async function FetchRemoveCartDatabase({ userId, jwtToken, cart }: any) {
   const removeCart = await fetch(endpoints.url + endpoints.removeCart(userId), {
      method: "DELETE",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(cart)
   });
}
