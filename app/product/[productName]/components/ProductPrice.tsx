export default function ProductPrice({ formattedPrice }: any) {
   return (
      <>
         <div className="flex lg:justify-start justify-center my-2 lg:my-1">
            <h1 className="text-xl text-dark font-bold">{formattedPrice}</h1>
         </div>
      </>
   );
}
