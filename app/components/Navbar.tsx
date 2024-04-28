"use client";
import Image from "next/image";
import logo from "@/public/Patchi.svg";
import { BiCart, BiDownArrowAlt, BiHeart, BiMenu, BiUser } from "react-icons/bi";
import Link from "next/link";
import Cart from "./cartdrawer/Cart";
import { useGlobalStore } from "@/zustand/globalstore";
import Categories from "./categoriesdrawer/Categories";

const categories = [
   {
      title: "New",
      content: ["New products", "Best sellers"],
      href: ["/", "/best-sellers"]
   },
   {
      title: "Clothing",
      content: ["Hoodies", "T-shirts"],
      href: ["/categories/hoodies", "/categories/t-shirts"]
   },
   {
      title: "Accessories",
      content: ["Backpacks", "Cups"],
      href: ["/categories/backpacks", "/categories/cups"]
   }
];

export default function Navbar() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   const cartQuantity = cart.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.quantity;
   }, 0);

   return (
      <>
         <nav className="flex flex-row justify-between h-20 relative">
            <div className="lg:mx-10 flex justify-start items-center">
               <div>
                  <input id="my-drawer-3" type="checkbox" className="drawer-toggle absolute" />
                  {/* Page content here */}
                  <label htmlFor="my-drawer-3">
                     <div>
                        <BiMenu size={30} className="lg:hidden block ml-4" />
                     </div>
                  </label>
                  <Categories htmlFor="my-drawer-3" categories={categories} />
               </div>

               <Link href={"/"} className="hover:scale-110 hover:cursor-pointer duration-200">
                  <Image src={logo} width={100} height={100} alt="Patchi" className="mt-2" />
               </Link>
            </div>
            <div className="lg:mx-10 flex justify-end items-center">
               <Link href={"/wishlist"}>
                  <div>
                     <BiHeart size={25} className="mx-2 hover:cursor-pointer hover:scale-110 duration-200" />
                  </div>
               </Link>
               <div className="drawer-end">
                  <input id="my-drawer-4" type="checkbox" className="drawer-toggle absolute" />
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4">
                     <div className="relative">
                        <BiCart size={25} className="mx-2 hover:cursor-pointer hover:scale-110 duration-200" />
                        <h1 className="absolute text-xs left-6 top-3 bg-button-background hover:bg-button-background btn btn-circle border-none w-4 min-h-0 max-h-5 text-white rounded">{cartQuantity}</h1>
                     </div>
                  </label>
                  <Cart htmlFor="my-drawer-4"></Cart>
               </div>
               <Link href={"/auth"}>
                  <div className="mx-2 hover:cursor-pointer hover:scale-105 duration-200">
                     <BiUser size={25} className="mx-2 hover:cursor-pointer hover:scale-110 duration-200" />{" "}
                  </div>
               </Link>{" "}
            </div>
         </nav>
         <nav>
            <div className="flex flex-row justify-center bg-button-background ">
               {categories.map((category) => {
                  return (
                     <div className="flex flex-row mx-4 my-2 text-white">
                        <h1>{category.title}</h1>
                        <BiDownArrowAlt size={25} className="mx-1" />
                     </div>
                  );
               })}
            </div>
         </nav>
      </>
   );
}
