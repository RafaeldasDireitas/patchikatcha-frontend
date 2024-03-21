import { endpoints } from "@/endpoints/endpoints";

export default async function FetchOrders({ orderId, jwtToken }: any) {
   const grabOrders = await fetch(endpoints.url + endpoints.grabOrders(orderId), {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      }
   });

   const ordersData = await grabOrders.json();
   return ordersData;
}
