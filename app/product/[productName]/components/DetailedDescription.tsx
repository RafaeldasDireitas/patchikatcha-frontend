export default function DetailedDescription({ product }: any) {
   return (
      <div>
         <h1 className="text-3xl text-light quicksand-semibold">Detailed Description:</h1>
         <h2 className="my-2 josefin-sans max-w-screen-md text-justify quicksand-medium" dangerouslySetInnerHTML={{ __html: product.description }}></h2>
      </div>
   );
}
