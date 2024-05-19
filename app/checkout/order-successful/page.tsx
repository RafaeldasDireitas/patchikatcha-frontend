import orderSuccessful from "@/public/order_successful.png";
import Image from "next/image";
import Link from "next/link";

export default function OrderSucess() {
   return (
      <>
         <div className="min-h-screen flex flex-col justify-center items-center">
            <Image src={orderSuccessful} width={300} height={300} alt="Order successful"></Image>
            <h1 className="text-3xl text-dark quicksand-bold">Your order was successful!</h1>
            <p>You will soon receive an email with your receipt.</p>
            <p>
               Check your{" "}
               <Link href={"/profile"}>
                  <span className="text-light hover:underline hover:cursor-pointer">profile</span>
               </Link>{" "}
               to see your order details!
            </p>
         </div>
      </>
   );
}
