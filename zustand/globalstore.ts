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
         },

         setCart(response: CartType) {
            set((state) => {
               const existingIndex = state.cart.findIndex((product) => product.name === response.name);

               if (existingIndex !== -1) {
                  const updatedCart = [...state.cart];
                  updatedCart[existingIndex] = {
                     ...updatedCart[existingIndex],
                     quantity: updatedCart[existingIndex].quantity + response.quantity
                  };

                  return { cart: updatedCart };
               } else {
                  return {
                     cart: [...state.cart, { ...response, index: state.cart.length }]
                  };
               }
            });
         },

         removeFromCart(productIndex: number) {
            set((state) => ({
               cart: [...state.cart.filter((product) => product.index !== productIndex)]
            }));
         }
      }),
      { name: "global-store" }
   )
);
