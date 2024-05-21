import Image from "next/image";
import star from "@/public/star.png";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function ReviewCard({ username, title, createdAt, comment, rating }: any) {
   const stars = rating;
   const emptyStars = 5 - rating;

   return (
      <div className="flex flex-col w-full bg-body-background p-4 rounded-xl">
         <div className="flex flex-row items-center">
            <h1 className="quicksand-semibold my-1">{username}</h1>
            <BiSolidCheckCircle className="mx-2 text-light" size={25} />
            <h2 className="px-2 text-end w-full">{createdAt}</h2>
         </div>
         <div className="flex flex-row">
            {[...Array(stars)].map((_, key) => (
               <FaStar key={key + key} size={25} className="text-light" />
            ))}
            {[...Array(emptyStars)].map((_, key) => (
               <FaRegStar key={key + key} size={25} className="text-light" />
            ))}
         </div>
         <div className="my-1">
            <h1 className="quicksand-semibold">{title}</h1>
            <p className="quicksand-medium" dangerouslySetInnerHTML={{ __html: comment }}></p>
         </div>
      </div>
   );
}
