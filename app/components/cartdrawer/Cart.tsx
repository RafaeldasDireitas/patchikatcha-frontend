"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import CartProduct from "./CartProduct";
import Link from "next/link";
import { SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function Cart() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;

   return (
      <SheetContent side="right" className="bg-body-background lg:w-[370px] w-[300px]">
         <SheetHeader>
            <SheetTitle>
               <h1 className="text-3xl text-left text-dark quicksand-medium">Your cart:</h1>
            </SheetTitle>
            <SheetDescription>
               <div>
                  <ul className="min-h-full bg-body-background">
                     {cart?.map((product, index) => {
                        return (
                           <div key={index + index}>
                              <CartProduct
                                 name={product.name}
                                 description={product.description}
                                 price={product.price}
                                 price_id={"aodjao"}
                                 image={product.image}
                                 size={product.size}
                                 color={product.color}
                                 quantity={product.quantity}
                                 index={product.index}
                                 product_id={product.product_id}
                              />
                           </div>
                        );
                     })}

                     <div className="flex flex-col my-2">
                        <hr></hr>
                        <div className="flex flex-col items-center gap-y-3">
                           <Link href={"/patchi-cart"}>
                              <SheetClose>
                                 <button className="btn mt-3 btn-circle quicksand-semibold bg-transparent hover:bg-button-focused hover:border-none border-border-light border-2 text-light hover:text-white w-64">
                                    View Cart
                                 </button>
                              </SheetClose>
                           </Link>
                           <Link href={"/checkout"}>
                              <SheetClose>
                                 <button className="btn btn-circle quicksand-semibold bg-button-background hover:bg-button-focused hover:border-none border-none w-64 text-white">
                                    Checkout
                                 </button>
                              </SheetClose>
                           </Link>
                        </div>
                     </div>
                  </ul>
               </div>
            </SheetDescription>
         </SheetHeader>
      </SheetContent>
   );
}
