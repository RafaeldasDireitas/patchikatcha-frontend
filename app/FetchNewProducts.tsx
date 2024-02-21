import { endpoints } from "@/endpoints/endpoints";

export default async function NewProducts({ setNewProducts }: any) {
   try {
      const newProducts = await fetch(endpoints.url + endpoints.newProducts);

      const data = await newProducts.json();
      console.log(data);
      setNewProducts(data);
   } catch (error) {
      console.error(error);
   }
}
