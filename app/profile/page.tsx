"use client";
import { useGlobalStore } from "@/zustand/globalstore";

export default function Profile() {
   const globalStore = useGlobalStore();

   const signOutHandler = () => {
      globalStore.setIsAuthenticated(false);
      globalStore.setJwtToken("");
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
