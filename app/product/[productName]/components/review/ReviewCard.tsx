import Image from "next/image";
import star from "@/public/star.png";
import { BiSolidCheckCircle } from "react-icons/bi";

export default function ReviewCard({ username, title, createdAt, comment, rating }: any) {
   return (
      <>
         <div className="flex flex-col w-full bg-body-background p-4 rounded-xl">
            <div className="flex flex-row">
               {[...Array(rating)].map((_, key) => (
                  <Image key={key} src={star} width={30} height={30} alt="Star" />
               ))}
            </div>
            <div className="flex flex-row">
               <h1 className="quicksand-semibold my-1">{username}</h1>
               <BiSolidCheckCircle className="mx-2 text-light" size={25} />
               <h2 className="px-2 text-end w-full">{createdAt}</h2>
            </div>
            <h1 className="px-2 quicksand-semibold">{title}</h1>
            <p className="px-2 quicksand-medium" dangerouslySetInnerHTML={{ __html: comment }}></p>
         </div>
      </>
   );
}
