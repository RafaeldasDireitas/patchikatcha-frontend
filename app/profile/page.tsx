"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";
import IsNotAuthenticated from "./IsNotAuthenticated";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { OrderType } from "@/types/OrderType";
import Order from "./components/Order";
import Link from "next/link";
import FetchOrdersId from "./FetchOrdersId";
import { OrderIdType } from "@/types/OrderIdType";
import FetchOrders from "./FetchOrders";
import Loading from "../components/Loading";
import FetchUpdateCartShippingDatabase from "./FetchUpdateCartShippingDatabase";
import { BlueprintType } from "@/types/BlueprintType";
import { ProfilesType } from "@/types/ProfilesType";

export default function Profile() {
   const test = [
      {
         userCountry: "PT",
         countryName: "Portugal",
         currency: "EUR"
      },
      {
         userCountry: "DE",
         countryName: "Germany",
         currency: "EUR"
      }
   ];

   const [ordersId, setOrdersId] = useState<OrderIdType[]>([]);
   const [idsGrabbed, setIdsGrabbed] = useState<boolean>(false);
   const [orders, setOrders] = useState<OrderType[]>([]);

   const globalStore = useGlobalStore();
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const setJwtToken = globalStore.setJwtToken;
   const setUserEmail = globalStore.setUserEmail;
   const setUserGeo = globalStore.setUserGeo;
   const isAuthenticated = globalStore.isAuthenticated;
   const cart = globalStore.cart;
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;
   const userEmail = globalStore.userEmail;

   const signOutHandler = () => {
      setIsAuthenticated(false);
      setJwtToken("");
      setUserEmail("");

      toast.success("You successfuly logged out.");
      redirect((window.location.href = "/auth"));
   };

   const changeCountry = async (country: any) => {
      setUserGeo({
         userCountry: country.userCountry,
         countryName: country.countryName,
         currency: country.currency
      });

      let cartBlueprint: BlueprintType[] = [];

      cart.forEach((product) => {
         cartBlueprint = [...cartBlueprint, { blueprintId: product.blueprint_id, printProviderId: product.print_provider_id, userCountryCode: country.userCountry }];
      });

      const profileList: ProfilesType[] = await FetchUpdateCartShippingDatabase({ userId, cartBlueprint });

      cart.forEach((product) => {
         const findMatch = profileList.find((profile) => profile.variant_ids.includes(product.variant_id));

         if (findMatch) {
            globalStore.setCart({ ...product, first_item: findMatch.first_item.cost, additional_items: findMatch.additional_items.cost, quantity: 0 });
         }
      });
   };

   if (!isAuthenticated) {
      return <IsNotAuthenticated />;
   }

   if (!orders) {
      return <Loading></Loading>;
   }

   useEffect(() => {
      if (jwtToken && !idsGrabbed) {
         FetchOrdersId({ userEmail, setOrdersId, setIdsGrabbed });
      }

      if (idsGrabbed) {
         ordersId.forEach(async (order: OrderIdType) => {
            const orderId = order.orderId;

            const orderData = await FetchOrders({ orderId, jwtToken });
            setOrders((prevOrders) => [...prevOrders, orderData]);
         });
      }
   }, [idsGrabbed]);

   return (
      <div className="p-12">
         <h1>User profile</h1>
         <button className="btn" onClick={signOutHandler}>
            Sign out
         </button>

         <Link href={"/auth/change-password-warning"}>
            <p>Change password</p>
         </Link>

         {orders.map((order, key) => {
            const formattedDate = new Date(order.created_at).toLocaleDateString().split(" ")[0];
            const formattedPrice = (order.total_price / 100).toFixed(2) + " €";
            const status = order.status;
            const address = order.address_to.address1;

            return (
               <>
                  <div key={key}>
                     <a href={order.printify_connect.url} target="_blank">
                        Click here for order details
                     </a>
                     <Order orderId={order.id} createdAt={formattedDate} totalPrice={formattedPrice} status={status} address={address}></Order>
                  </div>
               </>
            );
         })}

         {test.map((country, key) => {
            return (
               <button onClick={() => changeCountry(country)} key={key} className="btn">
                  {country.countryName}
               </button>
            );
         })}
      </div>
   );
}
