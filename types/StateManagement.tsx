import { CartType } from "./CartType";
import { UserDataType } from "./UserDataType";

export type GlobalStateManagement = {
   userId: string;
   jwtToken: string;
   isAuthenticated: boolean;
   userEmail: string;
   userGeo: UserDataType;
   cart: CartType[];
   setJwtToken: (response: any) => void;
   setUserId: (response: any) => void;
   setIsAuthenticated: (response: any) => void;
   setUserEmail: (response: any) => void;
   setUserGeo: (response: any) => void;
   setCart: (response: CartType | null) => void;
   removeFromCart: (productIndex: number) => void;
};
