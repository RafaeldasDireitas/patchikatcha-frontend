import Link from "next/link";
import Image from "next/image";
import card from "@/public/card-image-test.png";
import { categories } from "@/data/CategoriesObject";
import floatingDuck from "@/public/floating-duck.jpg";

export default function Categories() {
   const images = [
      {
         url: floatingDuck.src
      },
      {
         url: card.src
      },
      {
         url: floatingDuck.src
      }
   ];

   return (
      <div className="grid grid-cols-3 gap-4 p-12">
         {categories.map((category, key) => (
            <Link href={`/categories/${category.title}`}>
               <div
                  className="flex items-end lg:hover:scale-105 hover:cursor-pointer duration-200 w-96 h-96 bg-center bg-cover rounded-badge"
                  style={{ backgroundImage: `url(${images[key].url})` }}
               >
                  <h1 className="m-4 align-bottom text-4xl text-white">{category.title}</h1>
               </div>
            </Link>
         ))}
      </div>
   );
}
