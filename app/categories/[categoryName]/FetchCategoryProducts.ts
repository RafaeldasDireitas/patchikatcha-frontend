import { endpoints } from "@/endpoints/endpoints";
import { ProductInDbType } from "@/types/ProductInDbType";

type grabProductsType = {
   categoryProducts: ProductInDbType[];
   totalPages: number;
};

export default async function FetchCategoryProducts({ setProducts, categoryName, page, setTotalPages }: any) {
   const fetchProducts = await fetch(endpoints.url + endpoints.grabCategoryProducts(categoryName, page), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   const grabProducts: grabProductsType = await fetchProducts.json();

   setProducts(grabProducts.categoryProducts);
   setTotalPages(grabProducts.totalPages);
}
