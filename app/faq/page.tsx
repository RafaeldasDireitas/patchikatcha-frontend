"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

export default function faq() {
   useEffect(() => {
      document.title = "FAQ";
   }, []);

   return (
      <div className="p-4 lg:p-12 flex flex-col">
         <h1 className="text-3xl text-dark quicksand-bold">FAQ</h1>
         <Accordion type="single" collapsible className="w-full p-4">
            <AccordionItem value="item-1">
               <AccordionTrigger className="quicksand-semibold">Do you ship worldwide?</AccordionTrigger>
               <AccordionContent>
                  We currently only ship within the EU. However, we have ideas to also offer worldwide shipping in the future. You can follow our
                  Instagram (linked) to stay up to date.
               </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
               <AccordionTrigger className="quicksand-semibold">Is it styled?</AccordionTrigger>
               <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
               <AccordionTrigger className="quicksand-semibold">Is it animated?</AccordionTrigger>
               <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   );
}
