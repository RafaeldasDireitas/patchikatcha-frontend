import Link from "next/link";

type CategoriesType = {
   name: string;
   icon: string;
   content?: string[];
};

export default function Categories() {
   const categories: CategoriesType[] = [
      {
         name: "New",
         icon: ""
      },
      {
         name: "Clothing",
         icon: "",
         content: ["Hoodies", "T-shirts"]
      },
      {
         name: "Accessories",
         icon: ""
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
                              className="btn m-1 w-40 h-36 bg-button-light-focus hover:bg-button-background rounded-xl text-black hover:text-white border-none hover:scale-110 duration-200"
                           >
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
                        <button className="btn m-1 w-40 h-36 bg-button-light-focus hover:bg-button-background rounded-xl text-black hover:text-white border-none hover:scale-110 duration-200">
                           {category.name}
                        </button>
                     )}
                  </>
               );
            })}
         </div>
      </>
   );
}
