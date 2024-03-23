export default async function FetchAllProducts({ limit, pageNumber, setMenProducts }: any) {
   const grabProducts = await fetch(`https://localhost:7065/api/Product/grab-all-products?limit=${limit}&pageNumber=${pageNumber}`, {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   const productsData = await grabProducts.json();

   setMenProducts(productsData);
}
