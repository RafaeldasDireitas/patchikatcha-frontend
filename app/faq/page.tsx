import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
   title: "FAQ",
   description: "You'll find the most asked questions here!"
};

export default function faq() {
   return (
      <div className="p-4 lg:p-12 flex flex-col min-h-screen">
         <h1 className="text-3xl text-dark ">FAQ</h1>
         <Accordion type="single" collapsible className="w-full p-4">
            <AccordionItem value="item-1">
               <AccordionTrigger className="">Do you ship worldwide?</AccordionTrigger>
               <AccordionContent>
                  We currently only ship within the EU. However, we have ideas to also offer worldwide shipping in the future. You can follow our
                  Instagram (linked) to stay up to date.
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
               <AccordionTrigger className="">Why are your delivery times longer than other shops?</AccordionTrigger>
               <AccordionContent>
                  All of our products are printed on demand which means we don't have any stock of most of our items to directly dispatch. This means
                  each item is being made individually for each order placed.
               </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
               <AccordionTrigger className="">What does PatchiKatcha mean?</AccordionTrigger>
               <AccordionContent>
                  It's a simple cute term we made up and started using in our conversation. Due to its uniqueness and wholesome sound, we decided to
                  name our brand after this!
               </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
               <AccordionTrigger className="">How can I sign up for your Newsletter?</AccordionTrigger>
               <AccordionContent>You can sign up for free in our homepage.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
               <AccordionTrigger className="">Why should I subscribe to your Newsletter?</AccordionTrigger>
               <AccordionContent>
                  We will keep you up to date about any new products or new designs, as well as sales or discount codes!
               </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
               <AccordionTrigger className="">Why are there only a few designs so far?</AccordionTrigger>
               <AccordionContent>
                  We have just launched PatchiKatcha in Summer 2024 and are eager to expand our lineup of products soon! Subscribe to our Newsletter
                  or follow us on Instagram to not miss any new products.
               </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
               <AccordionTrigger className="">Does PatchiKatcha have a physical store?</AccordionTrigger>
               <AccordionContent>We currently do not have a physical store.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
               <AccordionTrigger className="">Will I have to pay any import fees?</AccordionTrigger>
               <AccordionContent>
                  Since we ship from Europe and only allow orders from European countries for the time being, you will not have to pay any import fees
                  or duties.
               </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
               <AccordionTrigger className="">Where can I track my order?</AccordionTrigger>
               <AccordionContent>
                  You can track your order in your{" "}
                  <Link href={"/profile"} className="hover:underline text-light hover:cursor-pointer">
                     profile
                  </Link>
               </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
               <AccordionTrigger className="">How can I issue a refund?</AccordionTrigger>
               <AccordionContent>
                  Read our refund policy{" "}
                  <Link href={"/refund-policy"} className="hover:underline text-light hover:cursor-pointer">
                     here
                  </Link>
               </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
               <AccordionTrigger className="">I haven't received any confirmation email for my order.</AccordionTrigger>
               <AccordionContent>
                  Please allow a few minutes for our confirmation email to send and check your spam folder. If you still don't see your confirmation
                  mail, contact us at patchikatcha@gmail.com
               </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
               <AccordionTrigger className="">I would like to change a part of my order. How can I do that?</AccordionTrigger>
               <AccordionContent>
                  Please contact us at patchikatcha@gmail.com or{" "}
                  <span>
                     <Link href={"contact-us"} className="hover:underline text-light hover:cursor-pointer">
                        contact us
                     </Link>
                  </span>{" "}
                  within a 24 hours time frame after your initial order. After that time period has passed, we cannot change your order anymore.
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   );
}
