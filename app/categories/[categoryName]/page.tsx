"use client";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function CategoryName({ params }: any) {
   const categoryName = params.categoryName;
   console.log(categoryName);

   const links = ["Home", "Categories", `${categoryName}`];

   return (
      <>
         <Breadcrumb links={links} />
      </>
   );
}
