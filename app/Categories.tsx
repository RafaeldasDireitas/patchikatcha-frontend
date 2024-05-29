import Link from "next/link";
import bear from "@/public/category_bear.png";
import frog from "@/public/category_frog.png";
import ribbon from "@/public/category_ribbon.png";
import Image, { StaticImageData } from "next/image";

type CategoriesType = {
   name: string;
   icon: StaticImageData;
   content?: string[];
};

export default function Categories() {
   const categories: CategoriesType[] = [
      {
         name: "New",
         icon: bear
      },
      {
         name: "Clothing",
         icon: frog,
         content: ["Hoodies", "T-shirts"]
      },
      {
         name: "Accessories",
         icon: ribbon
      }
   ];

   return (
      <>
         <div className="flex justify-center">
            <h1 className="text-3xl lg:text-start text-center text-dark">Our Categories:</h1>
         </div>
         <div className="flex lg:flex-row flex-col gap-6 justify-center items-center my-8">
            {categories.map((category, key) => {
               return (
                  <div key={key + key}>
                     {category.content ? (
                        <div className="btn flex flex-col m-1 hover:cursor-default w-60 h-56 opacity-100 group bg-button-light-focus hover:bg-button-background rounded-xl text-black hover:text-white border-none hover:scale-110 duration-200">
                           <div className="absolute text-white lg:opacity-0 opacity-100 group-hover:opacity-100 group-hover:z-50">
                              <ul>
                                 {category.content.map((content, key) => {
                                    return (
                                       <Link key={key + key} href={{ pathname: `/categories/${content.toLowerCase()}` }}>
                                          <li className="py-1 mx-2 hover:underline hover:cursor-pointer hover:scale-105 duration-200">{content}</li>
                                       </Link>
                                    );
                                 })}
                              </ul>
                           </div>
                           <Image
                              className="w-20 h-20 lg:group-hover:opacity-0 lg:opacity-100 opacity-0"
                              src={category.icon}
                              width={80}
                              height={80}
                              alt="No image found"
                           />
                           <h1 className="group-hover:opacity-0 lg:opacity-100 opacity-0">{category.name}</h1>
                        </div>
                     ) : (
                        <div className="btn flex flex-col m-1 w-60 h-56 bg-button-light-focus hover:bg-button-background rounded-xl text-black hover:text-white border-none hover:scale-110 duration-200">
                           <Image className="w-20 h-20" src={category.icon} width={80} height={80} alt="No image found" />
                           <h1>{category.name}</h1>
                        </div>
                     )}
                  </div>
               );
            })}
         </div>
      </>
   );
}
