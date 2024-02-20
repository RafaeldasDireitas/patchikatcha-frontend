export default async function NewProducts({ setNewProducts }: any) {
   try {
      const newProducts = await fetch("https://localhost:7065/api/Product/new-products");

      const data = await newProducts.json();
      console.log(data);
      setNewProducts(data);
   } catch (error) {
      console.error(error);
   }
}
