export default function Title({ product }: any) {
   return (
      <>
         <h1 className="text-3xl text-light yeseva-one-regular text-center lg:text-start">{product.title}</h1>
      </>
   );
}
