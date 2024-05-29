export default function Title({ product }: any) {
   return (
      <div className="mt-2 lg:mt-0">
         <h1 className="text-3xl text-dark  text-center lg:text-start">{product.title}</h1>
      </div>
   );
}
