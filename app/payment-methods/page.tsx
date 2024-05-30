import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Payment Methods",
   description: "We inform you all about buying from our epic shop!"
};

export default function PaymentMethods() {
   return (
      <div className="flex flex-col p-12 min-h-screen gap-8">
         <h1 className="text-3xl text-center lg:text-start text-dark">Our Payment Methods</h1>
         <div className="space-2">
            <p>At Patchi Katcha, we offer several secure payment options to make your shopping experience convenient and worry-free.</p>
            <p>
               We use Stripe to process your payments safely and securely. Known for its robust security measures and ease of use, Stripe ensures that
               your payment information is encrypted and protected.
            </p>
            <a href="https://www.stripe.com" className="text-light hover:underline" target="_blank" rel="noopener noreferrer">
               Learn more about Stripe
            </a>
         </div>

         <div className="my-2 p-2">
            <h1 className="text-lg">Paypal:</h1>
            <p>
               Pay easily and securely using your PayPal account. PayPal offers buyer protection and is one of the most trusted online payment
               methods.
            </p>
            <a href="https://www.paypal.com" className="text-light hover:underline" target="_blank" rel="noopener noreferrer">
               Learn more about PayPal
            </a>
         </div>

         <div className="my-2 p-2">
            <h1 className="text-lg">Credit and Debit Cards</h1>
            <p>We accept Visa and MasterCard. Your card information is processed securely using industry-standard encryption.</p>
         </div>

         <div className="my-2 p-2">
            <h1 className="text-lg">Payment Process</h1>
            <ol className="space-2">
               <li>Select your items and proceed to checkout.</li>
               <li>Choose your preferred payment method (PayPal, Visa, or MasterCard).</li>
               <li>Enter the required payment details and confirm your purchase.</li>
               <li>An email will be sent to you with the receipt and order details.</li>
            </ol>
         </div>
      </div>
   );
}
