import { endpoints } from "@/endpoints/endpoints";

export default async function FetchShippingRate(blueprintId: any, printProviderId: any, setShippingRate: any) {
   const shippingRate = await fetch(endpoints.url + endpoints.grabShippingRate(blueprintId, printProviderId), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   if (shippingRate.ok) {
      const shippingRateData = await shippingRate.json();
      setShippingRate(shippingRateData);
   }
}
