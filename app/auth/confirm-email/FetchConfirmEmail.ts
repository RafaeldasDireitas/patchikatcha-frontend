import { endpoints } from "@/endpoints/endpoints";

export default async function FetchConfirmEmail({ token, userEmail }: any) {
   const encodedToken = token?.replace(/ /g, "+");

   const sendData = await fetch(endpoints.url + endpoints.confirmEmail(encodeURIComponent(encodedToken as unknown as string), userEmail), {
      method: "PUT"
   });
}
