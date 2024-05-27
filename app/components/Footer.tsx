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
            <a className="link link-hover ">About PatchiKatcha</a>
            <a className="link link-hover ">Newsletter</a>
            <a className="link link-hover ">Reviews</a>
            <Link href={"/faq"}>
               <p className="link link-hover ">FAQ</p>
            </Link>
         </nav>
         <nav>
            <h6 className="footer-title opacity-100 z-0">Support</h6>
            <Link href={"/contact-us"}>
               <p className="link link-hover ">Contact us</p>
            </Link>
            <p className="link link-hover ">Shipping</p>
            <p className="link link-hover ">Payment Methods</p>
            <p className="link link-hover ">Order Tracking</p>
         </nav>
         <nav>
            <h6 className="footer-title opacity-100 z-0">Legal</h6>
            <Link href={"/terms-and-services"}>
               <p className="link link-hover ">Terms and Services</p>
            </Link>
            <Link href={"/refund-policy"}>
               <p className="link link-hover ">Refund Policy</p>
            </Link>
            <Link href={"/cookie-policy"}>
               <p className="link link-hover ">Cookie Policy</p>
            </Link>
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
