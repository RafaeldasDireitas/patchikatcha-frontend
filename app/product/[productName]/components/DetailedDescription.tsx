export default function DetailedDescription({ product }: any) {
   return (
      <div className="lg:w-2/3 w-full mt-4 lg:mt-0">
         <h1 className="text-3xl lg:text-start text-center text-dark quicksand-bold lg:mt-0 mt-4">Detailed Description:</h1>
         <h2 className="my-2 lg:p-0 p-4 text-justify quicksand-medium" dangerouslySetInnerHTML={{ __html: product.description }}></h2>
      </div>
   );
}
