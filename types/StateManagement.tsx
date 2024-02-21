export type GlobalStateManagement = {
   jwtToken: string;
   isAuthenticated: boolean;
   userEmail: string;
   setJwtToken: (response: any) => void;
   setIsAuthenticated: (response: any) => void;
   setUserEmail: (response: any) => void;
};
