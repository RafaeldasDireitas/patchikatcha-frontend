import { Metadata } from "next";
import PatchiCart from "./layout";

export const metadata: Metadata = {
   title: "Patchi Cart",
   description: "Find and buy all your products here!"
};

export default function PatchiCartPage() {
   return (
      <>
         <PatchiCart />
      </>
   );
}
