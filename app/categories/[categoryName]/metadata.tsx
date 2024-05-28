import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
   const categoryName = params.categoryName;
   const decodedCategoryName = categoryName && decodeURIComponent(categoryName);

   return {
      title: decodedCategoryName,
      description: "Check all the products in our categories!"
   };
}
