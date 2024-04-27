import { endpoints } from "@/endpoints/endpoints";

export default async function FetchUpdateUserCountry({ userId, newCountry }: any) {
   const updateUserCountry = await fetch(endpoints.url + endpoints.updateUserCountry(userId, newCountry));
}
