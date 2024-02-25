import { GlobalStateManagement } from "@/types/StateManagement";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGlobalStore = create<GlobalStateManagement>()(
   persist(
      (set) => ({
         jwtToken: "" as string,
         isAuthenticated: true as boolean,
         userEmail: "" as string,

         setJwtToken(response: string) {
            return set({
               jwtToken: response
            });
         },
         setIsAuthenticated(response: boolean) {
            return set({
               isAuthenticated: response
            });
         },

         setUserEmail(response: string) {
            return set({
               userEmail: response
            });
         }
      }),
      { name: "global-store" }
   )
);
