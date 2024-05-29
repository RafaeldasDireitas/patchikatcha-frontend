export default function Shipping() {
   return (
      <div className="p-12 gap-8 min-h-screen">
         <h1 className="text-3xl text-dark">Shipping</h1>
         <div className="p-4">
            <h1 className="text-2xl">Clothing:</h1>
            <div className="p-2">
               <p>Hoodies - 2 to 7 business days</p>
               <p>T-shirts - 2 to 7 business days</p>
            </div>
         </div>

         <div className="p-4">
            <h1 className="text-2xl">Accessories:</h1>
            <div className="p-2">
               <p>Mugs - 2 to 7 business days</p>
            </div>
         </div>

         <div className="p-4">
            <h1 className="text-2xl">Home:</h1>
            <div className="p-2">
               <p>Mugs - 2 to 7 business days</p>
            </div>
         </div>
      </div>
   );
}
