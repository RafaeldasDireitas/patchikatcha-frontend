export default function RefundPolicy() {
   return (
      <div className="p-12 my-8">
         <h1 className="quicksand-bold text-2xl text-dark mb-1">Our returns policy:</h1>
         <p className="my-1">
            We do not take responsibility for returns and exchanges for customers that ordered the wrong size, color, or simply changed their mind.
         </p>
         <p>
            In case of a damaged product or a manufacturing error, Patchi Katcha offers a free replacement or a refund if you contact us within 30
            days of product delivery. To initiate a return or exchange due to a damaged product or manufacturing error, please follow these steps:
         </p>
         <ul className="list-disc p-8 quicksand-semibold">
            <li>
               {" "}
               Contact our team through the{" "}
               <a href="/contacts" className="text-light hover:underline quicksand-semibold">
                  contacts page
               </a>{" "}
               on our website.
            </li>
            <li> Provide a clear photo or video showing the issue with the product.</li>
            <li>Our team will typically respond to your issue within [X] business days and aim to resolve it as quickly as possible.</li>
         </ul>
         <p>
            Please note that any claims for damaged or defective products must be made within 30 days of delivery. After this time, we may not be able
            to offer a refund or replacement.
         </p>
         <p>For further assistance or inquiries, please contact our customer support team at patchikatcha@gmail.com.</p>
      </div>
   );
}
