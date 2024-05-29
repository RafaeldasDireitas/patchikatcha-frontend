import { Metadata } from "next";
import Wishlist from "./layout";

export const metadata: Metadata = {
   title: "Wishlist",
   description: "Find your favorite products!"
};

export default function WishlistPage() {
   return (
      <>
         <Wishlist />
      </>
   );
}
