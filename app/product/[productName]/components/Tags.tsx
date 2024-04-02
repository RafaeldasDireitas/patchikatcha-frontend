export default function Tags({ product }: any) {
   return (
      <>
         <div className="flex flex-row flex-wrap my-2 justify-center lg:justify-start">
            {product.tags.map((tag: any, key: number) => {
               return (
                  <button className="btn mx-1 my-1 josefin-sans bg-button-background border-none text-white" key={key}>
                     {tag}
                  </button>
               );
            })}
         </div>
      </>
   );
}
