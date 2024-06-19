import Image from "next/image";
import AboutUsImage from "@/public/aboutus.png";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
   return (
      <div className="flex flex-col lg:flex-row lg:p-12">
         <div className="flex flex-col lg:w-2/4 items-center">
            <motion.div whileInView={{ rotateY: 180 }} viewport={{ once: true }} transition={{ type: "spring", duration: 2 }}>
               <Image className="rounded-xl" src={AboutUsImage} width={800} height={800} alt="About us"></Image>
            </motion.div>
         </div>

         <div className="flex flex-col lg:w-2/4 lg:px-10 my-4 lg:my-0">
            <h1 className="text-3xl lg:text-start text-center text-dark">About us</h1>
            <p className="lg:p-1 p-4 text-center lg:text-start">
               PatchiKatcha is your online shop for all sorts of cute items based in Europe! We aim to enhance your daily life with our cute
               illustrations of your new favorite fluffy companions. Join us on our journey of capturing all the wholesome moments life has to offer.
            </p>
            <p className="lg:p-1 p-4 text-center lg:text-start">
               Follow us on{" "}
               <Link href={"https://www.instagram.com/patchikatcha/"} className="text-light">
                  {" "}
                  Instagram
               </Link>{" "}
               and{" "}
               <Link href={"https://pt.pinterest.com/patchikatcha/"} className="text-light">
                  {" "}
                  Pinterest
               </Link>{" "}
               to stay up to date with our new products and special offers. We would also love to hear your feedback via{" "}
               <span className="text-light">patchikatcha@gmail.com</span> or through reviews on our products.
            </p>
         </div>
      </div>
   );
}
