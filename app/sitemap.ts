import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const baseUrl = "https://patchikatcha.com";

   return [
      {
         url: `${baseUrl}`
      },
      {
         url: `${baseUrl}/auth`
      },
      {
         url: `${baseUrl}/auth/change-password`
      },
      {
         url: `${baseUrl}/auth/change-password-warning`
      },
      {
         url: `${baseUrl}/auth/confirm-email`
      },
      {
         url: `${baseUrl}/auth/confirm-email-warning`
      },
      {
         url: `${baseUrl}/categories`
      },
      {
         url: `${baseUrl}/checkout`
      },
      {
         url: `${baseUrl}/checkout/order-successful`
      },
      {
         url: `${baseUrl}/contact-us`
      },
      {
         url: `${baseUrl}/cookie-policy`
      },
      {
         url: `${baseUrl}/faq`
      },
      {
         url: `${baseUrl}/shipping`
      },
      {
         url: `${baseUrl}/newsletter-confirmed`
      },
      {
         url: `${baseUrl}/patchi-cart`
      },
      {
         url: `${baseUrl}/product`
      },
      {
         url: `${baseUrl}/profile`
      },
      {
         url: `${baseUrl}/refund-policy`
      },
      {
         url: `${baseUrl}/payment-methods`
      },
      {
         url: `${baseUrl}/review-product`
      },
      {
         url: `${baseUrl}/terms-and-services`
      },
      {
         url: `${baseUrl}/wishlist`
      }
   ];
}
