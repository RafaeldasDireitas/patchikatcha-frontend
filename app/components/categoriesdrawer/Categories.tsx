"use client";
import { SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CategoriesNavbarType } from "@/types/CategoriesNavbarType";
import Link from "next/link";

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
                        <div key={key + key}>
                           <div className="collapse ">
                              <input type="radio" name="my-accordion-1" defaultChecked />
                              <div className="collapse-title text-xl text-start  h-4">{category.title}</div>
                              <div className="collapse-content flex flex-col pl-6 text-start">
                                 {category.content.map((content, key: number) => {
                                    return (
                                       <Link key={key + key} href={`${category.href[key]}?title=${category.title}`}>
                                          <SheetClose className="">
                                             <p className="my-1 hover:underline hover:text-light">{content}</p>
                                          </SheetClose>
                                       </Link>
                                    );
                                 })}
                              </div>
                           </div>
                           <hr />
                        </div>
                     );
                  })}
               </div>
            </SheetDescription>
         </SheetHeader>
      </SheetContent>
   );
}
