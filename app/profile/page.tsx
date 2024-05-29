import { Metadata } from "next";
import Profile from "./layout";

export const metadata: Metadata = {
   title: "Profile",
   description: "Keep up with your orders and reviews."
};

export default function ProfilePage() {
   return (
      <>
         <Profile />
      </>
   );
}
