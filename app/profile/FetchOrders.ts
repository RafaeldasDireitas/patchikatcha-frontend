import { endpoints } from "@/endpoints/endpoints";

export default async function FetchOrders({ orderId, setOrders }: any) {
   const grabOrders = await fetch(endpoints.url + endpoints.grabOrders(orderId));

   const ordersData = await grabOrders.json();

   setOrders(ordersData);
}
