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
            <p className="quicksand-bold">Copyright © {currentYear} - All rights reserved</p>
         </aside>
         <nav>
            <h6 className="footer-title opacity-100 z-0 quicksand-bold">About us</h6>
            <a className="link link-hover quicksand-medium">About PatchiKatcha</a>
            <a className="link link-hover quicksand-medium">Newsletter</a>
            <a className="link link-hover quicksand-medium">Reviews</a>
            <Link href={"/faq"}>
               <p className="link link-hover quicksand-medium">FAQ</p>
            </Link>
         </nav>
         <nav>
            <h6 className="footer-title opacity-100 z-0 quicksand-bold">Support</h6>
            <Link href={"/contact-us"}>
               <p className="link link-hover quicksand-medium">Contact us</p>
            </Link>
            <p className="link link-hover quicksand-medium">Shipping</p>
            <p className="link link-hover quicksand-medium">Payment Methods</p>
            <Link href={"/returns"}>
               <p className="link link-hover quicksand-medium">Returns</p>
            </Link>

            <p className="link link-hover quicksand-medium">Order Tracking</p>
         </nav>
         <nav>
            <h6 className="footer-title opacity-100 z-0 quicksand-bold">Legal</h6>
            <Link href={"/terms-and-services"}>
               <p className="link link-hover quicksand-medium">Terms and Services</p>
            </Link>
            <p className="link link-hover quicksand-medium">Privacy Policy</p>
            <p className="link link-hover quicksand-medium">Data Policy</p>
         </nav>
         <nav>
            <h6 className="footer-title opacity-100 z-0 quicksand-bold">Socials</h6>
            <div className="flex flex-row items-center">
               <FaInstagram color="white" size={30}></FaInstagram>
               {/* <a className="link link-hover quicksand-medium">Instagram</a> */}
            </div>
         </nav>
      </footer>
   );
}
