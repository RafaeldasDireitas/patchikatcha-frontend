import { endpoints } from "@/endpoints/endpoints";

export default async function FetchCreateCart({ userId, cart }: any) {
   const createCart = await fetch(endpoints.url + endpoints.createCart(userId), {
      method: "POST",
      headers: {
         "Content-type": "application/json"
      },
      body: JSON.stringify(cart)
   });

   if (createCart.ok) {
      console.log("product created");
   }
}
