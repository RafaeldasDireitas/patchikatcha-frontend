"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";
import IsNotAuthenticated from "../components/IsNotAuthenticated";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { OrderType } from "@/types/OrderType";
import Link from "next/link";
import FetchOrdersId from "./FetchOrdersId";
import { OrderIdType } from "@/types/OrderIdType";
import FetchOrders from "./FetchOrders";
import { ReviewType } from "@/types/ReviewType";
import FetchGrabUserReviews from "./FetchGrabUserReviews";
import FetchIsEmailConfirmed from "./FetchIsEmailConfirmed";
import { BiSolidCheckCircle, BiSolidXCircle } from "react-icons/bi";
import countries from "@/data/countries.json";
import Image from "next/image";
import ProfileLoading from "./components/ProfileLoading";
import DeleteAccountModal from "./components/DeleteAccountModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ChangeCountryProfileModal from "./components/ChangeCountryProfileModal";
import OrderHistory from "./components/OrderHistory";
import ViewReviews from "./components/ViewReviews";

export default function Profile() {
   const [ordersId, setOrdersId] = useState<OrderIdType[]>([]);
   const [idsGrabbed, setIdsGrabbed] = useState<boolean>(false);
   const [orders, setOrders] = useState<OrderType[]>([]);
   const [userReviews, setUserReviews] = useState<ReviewType[]>();
   const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

   const [isOrderHistory, setIsOrderHistory] = useState(true);
   const [isViewReviews, setIsViewReviews] = useState(false);

   const globalStore = useGlobalStore();
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const setUserId = globalStore.setUserId;
   const setJwtToken = globalStore.setJwtToken;
   const setUserEmail = globalStore.setUserEmail;
   const setUserGeo = globalStore.setUserGeo;
   const setCart = globalStore.setCart;
   const isAuthenticated = globalStore.isAuthenticated;
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;
   const userEmail = globalStore.userEmail;
   const userCountry = globalStore.userGeo.userCountry;

   const signOutHandler = () => {
      setIsAuthenticated(false);
      setUserId("");
      setJwtToken("");
      setUserEmail("");
      setCart(null);

      toast.success("You successfuly logged out.");
      redirect((window.location.href = "/auth"));
   };

   const handleProfilePages = (page: string) => {
      if (page === "orderHistory") {
         setIsOrderHistory(true);
         setIsViewReviews(false);
      } else if (page === "viewReviews") {
         setIsViewReviews(true);
         setIsOrderHistory(false);
      }
   };

   const findUserCountry = countries.countries.country.find((country) => country.countryCode === userCountry);
   const userCountryImage: any = findUserCountry?.countryFlag;

   useEffect(() => {
      document.title = "Profile";

      FetchIsEmailConfirmed({ userId, setIsEmailConfirmed });
   }, []);

   useEffect(() => {
      if (jwtToken && !idsGrabbed) {
         FetchOrdersId({ userEmail, jwtToken, setOrdersId, setIdsGrabbed });
         FetchGrabUserReviews({ userId, jwtToken, setUserReviews });
      }

      if (idsGrabbed) {
         ordersId.forEach(async (order: OrderIdType) => {
            const orderId = order.orderId;

            const orderData = await FetchOrders({ orderId, jwtToken });
            setOrders((prevOrders) => [...prevOrders, orderData]);
         });
      }
   }, [idsGrabbed]);

   if (!isAuthenticated) {
      return <IsNotAuthenticated />;
   }

   if (!orders) {
      return <ProfileLoading />;
   }

   return (
      <div className="flex lg:flex-row flex-col">
         <div className="p-12 my-8 lg:w-1/3">
            <h1 className="text-2xl text-light quicksand-bold lg:text-start text-center">Your Account</h1>
            <p className="quicksand-light lg:text-start text-center">Track your orders or change your settings</p>
            <div className="flex flex-row lg:text-start text-center lg:justify-start justify-center">
               <p className="quicksand-light">
                  {isEmailConfirmed ? (
                     "Your email is confirmed"
                  ) : (
                     <Link href={"/auth/confirm-email-warning"}>
                        <span className="hover:underline hover:text-light">Your email isn't confirmed!</span>
                     </Link>
                  )}
               </p>
               {isEmailConfirmed ? (
                  <BiSolidCheckCircle className="mx-2 text-light" size={25} />
               ) : (
                  <BiSolidXCircle className="mx-2 text-red-800" size={25} />
               )}
            </div>
            <div className="flex flex-row lg:text-start text-center lg:justify-start justify-center">
               <p>You are currently in:&nbsp;</p>
               <p>{findUserCountry?.countryName}</p>
               <Dialog>
                  <DialogTrigger>
                     <Image
                        className="mx-2 hover:scale-110 hover:cursor-pointer duration-200"
                        src={userCountryImage}
                        width={30}
                        height={30}
                        alt="No country"
                     />
                  </DialogTrigger>
                  <ChangeCountryProfileModal />
               </Dialog>
            </div>

            <div className="mt-10">
               <h1 className="text-xl text-dark quicksand-bold lg:text-start text-center">My orders</h1>
               <div className="p-4 quicksand-medium">
                  <h2
                     onClick={() => handleProfilePages("orderHistory")}
                     className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer"
                  >
                     Order history
                  </h2>
                  <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">Help & Support</h2>
               </div>
            </div>

            <div className="mt-4">
               <h1 className="text-xl text-dark quicksand-bold lg:text-start text-center">Account settings</h1>
               <div className="p-4 quicksand-medium">
                  <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">Change personal details</h2>
                  <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">Newsletter subscription</h2>
                  <div className="flex justify-center lg:justify-start">
                     <Dialog>
                        <DialogTrigger>
                           <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">Change country</h2>
                        </DialogTrigger>
                        <ChangeCountryProfileModal />
                     </Dialog>
                  </div>
               </div>
            </div>

            <div className="mt-4">
               <h1 className="text-xl text-dark quicksand-bold lg:text-start text-center">Additional settings</h1>
               <div className="p-4 quicksand-medium">
                  <h2
                     onClick={() => handleProfilePages("viewReviews")}
                     className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer"
                  >
                     View reviews
                  </h2>
               </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
               <button
                  onClick={signOutHandler}
                  className="btn mt-3 btn-circle quicksand-semibold bg-transparent hover:bg-button-focused hover:border-none border-border-light border-2 text-light hover:text-white w-64"
               >
                  Sign Out
               </button>

               <Link href={"/auth/change-password-warning"}>
                  <button className="btn mt-3 btn-circle bg-transparent quicksand-semibold hover:bg-button-focused hover:border-none border-border-light border-2 text-light hover:text-white w-64">
                     Change Password
                  </button>
               </Link>

               <Dialog>
                  <DialogTrigger asChild>
                     <button className="btn mt-3 btn-circle bg-transparent quicksand-semibold hover:bg-red-800 hover:border-none border-border-light border-2 text-light hover:text-white w-64">
                        Delete Account
                     </button>
                  </DialogTrigger>
                  <DeleteAccountModal />
               </Dialog>
            </div>
         </div>
         {isOrderHistory && (
            <div className="lg:w-2/3">
               <OrderHistory orders={orders} />
            </div>
         )}
         {isViewReviews && (
            <div className="lg:w-2/3">
               <ViewReviews userReviews={userReviews} />
            </div>
         )}
      </div>
   );
}
