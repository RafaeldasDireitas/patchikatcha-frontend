import Image from "next/image";
import star from "@/public/star.png";
import { BiSolidCheckCircle, BiUser } from "react-icons/bi";

export default function ReviewCard({ username, title, createdAt, comment, rating }: any) {
   return (
      <>
         <div className="flex flex-col w-full bg-body-background p-4 rounded-xl">
            <div className="flex flex-row">
               <BiUser size={25} className="mr-2" />
               <h1>{username}</h1>
               <BiSolidCheckCircle className="mx-2" size={25} color="brown" />
               <h2 className="px-2">{createdAt}</h2>
            </div>
            <div className="flex flex-row mx-2">
               {[...Array(rating)].map((_, key) => (
                  <Image key={key} src={star} width={30} height={30} alt="Star"></Image>
               ))}
            </div>
            <h1 className="px-2 font-bold">{title}</h1>
            <p className="mx-4" dangerouslySetInnerHTML={{ __html: comment }}></p>
         </div>
      </>
   );
}
