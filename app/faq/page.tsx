"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

export default function faq() {
   useEffect(() => {
      document.title = "FAQ";
   }, []);

   return (
      <div className="p-12">
         <h1 className="text-3xl text-dark quicksand-bold">FAQ</h1>
         <Accordion type="single" collapsible className="w-full p-4">
            <AccordionItem value="item-1">
               <AccordionTrigger>Is it accessible?</AccordionTrigger>
               <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
               <AccordionTrigger>Is it styled?</AccordionTrigger>
               <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
               <AccordionTrigger>Is it animated?</AccordionTrigger>
               <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   );
}
