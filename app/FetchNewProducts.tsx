import { endpoints } from "@/endpoints/endpoints";

export default async function NewProducts({ setNewProducts }: any) {
   try {
      const newProducts = await fetch(endpoints.url + endpoints.newProducts);

      const data = await newProducts.json();
      setNewProducts(data);
   } catch (error) {
      console.error(error);
   }
}
