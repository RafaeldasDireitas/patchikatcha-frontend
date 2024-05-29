import ContactUs from "./layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Contact us",
   description: "If you have any questions, don't hesitate to contact us."
};

export default function ContactUsPage() {
   return (
      <>
         <ContactUs />
      </>
   );
}
