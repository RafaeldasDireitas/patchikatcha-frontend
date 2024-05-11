"use client";
import { CategoriesNavbarType } from "@/types/CategoriesNavbarType";
import Link from "next/link";

export default function Categories({ htmlFor, categories }: any) {
   return (
      <div className="drawer-side z-50">
         <label htmlFor={htmlFor} aria-label="close sidebar" className="drawer-overlay"></label>

         <div className="menu p-4 w-80 min-h-full bg-body-background">
            <h1 className="text-3xl text-left text-dark quicksand-medium">Categories:</h1>

            {categories.map((category: CategoriesNavbarType, key: number) => {
               return (
                  <div key={key + key}>
                     <div className="collapse ">
                        <input type="radio" name="my-accordion-1" defaultChecked />
                        <div className="collapse-title text-xl quicksand-medium h-4">{category.title}</div>
                        <div className="collapse-content">
                           {category.content.map((content, key: number) => {
                              return (
                                 <Link key={key + key} href={`${category.href[key]}?title=${category.title}`}>
                                    <p className="ml-6 my-1 quicksand-light">{content}</p>
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
      </div>
   );
}
