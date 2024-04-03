import { endpoints } from "@/endpoints/endpoints";

export default async function FetchHoodies({ limit, pageNumber, setProducts }: any) {
   const fetchHoodies = await fetch(endpoints.url + endpoints.grabAllProducts(limit, pageNumber), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   const grabHoodies = await fetchHoodies.json();

   setProducts(grabHoodies);
}
