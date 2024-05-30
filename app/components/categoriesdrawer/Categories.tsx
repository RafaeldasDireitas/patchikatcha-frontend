"use client";
import { SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CategoriesNavbarType } from "@/types/CategoriesNavbarType";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Categories({ categories }: any) {
   return (
      <SheetContent side="left" className="bg-body-background lg:w-[370px] w-[300px]">
         <SheetHeader>
            <SheetTitle>
               <h1 className="text-3xl text-left text-dark ">Categories:</h1>
            </SheetTitle>
            <SheetDescription>
               <div className="bg-body-background text-black">
                  {categories.map((category: CategoriesNavbarType, key: number) => {
                     return (
                        <Accordion type="single" collapsible className="p-4">
                           <AccordionItem value={`item-${key}`}>
                              <AccordionTrigger className="text-xl">{category.title}</AccordionTrigger>
                              <AccordionContent>
                                 <ul className="flex flex-col text-start mx-2">
                                    {category.content.map((content, key: number) => {
                                       return (
                                          <Link key={key + key} href={`${category.href[key]}?title=${category.title}`}>
                                             <SheetClose>
                                                <li className="text-dark text-lg my-1 hover:underline hover:text-light">{content}</li>
                                             </SheetClose>
                                          </Link>
                                       );
                                    })}
                                    <Link href={{ pathname: `/categories/${category.title}` }}>
                                       <SheetClose>
                                          <li className="text-dark text-lg my-1 hover:underline hover:text-light">All {category.title}</li>
                                       </SheetClose>
                                    </Link>
                                 </ul>
                              </AccordionContent>
                           </AccordionItem>
                        </Accordion>
                     );
                  })}
               </div>
            </SheetDescription>
         </SheetHeader>
      </SheetContent>
   );
}
