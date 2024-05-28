type CategoryNamePropType = {
   categoryName: string;
};

export default function CategoryNameDisplay({ categoryName }: CategoryNamePropType) {
   return (
      <div className="flex w-full bg-body-background justify-center items-center h-[300px]">
         <h1 className="text-6xl text-dark">{categoryName}</h1>
      </div>
   );
}
