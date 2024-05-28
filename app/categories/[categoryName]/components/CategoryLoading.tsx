import Breadcrumb from "@/app/components/Breadcrumb";
import Skeleton from "@/app/components/Skeleton";
import Link from "next/link";
import { categories } from "@/data/CategoriesObject";

type CategoryLoadingProps = {
   categoryName: string;
};

export default function CategoryLoading({ categoryName }: Readonly<CategoryLoadingProps>) {
   const links = ["Home", "Categories", `${categoryName}`];

   const findContent = categories.find((category) => category.title === categoryName);

   return (
      <div>
         <div className="flex w-full bg-body-background justify-center items-center h-[300px]">
            <h1 className="text-6xl text-dark">{categoryName}</h1>
         </div>
         <div className="flex lg:flex-row flex-col p-12 gap-4">
            <div className="flex flex-col lg:w-1/3 lg:text-start text-center lg:justify-start justify-center gap-4">
               <Breadcrumb links={links} />
               <h1 className="text-2xl text-light">{categoryName}</h1>
               <div>
                  <h1 className="text-xl text-dark">{categoryName}</h1>
                  {findContent?.content.map((content, key) => (
                     <Link href={{ pathname: `/categories/${content}` }} key={key + key}>
                        <h2 className="text-base hover:text-light hover:underline hover:cursor-pointer">{content}</h2>
                     </Link>
                  ))}
               </div>
               <div>
                  <h1 className="text-xl text-dark">Filter by</h1>
                  <div className="flex justify-center lg:justify-start">
                     <Skeleton widthInPx={160} heightInPx={24} />
                  </div>
               </div>
            </div>

            <div className="flex flex-col lg:w-2/3">
               <div className="flex lg:justify-end justify-center">
                  <Skeleton widthInPx={288} heightInPx={48} />
               </div>

               <div className="lg:gap-4 gap-6 grid lg:grid-cols-3 grid-cols-1 my-4">
                  <Skeleton widthInPx={275} heightInPx={275} />
                  <Skeleton widthInPx={275} heightInPx={275} />
                  <Skeleton widthInPx={275} heightInPx={275} />
                  <Skeleton widthInPx={275} heightInPx={275} />
                  <Skeleton widthInPx={275} heightInPx={275} />
                  <Skeleton widthInPx={275} heightInPx={275} />
               </div>
            </div>
         </div>
      </div>
   );
}
