import Skeleton from "@/app/components/Skeleton";

export default function ProductLoading() {
   return (
      <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:m-12 gap-2">
         <div className="flex lg:p-12 lg:py-0 py-12 px-2 items-center">
            <Skeleton widthInPx={700} heightInPx={300} />
         </div>
         <div className="flex flex-col lg:py-12 items-center lg:items-start">
            <Skeleton widthInPx={300} heightInPx={50} />
            <div className="mt-2">
               <Skeleton widthInPx={100} heightInPx={50} />
            </div>
            <div className="mt-2">
               <Skeleton widthInPx={250} heightInPx={50} />
            </div>
            <div className="mt-2">
               <Skeleton widthInPx={250} heightInPx={50} />
            </div>
            <div className="mt-2">
               <Skeleton widthInPx={300} heightInPx={50} />
            </div>
            <div className="my-2">
               <Skeleton widthInPx={300} heightInPx={50} />
            </div>
         </div>
      </div>
   );
}
