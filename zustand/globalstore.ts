import { CartType } from "@/types/CartType";
import { GlobalStateManagement } from "@/types/StateManagement";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGlobalStore = create<GlobalStateManagement>()(
   persist(
      (set) => ({
         jwtToken: "" as string,
         isAuthenticated: false as boolean,
         userEmail: "" as string,
         cart: [] as CartType[],

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
