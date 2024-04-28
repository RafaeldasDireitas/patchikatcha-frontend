export type PropsType = {
   heightInPx: number;
   widthInPx?: number;
};

export default function Skeleton(props: Readonly<PropsType>) {
   return <div className="rounded bg-button-background w-full animate-pulse flex" style={{ height: `${props.heightInPx}px`, width: `${props.widthInPx}px` }} />;
}
