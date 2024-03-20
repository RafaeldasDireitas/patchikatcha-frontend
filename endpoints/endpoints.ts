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
   grabPasswordToken: (userEmail: any) => `/api/Auth/grab-password-token?userEmail=${userEmail}`
};
