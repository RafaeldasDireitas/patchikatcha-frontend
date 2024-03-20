import { endpoints } from "@/endpoints/endpoints";

export default async function FetchOrders({ orderId, jwtToken }: any) {
   const grabOrders = await fetch(endpoints.url + endpoints.grabOrders(orderId), {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      cache: "force-cache",
      next: {
         revalidate: 3600
      }
   });

   const ordersData = await grabOrders.json();
   return ordersData;
}
