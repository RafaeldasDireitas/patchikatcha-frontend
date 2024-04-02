export default function Description({ product }: any) {
   const truncatedDescription = product.description.slice(0, 150);

   return <h2 className="my-2 josefin-sans text-center lg:text-start" dangerouslySetInnerHTML={{ __html: truncatedDescription + "..." }}></h2>;
}
