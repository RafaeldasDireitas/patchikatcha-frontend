"use client";
import Link from "next/link";

export default function Content({ findContent }: any) {
   return (
      <div>
         <Link href={`/categories/${findContent?.title}`}>
            <h1 className="text-xl text-dark hover:underline hover:cursor-pointer">{findContent?.title}</h1>
         </Link>
         {findContent?.content.map((content: any, key: number) => (
            <Link href={{ pathname: `/categories/${content}` }} key={key + key}>
               <h2 className="text-base hover:text-light hover:underline hover:cursor-pointer">{content}</h2>
            </Link>
         ))}
      </div>
   );
}
