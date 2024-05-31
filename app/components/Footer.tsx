import Link from "next/link";
import logo from "@/public/logo_white.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();

   return (
      <footer className="footer p-10 bg-button-background text-white">
         <aside>
            <div>
               <Image src={logo} width={180} height={180} alt="No logo found" />
            </div>
            <p>Copyright © {currentYear} - All rights reserved</p>
         </aside>
         <nav>
            <h6 className="footer-title opacity-100 z-0">About us</h6>
            <a className="link link-hover ">Newsletter</a>
            <a href={"/faq"} className="link link-hover ">
               FAQ
            </a>
         </nav>
         <nav>
            <h6 className="footer-title opacity-100 z-0">Support</h6>
            <a href="/contact-us" className="link link-hover ">
               Contact us
            </a>
            <a href="/shipping" className="link link-hover ">
               Shipping
            </a>
            <a href="/payment-methods" className="link link-hover ">
               Payment Methods
            </a>
            <a href="/profile" className="link link-hover ">
               Order Tracking
            </a>
         </nav>
         <nav>
            <h6 className="footer-title opacity-100 z-0">Legal</h6>
            <a href={"/terms-and-services"} className="link link-hover ">
               Terms and Services
            </a>
            <a href={"/refund-policy"} className="link link-hover ">
               Refund Policy
            </a>
            <a href={"/cookie-policy"} className="link link-hover ">
               Cookie Policy
            </a>
            <a href={"/imprint"} className="link link-hover ">
               Imprint
            </a>
         </nav>
         <nav>
            <h6 className="footer-title opacity-100 z-0">Socials</h6>
            <div className="flex flex-row items-center">
               <FaInstagram color="white" size={30}></FaInstagram>
               {/* <a className="link link-hover ">Instagram</a> */}
            </div>
         </nav>
      </footer>
   );
}
