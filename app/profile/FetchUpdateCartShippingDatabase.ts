import { endpoints } from "@/endpoints/endpoints";

export default async function FetchUpdateCartShippingDatabase({ userId, jwtToken, cartBlueprint }: any) {
   const updateDatabase = await fetch(endpoints.url + endpoints.updateCartShipping(userId), {
      method: "PUT",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(cartBlueprint)
   });

   if (updateDatabase.ok) {
      const profileList = await updateDatabase.json();

      return profileList;
   }
}
