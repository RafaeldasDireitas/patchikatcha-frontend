"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { FetchVerifyUserRole } from "./FetchVerifyUserRole";
import GrabUserReviews from "./components/GrabUserReviews";
import PublishProduct from "./components/PublishProduct";
import AddProductToDb from "./components/AddProductToDb";

export default function AdminDashboard() {
   const [isAuthorized, setIsAuthorized] = useState(false);
   const globalStore = useGlobalStore();
   const jwtToken = globalStore.jwtToken;
   const userEmail = globalStore.userEmail;

   useEffect(() => {
      FetchVerifyUserRole({ jwtToken, userEmail, setIsAuthorized });
   }, []);

   if (!isAuthorized) {
      return <Loading />;
   }

   return (
      <div className="lg:p-12">
         <div className="flex flex-col justify-center text-center items-center gap-y-2">
            <PublishProduct />
            <GrabUserReviews />
            <AddProductToDb />
         </div>
      </div>
   );
}
