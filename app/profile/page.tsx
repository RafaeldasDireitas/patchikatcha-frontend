"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";
import IsNotAuthenticated from "./IsNotAuthenticated";
import { redirect } from "next/navigation";

export default function Profile() {
   const globalStore = useGlobalStore();
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const isAuthenticated = globalStore.isAuthenticated;
   const setJwtToken = globalStore.setJwtToken;
   const setUserEmail = globalStore.setUserEmail;

   const signOutHandler = () => {
      setIsAuthenticated(false);
      setJwtToken("");
      setUserEmail("");

      toast.success("You successfuly logged out.");
      redirect((window.location.href = "/auth"));
   };

   if (!isAuthenticated) {
      return <IsNotAuthenticated />;
   }

   return (
      <>
         <h1>User profile</h1>
         <button className="btn" onClick={signOutHandler}>
            Sign out
         </button>
      </>
   );
}
