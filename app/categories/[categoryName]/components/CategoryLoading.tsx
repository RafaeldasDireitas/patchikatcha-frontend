import Breadcrumb from "@/app/components/Breadcrumb";

export default function CategoryLoading({ categoryName }: any) {
   const links = ["Home", "Categories", `${categoryName}`];

   return (
      <>
         <div className="flex flex-row p-12">
            <div className="flex flex-col w-1/3 my-8">
               <Breadcrumb links={links} />
               <h1 className="quicksand-bold text-2xl text-light">{categoryName}</h1>
            </div>
         </div>
      </>
   );
}
