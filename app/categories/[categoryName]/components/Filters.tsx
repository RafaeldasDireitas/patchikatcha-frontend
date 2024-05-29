"use client";
import { Slider } from "@/components/ui/slider";

export default function Filters({ productPrice, setProductPrice }: any) {
   const handleProductPrice = (value: number[]) => {
      const productPrice = value[0];
      setProductPrice(productPrice);
   };

   return (
      <div>
         <h1 className="text-xl text-dark">Filter by</h1>
         <p>Price range: {productPrice} €</p>
         <Slider
            defaultValue={[150]}
            min={0}
            max={150}
            step={1}
            value={[productPrice]}
            onValueChange={handleProductPrice}
            className="mx-auto lg:mx-0 w-40 my-2"
         />
      </div>
   );
}
