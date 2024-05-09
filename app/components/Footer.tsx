import Link from "next/link";
import logo from "@/public/new_logo.svg";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
   return (
      <>
         <footer className="footer p-10 bg-button-background text-white">
            <aside>
               <div className="bg-white rounded-xl">
                  <Image src={logo} width={200} height={200} alt="No logo found"></Image>
               </div>
               <p className="quicksand-bold">Copyright © 2024 - All rights reserved</p>
            </aside>
            <nav>
               <h6 className="footer-title opacity-100 z-0 quicksand-bold">Socials</h6>
               <div className="flex flex-row items-center">
                  <a className="link link-hover quicksand-medium">Instagram</a>
                  <FaInstagram color="white" className="mx-2" size={20}></FaInstagram>
               </div>
            </nav>
            <nav>
               <h6 className="footer-title opacity-100 z-0 quicksand-bold">Company</h6>
               <a className="link link-hover quicksand-medium">About us</a>
               <a className="link link-hover quicksand-medium">Contacts</a>
            </nav>
            <nav>
               <h6 className="footer-title opacity-100 z-0 quicksand-bold">Legal</h6>
               <Link href={"/terms-and-services"}>
                  <p className="link link-hover quicksand-medium">Terms and Services</p>
               </Link>
               <a className="link link-hover quicksand-medium">Refund policy</a>
            </nav>
         </footer>
      </>
   );
}
