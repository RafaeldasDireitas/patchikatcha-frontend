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
      <div className="flex flex-row flex-wrap justify-center items-center gap-12">
         {categories.map((category, key) => (
            <Link href={`/categories/${category.title}`} key={key + key}>
               <div className="lg:hover:scale-105 hover:cursor-pointer duration-200 w-96 h-96">
                  <div className="relative items-end">
                     <Image className="rounded-xl" src={images[key].url} width={400} height={400} alt="Category card"></Image>
                     <div className="absolute bottom-0 left-0">
                        <h1 className="m-4 text-4xl text-white">{category.title}</h1>
                     </div>
                  </div>
               </div>
            </Link>
         ))}
      </div>
   );
}
