"use client";
import Image from "next/image";
import logo from "@/public/new_logo.svg";
import Link from "next/link";
import Cart from "./cartdrawer/Cart";
import { useGlobalStore } from "@/zustand/globalstore";
import Categories from "./categoriesdrawer/Categories";
import { IoCartOutline, IoHeartOutline, IoMenuOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { categories } from "../../data/CategoriesObject";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   const cartQuantity = cart.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.quantity;
   }, 0);

   return (
      <>
         <nav className="flex flex-row justify-between h-20 max-h-20 relative" aria-label="primary">
            <div className="lg:mx-10 flex justify-start items-center">
               <Sheet>
                  <SheetTrigger>
                     <div>
                        <IoMenuOutline color="brown" size={30} className="lg:hidden block ml-4" />
                     </div>
                  </SheetTrigger>
                  <Categories htmlFor="my-drawer-3" categories={categories} />
               </Sheet>

               <Link href={"/"} className="hover:scale-110 hover:cursor-pointer duration-200">
                  <Image src={logo} width={180} height={180} alt="Patchi" className="mt-2" />
               </Link>
            </div>
            <div className="lg:mx-10 flex justify-end items-center">
               <Link href={"/wishlist"}>
                  <div>
                     <IoHeartOutline size={25} className="mx-2 text-dark hover:cursor-pointer hover:scale-110 duration-200" />
                  </div>
               </Link>
               <Sheet>
                  <SheetTrigger>
                     <div>
                        <div className="relative">
                           <IoCartOutline size={25} className="mx-2 text-dark hover:cursor-pointer hover:scale-110 duration-200" />
                           <h1 className="absolute text-xs left-6 top-3 bg-button-background hover:bg-button-background btn btn-circle border-none w-4 min-h-0 max-h-5 text-white rounded">
                              {cartQuantity}
                           </h1>
                        </div>
                     </div>
                  </SheetTrigger>
                  <Cart />
               </Sheet>

               {globalStore.isAuthenticated ? (
                  <Link href={"/profile"}>
                     <div className="mx-2 hover:cursor-pointer hover:scale-105 duration-200 relative">
                        <AiOutlineUser size={25} className="mx-2 text-dark hover:cursor-pointer hover:scale-110 duration-200" />
                        <button className="absolute btn btn-circle bg-green-500 hover:bg-green-500 w-3 min-h-0 max-h-3 left-6 -bottom-0.5"></button>
                     </div>
                  </Link>
               ) : (
                  <Link href={"/auth"}>
                     <div className="mx-2 hover:cursor-pointer hover:scale-105 duration-200">
                        <AiOutlineUser size={25} className="mx-2 text-dark hover:cursor-pointer hover:scale-110 duration-200" />{" "}
                     </div>
                  </Link>
               )}
            </div>
         </nav>
         <nav aria-label="secondary">
            <div className="lg:flex hidden flex-row justify-center bg-button-background">
               {categories.map((category, key) => {
                  return (
                     <div
                        key={key + key}
                        className="dropdown dropdown-bottom dropdown-hover flex flex-col my-2 ml-4 -mr-1 text-white quicksand-medium"
                     >
                        <div
                           tabIndex={0}
                           role="button"
                           className="btn min-h-0 bg-button-background max-h-8 text-lg hover:bg-button-background border-none text-white"
                        >
                           {category.title}
                        </div>
                        <ul className="dropdown-content hover:underline left-0 w-52 max-h-96 bg-white p-2 shadow-xl">
                           {category.content.map((content, index) => (
                              <Link key={index + index} href={{ pathname: `/categories/${content}`, query: { title: category.title } }}>
                                 <li className="text-black ml-1 mb-1 hover:text-light hover:underline hover:cursor-pointer quicksand-medium">
                                    {content}
                                 </li>
                              </Link>
                           ))}
                           <li className="bg-button-background h-1"></li>
                        </ul>
                     </div>
                  );
               })}
            </div>
         </nav>
      </>
   );
}
