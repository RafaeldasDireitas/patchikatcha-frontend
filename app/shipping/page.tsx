import { categories } from "@/data/CategoriesObject";

export default function Shipping() {
   return (
      <div className="p-12 flex flex-col text-center lg:text-start gap-8 min-h-screen">
         <h1 className="text-3xl text-dark">Shipping</h1>
         <div className="p-4">
            <h1 className="text-2xl text-dark">Clothing:</h1>
            <div className="p-2">
               {categories[0].content.map((content, key) => (
                  <p key={key + key}>{content} - 2 to 7 business days</p>
               ))}
            </div>
         </div>

         <div className="p-4">
            <h1 className="text-2xl text-dark">Accessories:</h1>
            <div className="p-2">
               {categories[1].content.map((content, key) => (
                  <p key={key + key}>{content} - 2 to 7 business days</p>
               ))}
            </div>
         </div>

         <div className="p-4">
            <h1 className="text-2xl text-dark">Home & Living:</h1>
            <div className="p-2">
               {categories[2].content.map((content, key) => (
                  <p key={key + key}>{content} - 2 to 10 business days</p>
               ))}
            </div>
         </div>
      </div>
   );
}
