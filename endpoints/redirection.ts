export const redirection = {
   url: "https://patchikatcha.com",
   auth: "https://patchikatcha.com/auth",
   profile: "https://patchikatcha.com/profile",
   checkout: "https://patchikatcha.com/checkout",
   "newsletter-confirmed": "https://patchikatcha.com/newsletter-confirmed",
   "confirm-email-warning": "https://patchikatcha.com/auth/confirm-email-warning",
   product: (decodedProductTitle: any, productId: any) => `https://patchikatcha.com/product/${decodedProductTitle}?productId=${productId}`
};

// http://localhost:3000
