import { endpoints } from "@/endpoints/endpoints";

export default async function FetchHoodies({ limit, pageNumber, setHoodies }: any) {
   const fetchHoodies = await fetch(endpoints.url + endpoints.grabCategoryProducts(limit, pageNumber, "Hoodies"), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   const grabHoodies = await fetchHoodies.json();

   setHoodies(grabHoodies);
}
