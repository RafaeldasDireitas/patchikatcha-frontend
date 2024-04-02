"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import skirt from "@/public/skirt.png";
import pullover from "@/public/pullover- (6).png";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { useGlobalStore } from "@/zustand/globalstore";
import cartImage from "@/public/Bag_alt_light.png";
import user from "@/public/User_cicrle_light.png";
import Image from "next/image";
import Link from "next/link";
import Cart from "../cartdrawer/Cart";
import patchi from "@/public/Patchi.svg";
import pacthipng from "@/public/patchi-png.png";

const products = [
   {
      name: "Men's Clothing",
      description: "",
      href: "/categories/men",
      icon: pullover
   },
   {
      name: "Women's Clothing",
      description: "",
      href: "/categories/women",
      icon: skirt
   }
];
const callsToAction = [
   { name: "Watch demo", href: "#", icon: PlayCircleIcon },
   { name: "Contact sales", href: "#", icon: PhoneIcon }
];

function classNames(...classes: any) {
   return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   const cartQuantity = cart.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.quantity;
   }, 0);

   return (
      <header className="bg-white">
         <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1 ">
               <a href="/" className="hover:cursor-pointer hover:scale-110 duration-200">
                  <Image src={pacthipng} width={50} height={50} alt="No icon found"></Image>
               </a>
            </div>
            <div className="flex lg:hidden">
               <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
               >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
               </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
               <Popover className="relative">
                  <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-light">
                     Categories
                     <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                     as={Fragment}
                     enter="transition ease-out duration-200"
                     enterFrom="opacity-0 translate-y-1"
                     enterTo="opacity-100 translate-y-0"
                     leave="transition ease-in duration-150"
                     leaveFrom="opacity-100 translate-y-0"
                     leaveTo="opacity-0 translate-y-1"
                  >
                     <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                           {products.map((item) => (
                              <div
                                 key={item.name}
                                 className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                              >
                                 <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                    <Image src={item.icon} width={25} height={25} alt="No icon found"></Image>
                                 </div>
                                 <div className="flex-auto">
                                    <a href={item.href} className="block font-semibold text-gray-900">
                                       {item.name}
                                       <span className="absolute inset-0" />
                                    </a>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </Popover.Panel>
                  </Transition>
               </Popover>

               <a href="#" className="text-sm font-semibold leading-6 text-light">
                  Features
               </a>
               <a href="#" className="text-sm font-semibold leading-6 text-light">
                  Marketplace
               </a>
               <a href="#" className="text-sm font-semibold leading-6 text-light">
                  Company
               </a>
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
               <div className="drawer-end">
                  <input id="my-drawer-4" type="checkbox" className="drawer-toggle absolute" />
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4">
                     <div className="relative">
                        <Image
                           src={cartImage}
                           width={24}
                           height={24}
                           alt="No cart found"
                           className="mx-2 hover:cursor-pointer hover:scale-110 duration-200"
                        />
                        <h1 className="absolute text-xs left-6 top-3 bg-button-background hover:bg-button-background btn btn-circle border-none w-4 min-h-0 max-h-5 text-white rounded">
                           {cartQuantity}
                        </h1>
                     </div>
                  </label>
                  <Cart></Cart>
               </div>
               {globalStore.isAuthenticated ? (
                  <Link href={"/profile"}>
                     <div className="mx-2 hover:cursor-pointer hover:scale-105 duration-100 relative">
                        <Image src={user} width={26} height={26} alt="User icon"></Image>
                        <button className="absolute btn btn-circle bg-green-500 hover:bg-green-500 w-3 min-h-0 max-h-3 left-3.5 -bottom-0.5"></button>
                     </div>
                  </Link>
               ) : (
                  <>
                     <Link href={"/auth"}>
                        <div className="mx-2 hover:cursor-pointer hover:scale-105 duration-200">
                           <Image src={user} width={26} height={26} alt="User icon"></Image>
                        </div>
                     </Link>
                  </>
               )}
            </div>
         </nav>
         <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />

            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
               <div className="flex items-center justify-between">
                  <a className="text-light" href="/">
                     <Image src={pacthipng} width={50} height={50} alt="No icon found"></Image>
                  </a>
                  <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                     <span className="sr-only">Close menu</span>
                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
               </div>
               <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                     <div className="space-y-2 py-6">
                        <Disclosure as="div" className="-mx-3">
                           {({ open }: any) => (
                              <>
                                 <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-light">
                                    Categories
                                    <ChevronDownIcon className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden="true" />
                                 </Disclosure.Button>
                                 <Disclosure.Panel className="mt-2 space-y-2">
                                    {products.map((item) => (
                                       <Disclosure.Button
                                          key={item.name}
                                          as="a"
                                          href={item.href}
                                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                       >
                                          {item.name}
                                       </Disclosure.Button>
                                    ))}
                                 </Disclosure.Panel>
                              </>
                           )}
                        </Disclosure>
                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light">
                           Features
                        </a>
                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light">
                           Marketplace
                        </a>
                        <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light">
                           Company
                        </a>
                     </div>
                     <div className="py-6">
                        {globalStore.isAuthenticated ? (
                           <a className="text-sm font-semibold leading-6 text-light">Sign Out</a>
                        ) : (
                           <>
                              <a href="/auth" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-light">
                                 Log in
                              </a>
                              <a href="/auth" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-light">
                                 Sign up
                              </a>
                              <div className="flex lg:hidden drawer-end">
                                 <input id="my-drawer-4-mobile" type="checkbox" className="drawer-toggle absolute" />
                                 {/* Page content here */}
                                 <label htmlFor="my-drawer-4-mobile">
                                    <div className="relative">
                                       <Image
                                          src={cartImage}
                                          width={24}
                                          height={24}
                                          alt="No cart found"
                                          className="mx-2 hover:cursor-pointer hover:scale-110 duration-200"
                                       />
                                       <h1 className="absolute left-6 top-3 bg-button-background hover:bg-button-background btn btn-circle border-none w-4 min-h-0 max-h-5 text-white rounded">
                                          0
                                       </h1>
                                    </div>
                                 </label>
                                 <div className="drawer-side right-0">
                                    <label htmlFor="my-drawer-4-mobile" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu p-4 w-96 min-h-full bg-body-background">
                                       <div>
                                          <h1 className="text-3xl text-left">Your cart</h1>
                                       </div>
                                    </ul>
                                 </div>
                              </div>
                           </>
                        )}
                     </div>
                  </div>
               </div>
            </Dialog.Panel>
         </Dialog>
      </header>
   );
}
