export type PropsType = {
   heightInPx: number;
   widthInPx?: number;
};

export default function Skeleton(props: Readonly<PropsType>) {
   return (
      <div
         className="rounded-xl my-1 bg-gray-300 w-full animate-pulse duration-200 flex"
         style={{ height: `${props.heightInPx}px`, width: `${props.widthInPx}px` }}
      />
   );
}
