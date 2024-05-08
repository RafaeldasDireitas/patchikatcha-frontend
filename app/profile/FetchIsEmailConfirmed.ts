import { endpoints } from "@/endpoints/endpoints";

export default async function FetchIsEmailConfirmed({ userId, setIsEmailConfirmed }: any) {
   const isEmailConfirmed = await fetch(endpoints.url + endpoints.isEmailConfirmed(userId), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (isEmailConfirmed.ok) {
      setIsEmailConfirmed(true);
      return;
   }
}
