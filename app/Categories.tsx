import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/CategoriesObject";
import categoryClothing from "@/public/category-clothing.png";
import categoryAccessories from "@/public/category-accessories.png";
import categoryHome from "@/public/categories-home.png";

export default function Categories() {
   const images = [
      {
         url: categoryClothing.src
      },
      {
         url: categoryAccessories.src
      },
      {
         url: categoryHome.src
      }
   ];

   return (
      <div className="lg:p-4 p-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4 lg:gap-0">
         {categories.map((category, key) => (
            <Link href={`/categories/${category.title}`} key={key + key}>
               <div className="lg:hover:scale-105 hover:cursor-pointer duration-200 lg:w-96 h-auto">
                  <div className="relative items-end">
                     <Image className="rounded-2xl" src={images[key].url} width={400} height={400} alt="Category card"></Image>
                     <div className="absolute bottom-0 left-0 bg-body-background shadow-md rounded-bl-2xl rounded-tr-2xl">
                        <h1 className="m-4 text-2xl text-dark">{category.title}</h1>
                     </div>
                  </div>
               </div>
            </Link>
         ))}
      </div>
   );
}
