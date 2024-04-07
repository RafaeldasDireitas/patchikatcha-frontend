export default function CheckoutCard() {
   return (
      <div className="w-96 bg-white shadow-lg rounded-xl">
         <div className="flex flex-col p-8">
            <h1 className="text-xl">Order details:</h1>
            <div className="flex flex-row text-center">
               <h1 className="text-start">Subtotal:</h1>
               <h1 className="text-end content-end">40€</h1>
            </div>
         </div>
      </div>
   );
}
