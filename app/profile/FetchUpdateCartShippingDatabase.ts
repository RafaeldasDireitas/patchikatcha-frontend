import { endpoints } from "@/endpoints/endpoints";

export default async function FetchUpdateCartShippingDatabase({ userId, cartBlueprint }: any) {
   const updateDatabase = await fetch(endpoints.url + endpoints.updateCartShipping(userId), {
      method: "PUT",
      headers: {
         "Content-type": "application/json"
      },
      body: JSON.stringify(cartBlueprint)
   });

   if (updateDatabase.ok) {
      const profileList = await updateDatabase.json();

      return profileList;
   }
}
