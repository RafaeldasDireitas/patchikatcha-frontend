import { endpoints } from "@/endpoints/endpoints";

export default async function FetchOrdersId({ userEmail, jwtToken, setOrdersId, setIdsGrabbed }: any) {
   const grabOrders = await fetch(endpoints.url + endpoints.grabOrdersId(userEmail), {
      method: "GET",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      }
   });

   const ordersData = await grabOrders.json();

   setIdsGrabbed(true);
   setOrdersId(ordersData);
}
