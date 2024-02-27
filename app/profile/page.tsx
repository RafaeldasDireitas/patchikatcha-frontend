"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import { toast } from "sonner";

export default function Profile() {
   const globalStore = useGlobalStore();

   const signOutHandler = () => {
      globalStore.setIsAuthenticated(false);
      globalStore.setJwtToken("");
      toast.success("You successfuly logged out.");
      setTimeout((window.location.href = "/auth"), 2000);
   };
   return (
      <>
         <h1>User profile</h1>
         <button className="btn" onClick={signOutHandler}>
            Sign out
         </button>
      </>
   );
}
