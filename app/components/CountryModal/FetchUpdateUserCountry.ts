import { endpoints } from "@/endpoints/endpoints";

export default async function FetchUpdateUserCountry({ userId, newCountry, jwtToken }: any) {
   const updateUserCountry = await fetch(endpoints.url + endpoints.updateUserCountry(userId), {
      method: "PUT",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify(newCountry)
   });
}
