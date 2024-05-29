import Skeleton from "@/app/components/Skeleton";

export default function ProductLoading() {
   return (
      <div className="lg:m-12 bg-white rounded-xl">
         <div className="flex justify-center lg:justify-start">
            <Skeleton widthInPx={248} heightInPx={36} />
         </div>
         <div className="flex lg:flex-row flex-col gap-4 lg:p-12">
            <Skeleton widthInPx={600} heightInPx={400} />

            <div className="flex flex-col">
               <div className="flex flex-row justify-center lg:justify-start gap-4">
                  <Skeleton widthInPx={250.05} heightInPx={36} />
               </div>
               <Skeleton widthInPx={66.66} heightInPx={28} />

               {/* <Description product={product} /> */}

               <Skeleton widthInPx={384} heightInPx={76} />

               <Skeleton widthInPx={384} heightInPx={76} />

               <Skeleton widthInPx={384} heightInPx={48} />

               <Skeleton widthInPx={384} heightInPx={48} />
            </div>
         </div>

         <div className="lg:m-12 p-2 gap-6 flex lg:flex-row flex-col">
            <Skeleton widthInPx={768} heightInPx={336} />
            <Skeleton widthInPx={380} heightInPx={388} />
         </div>
      </div>
   );
}
