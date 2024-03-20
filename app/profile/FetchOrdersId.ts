import { endpoints } from "@/endpoints/endpoints";

export default async function FetchOrdersId({ userEmail, setOrdersId, setIdsGrabbed }: any) {
   const grabOrders = await fetch(endpoints.url + endpoints.grabOrdersId(userEmail), {
      method: "GET",
      headers: {
         "Content-Type": "application/json"
      }
   });

   const ordersData = await grabOrders.json();

   setIdsGrabbed(true);
   setOrdersId(ordersData);
}
