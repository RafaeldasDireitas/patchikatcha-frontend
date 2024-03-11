export default function Description({ product }: any) {
   return <h2 className="my-2 josefin-sans" dangerouslySetInnerHTML={{ __html: product.description }}></h2>;
}
