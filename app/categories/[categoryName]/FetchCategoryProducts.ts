import { endpoints } from "@/endpoints/endpoints";

export default async function FetchCategoryProducts({ setProducts, categoryName }: any) {
   const fetchProducts = await fetch(endpoints.url + endpoints.grabCategoryProducts(categoryName), {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   const grabProducts = await fetchProducts.json();

   setProducts(grabProducts);
}
