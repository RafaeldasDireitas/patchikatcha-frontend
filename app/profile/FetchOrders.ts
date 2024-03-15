import { endpoints } from "@/endpoints/endpoints";

export default async function FetchOrders({ orderId, setOrders, jwtToken }: any) {
   const grabOrders = await fetch(endpoints.url + endpoints.grabOrders(orderId), {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      }
   });

   const ordersData = await grabOrders.json();

   setOrders(ordersData);
}
