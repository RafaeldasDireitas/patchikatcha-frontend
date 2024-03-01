import { CartType } from "./CartType";

export type GlobalStateManagement = {
   jwtToken: string;
   isAuthenticated: boolean;
   userEmail: string;
   cart: CartType[];
   setJwtToken: (response: any) => void;
   setIsAuthenticated: (response: any) => void;
   setUserEmail: (response: any) => void;
};
