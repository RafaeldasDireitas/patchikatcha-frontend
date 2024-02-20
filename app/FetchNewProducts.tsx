export default async function NewProducts({ setNewProducts }: any) {
   try {
      const newProducts = await fetch("/api/new-products");

      const data = await newProducts.json();
      console.log(data);
      setNewProducts(data);
   } catch (error) {
      console.error(error);
   }
}
