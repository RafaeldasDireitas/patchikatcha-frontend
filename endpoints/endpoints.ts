export const endpoints = {
   url: "https://localhost:7065",
   newProducts: "/api/Product/new-products",
   publishProduct: "/api/Admin/publish-product",
   register: "/api/Auth/register",
   login: "/api/Auth/login",
   changePassword: "/api/Auth/change-password",
   createReview: "/api/Review/create-review",
   grabBestSellers: "/api/Product/grab-best-sellers",
   createCheckoutSession: (userId: any) => `/api/Stripe/create-checkout-session?userId=${userId}`,
   updateUserCountry: (userId: any) => `/api/Auth/update-user-country?userId=${userId}`,
   verifyRole: (userEmail: any) => `/api/Auth/verify-user-role?email=${userEmail}`,
   grabEmailToken: (userEmail: any) => `/api/Auth/grab-email-token?email=${userEmail}`,
   confirmEmail: (token: any, userEmail: any) => `/api/Auth/confirm-email?token=${token}&email=${userEmail}`,
   isEmailConfirmed: (userId: any) => `/api/Auth/is-email-confirmed?userId=${userId}`,
   grabProduct: (productId: any) => `/api/Product/grab-product?productId=${productId}`,
   grabOrders: (orderId: any) => `/api/Order/grab-user-orders?orderId=${orderId}`,
   grabOrdersId: (userEmail: any) => `/api/Order/grab-orders-id?userEmail=${userEmail}`,
   grabPriceId: (productId: any) => `/api/Stripe/grab-price-id?productId=${productId}`,
   grabPasswordToken: (userEmail: any) => `/api/Auth/grab-password-token?userEmail=${userEmail}`,
   grabShippingRate: (blueprintId: any, printProviderId: any) => `/api/Blueprint/get-blueprint/${blueprintId}/${printProviderId}`,
   grabAllProducts: (limit: any, pageNumber: any) => `/api/Product/grab-all-products?limit=${limit}&pageNumber=${pageNumber}`,
   grabCategoryProducts: (categoryName: any) => `/api/Product/grab-category-products?categoryName=${categoryName}`,
   grabUserCart: (userId: any, userCountry: any) => `/api/Cart/grab-user-cart?userId=${userId}&userCountry=${userCountry}`,
   createCart: (userId: any) => `/api/Cart/create-cart?userId=${userId}`,
   updateCart: (userId: any) => `/api/Cart/update-cart?userId=${userId}`,
   updateCartShipping: (userId: any) => `/api/Cart/update-cart-shipping?userId=${userId}`,
   removeCart: (userId: any) => `/api/Cart/remove-cart?userId=${userId}`,
   grabWishlist: (userId: any) => `/api/Wishlist/grab-wishlist?userId=${userId}`,
   createWishlist: (userId: any) => `/api/Wishlist/create-wishlist?userId=${userId}`,
   removeWishlist: (userId: any, productId: any) => `/api/Wishlist/remove-wishlist?userId=${userId}&productId=${productId}`,
   isWishlisted: (userId: any, productId: any) => `/api/Wishlist/is-wishlisted?userId=${userId}&productId=${productId}`,
   grabProductReviews: (productId: any, limit: any, page: any) =>
      `/api/Review/grab-product-reviews?productId=${productId}&limit=${limit}&page=${page}`,
   grabUserReviews: (userId: any) => `/api/Review/grab-user-reviews?userId=${userId}`,
   recommendedProducts: (tag: any) => `/api/Product/recommended-products?tag=${tag}`
};
