import Image from "next/image";
import star from "@/public/star.png";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({ username, title, createdAt, comment, rating }: any) {
   return (
      <div className="flex flex-col w-full bg-body-background p-4 rounded-xl">
         <div className="flex flex-row">
            {[...Array(rating)].map((_, key) => (
               // <Image key={key + key} src={star} width={30} height={30} alt="Star" />
               <FaStar key={key + key} size={25} className="text-light" />
            ))}
         </div>
         <div className="flex flex-row items-center">
            <h1 className="quicksand-semibold my-1">{username}</h1>
            <BiSolidCheckCircle className="mx-2 text-light" size={25} />
            <h2 className="px-2 text-end w-full">{createdAt}</h2>
         </div>
         <h1 className="quicksand-semibold">{title}</h1>
         <p className="quicksand-medium" dangerouslySetInnerHTML={{ __html: comment }}></p>
      </div>
   );
}
