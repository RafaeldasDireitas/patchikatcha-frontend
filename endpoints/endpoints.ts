export const endpoints = {
   url: "https://localhost:7065",
   newProducts: "/api/Product/new-products",
   register: "/api/Auth/register",
   login: "/api/Auth/login",
   verifyRole: (userEmail: any) => `/api/Auth/verify-user-role?email=${userEmail}`
};
