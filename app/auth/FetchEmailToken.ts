import { endpoints } from "@/endpoints/endpoints";
import zlib from "zlib";

export default async function FetchEmailToken({ email, setEmailToken }: any) {
   const grabToken = await fetch(endpoints.url + endpoints.grabEmailToken(email));

   const token = await grabToken.json();

   setEmailToken(token);
}
