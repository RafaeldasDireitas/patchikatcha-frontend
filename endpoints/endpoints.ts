import { CartType } from "@/types/CartType";

export const endpoints = {
   url: "https://localhost:7065",
   newProducts: "/api/Product/new-products",
   publishProduct: "/api/Product/publish-product",
   register: "/api/Auth/register",
   login: "/api/Auth/login",
   changePassword: "/api/Auth/change-password",
   verifyRole: (userEmail: any) => `/api/Auth/verify-user-role?email=${userEmail}`,
   grabEmailToken: (userEmail: any) => `/api/Auth/grab-email-token?email=${userEmail}`,
   confirmEmail: (token: any, userEmail: any) => `/api/Auth/confirm-email?token=${token}&email=${userEmail}`,
   grabProduct: (productId: any) => `/api/Product/grab-product?productId=${productId}`,
   grabOrders: (orderId: any) => `/api/Order/grab-user-orders?orderId=${orderId}`,
   grabOrdersId: (userEmail: any) => `/api/Order/grab-orders-id?userEmail=${userEmail}`,
   grabPriceId: (productId: any) => `/api/Stripe/grab-price-id?productId=${productId}`,
   grabPasswordToken: (userEmail: any) => `/api/Auth/grab-password-token?userEmail=${userEmail}`,
   grabShippingRate: (blueprintId: any, printProviderId: any) => `/api/Blueprint/get-blueprint/${blueprintId}/${printProviderId}`,
   grabAllProducts: (limit: any, pageNumber: any) => `/api/Product/grab-all-products?limit=${limit}&pageNumber=${pageNumber}`,
   grabCategoryProducts: (limit: any, pageNumber: any, productTag: any) =>
      `/api/Product/grab-category-products?limit=${limit}&pageNumber=${pageNumber}&productTag=${productTag}`,
   createCart: (userId: any) => `/api/Cart/create-cart?userId=${userId}`,
   updateCart: (userId: any) => `/api/Cart/update-cart?userId=${userId}`,
   removeCart: (userId: any) => `/api/Cart/remove-cart?userId=${userId}`
};
