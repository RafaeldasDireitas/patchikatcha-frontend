export default function DetailedDescription({ product }: any) {
   return (
      <div>
         <h1 className="text-3xl lg:text-start text-center text-light quicksand-semibold lg:mt-0 mt-4">Detailed Description:</h1>
         <h2 className="my-2 lg:p-0 p-4 max-w-screen-md text-justify quicksand-medium" dangerouslySetInnerHTML={{ __html: product.description }}></h2>
      </div>
   );
}
