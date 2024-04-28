"use client";
import { useGlobalStore } from "@/zustand/globalstore";
import CartProductCard from "./components/CartProductCard";
import CheckoutCard from "./components/CheckoutCard";
import FetchRemoveCartDatabase from "./FetchRemoveCartDatabase";

export default function PatchiCart() {
   const globalStore = useGlobalStore();
   const cart = globalStore.cart;
   const jwtToken = globalStore.jwtToken;
   const userId = globalStore.userId;
   const userCountry = globalStore.userGeo.userCountry;
   const currency = globalStore.userGeo.currency;
   let totalPrice = 0;
   let totalShipping = 0;

   cart.forEach((product) => {
      totalPrice = totalPrice + product.price;
   });

   cart.forEach((product) => {
      if (product.quantity === 1) {
         totalShipping = totalShipping + product.first_item;
      }

      if (product.quantity > 1) {
         totalShipping = totalShipping + product.first_item + product.additional_items * (product.quantity - 1);
      }
   });

   const removeCart = async (index: any, name: any, description: any, image: any, base_price: any, price: any, additional_items: any, first_item: any, variant_id: any, price_id: any, product_id: any, quantity: any, size: any, color: any) => {
      globalStore.removeFromCart(index);
      if (userId && jwtToken) {
         FetchRemoveCartDatabase({
            userId,
            jwtToken,
            cart: { name, description, image, basePrice: base_price, price, additionalItems: additional_items, firstItem: first_item, variantId: variant_id, priceId: price_id, productId: product_id, quantity, size, color, userCountry, currency }
         });
      }
   };

   return (
      <div className="lg:m-20">
         <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
               <h1 className="text-3xl text-dark yeseva-one-regular text-center lg:text-start">Patchi Cart</h1>
               <p className="josefin-sans text-center lg:text-start">Please note that each item will be shipped individually.</p>
               <div className="lg:m-24 lg:hidden block">
                  <CheckoutCard totalPrice={totalPrice} totalShipping={totalShipping}></CheckoutCard>
               </div>
               <div>
                  {cart.length !== 0 ? (
                     cart.map((product, key: number) => {
                        return (
                           <div key={key}>
                              <CartProductCard
                                 productId={product.product_id}
                                 image={product.image}
                                 name={product.name}
                                 description={product.description}
                                 basePrice={product.base_price}
                                 additionalItems={product.additional_items}
                                 firstItem={product.first_item}
                                 variantId={product.variant_id}
                                 price={totalPrice}
                                 priceId={product.price_id}
                                 size={product.size}
                                 color={product.color}
                                 quantity={product.quantity}
                                 index={product.index}
                              >
                                 <button
                                    className="btn rounded-xl w-40 border-none bg-button-background hover:bg-red-800 text-white josefin-sans mt-2 items-center"
                                    onClick={() =>
                                       removeCart(
                                          product.index,
                                          product.name,
                                          product.description,
                                          product.image,
                                          product.base_price,
                                          product.price,
                                          product.additional_items,
                                          product.first_item,
                                          product.variant_id,
                                          product.price_id,
                                          product.product_id,
                                          product.quantity,
                                          product.size,
                                          product.color
                                       )
                                    }
                                 >
                                    Remove
                                 </button>
                              </CartProductCard>
                           </div>
                        );
                     })
                  ) : (
                     <div>
                        <h1 className="josefin-sans text-center lg:text-start">No products in your cart.</h1>
                     </div>
                  )}
               </div>
            </div>
            <div className="m-24 hidden lg:block">
               <CheckoutCard totalPrice={totalPrice} totalShipping={totalShipping}></CheckoutCard>
            </div>
         </div>
      </div>
   );
}
