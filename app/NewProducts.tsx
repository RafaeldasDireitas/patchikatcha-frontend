import ProductCard from "./components/ProductCard";

export default function NewProducts() {
   return (
      <div className="lg:p-12 py-8 flex flex-col items-center">
         <h1 className="text-3xl lg:text-start text-center text-light">New Products</h1>
         <p className="py-4 lg:text-start text-center">Here is just a little description that is a little bit bigger than normal body copy.</p>
         <div className="lg:p-12 grid lg:grid-cols-3 grid-cols-1 gap-8">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
         </div>
      </div>
   );
}
