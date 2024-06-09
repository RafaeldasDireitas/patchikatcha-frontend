import Link from "next/link";
import Image from "next/image";
import card from "@/public/card-image-test.png";
import { categories } from "@/data/CategoriesObject";
import floatingDuck from "@/public/floating-duck.jpg";
import cuteDuck from "@/public/cuteDuckBg.png";

export default function Categories() {
   const images = [
      {
         url: cuteDuck.src
      },
      {
         url: cuteDuck.src
      },
      {
         url: cuteDuck.src
      }
   ];

   return (
      <div className="lg:p-4 p-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4 lg:gap-0">
         {categories.map((category, key) => (
            <Link href={`/categories/${category.title}`} key={key + key}>
               <div className="lg:hover:scale-105 hover:cursor-pointer duration-200 lg:w-96 h-auto">
                  <div className="relative items-end">
                     <Image className="rounded-xl" src={images[key].url} width={400} height={400} alt="Category card"></Image>
                     <div className="absolute bottom-0 left-0 bg-body-background shadow-md rounded-bl-3xl rounded-tr-3xl">
                        <h1 className="m-4 text-2xl text-dark">{category.title}</h1>
                     </div>
                  </div>
               </div>
            </Link>
         ))}
      </div>
   );
}
