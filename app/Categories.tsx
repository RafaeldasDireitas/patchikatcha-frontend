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
            <h1 className="text-3xl lg:text-start text-center text-dark font-bold yeseva-one-regular">Our Categories:</h1>
         </div>
         <div className="flex lg:flex-row flex-col gap-6 justify-center items-center my-8">
            {categories.map((category, key) => {
               return (
                  <>
                     {category.content ? (
                        <div key={key} className="dropdown dropdown-hover duration-200">
                           <div
                              tabIndex={0}
                              role="button"
                              className="btn flex flex-col m-1 w-60 h-56 bg-button-light-focus hover:bg-button-background rounded-xl text-black hover:text-white border-none hover:scale-110 duration-200"
                           >
                              <Image className="w-20 h-20" src={category.icon} width={80} height={80} alt="No image found"></Image>
                              {category.name}
                           </div>
                           <ul tabIndex={0} className="dropdown-content z-[1] menu my-1 shadow bg-white rounded-lg w-44">
                              {category.content.map((content, key) => {
                                 return (
                                    <Link key={key} href={{ pathname: `/categories/${content.toLowerCase()}` }}>
                                       <li className="py-1 mx-2 hover:underline hover:cursor-pointer hover:scale-105 duration-200">{content}</li>
                                    </Link>
                                 );
                              })}
                           </ul>
                        </div>
                     ) : (
                        <div className="btn flex flex-col m-1 w-60 h-56 bg-button-light-focus hover:bg-button-background rounded-xl text-black hover:text-white border-none hover:scale-110 duration-200">
                           <Image className="w-20 h-20" src={category.icon} width={80} height={80} alt="No image found"></Image>
                           {category.name}
                        </div>
                     )}
                  </>
               );
            })}
         </div>
      </>
   );
}
