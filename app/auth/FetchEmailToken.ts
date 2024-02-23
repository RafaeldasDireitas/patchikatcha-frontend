import { endpoints } from "@/endpoints/endpoints";

export default async function FetchEmailToken({ email, setEmailToken }: any) {
   const grabToken = await fetch(endpoints.url + endpoints.grabEmailToken(email));

   const token = await grabToken.text();

   console.log(token);

   setEmailToken(token);
}
