export default function Title({ product }: any) {
   return (
      <div>
         <h1 className="text-3xl text-dark m-plus-rounded-1c-regular text-center lg:text-start">{product.title}</h1>
      </div>
   );
}
