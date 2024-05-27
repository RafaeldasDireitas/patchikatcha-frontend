import Breadcrumb from "@/app/components/Breadcrumb";
import Skeleton from "@/app/components/Skeleton";

type CategoryLoadingProps = {
   categoryName: string;
   categoryTitle: string | null;
};

export default function CategoryLoading({ categoryName, categoryTitle }: Readonly<CategoryLoadingProps>) {
   const links = ["Home", "Categories", `${categoryName}`];

   return (
      <div className="flex lg:flex-row flex-col p-12">
         <div className="flex flex-col lg:w-1/3 lg:text-start text-center lg:justify-start justify-center">
            <Breadcrumb links={links} />
            <h1 className="text-2xl text-light">{categoryName}</h1>
            <div className="lg:mt-20 mt-10">
               <h1 className="text-xl text-dark">{categoryTitle}</h1>
               <Skeleton widthInPx={160} heightInPx={24} />
            </div>
            <div className="mt-10">
               <h1 className="text-xl text-dark">Filter by</h1>
               <Skeleton widthInPx={160} heightInPx={24} />
               <Skeleton widthInPx={160} heightInPx={24} />
            </div>
         </div>

         <div className="flex flex-col lg:w-2/3">
            <div className="flex lg:justify-end justify-center">
               <Skeleton widthInPx={288} heightInPx={48} />
            </div>

            <div className="lg:gap-4 gap-6 grid lg:grid-cols-3 grid-cols-1 my-8">
               <Skeleton widthInPx={275} heightInPx={275} />
               <Skeleton widthInPx={275} heightInPx={275} />
               <Skeleton widthInPx={275} heightInPx={275} />
               <Skeleton widthInPx={275} heightInPx={275} />
               <Skeleton widthInPx={275} heightInPx={275} />
               <Skeleton widthInPx={275} heightInPx={275} />
            </div>
         </div>
      </div>
   );
}
