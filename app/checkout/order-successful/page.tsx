import orderSuccessful from "@/public/order_successful.png";
import Image from "next/image";
import Link from "next/link";

export default function OrderSucess() {
   return (
      <>
         <div className="flex flex-col items-center text-center min-h-screen my-16">
            <Image className="flex justify-center" src={orderSuccessful} width={300} height={300} alt="Order successful"></Image>
            <h1 className="text-3xl text-dark quicksand-bold">Your order was successful!</h1>
            <p>You will soon receive a confirmation email.</p>
            <p>
               You can check your order status anytime in your
               <Link href={"/profile"}>
                  <span className="text-light hover:underline hover:cursor-pointer"> profile</span>
               </Link>{" "}
            </p>
         </div>
      </>
   );
}
