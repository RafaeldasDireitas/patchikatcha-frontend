import Image from "next/image";
import star from "@/public/star.png";

export default function Rating({ checkRating, isChecked }: any) {
   return (
      <div className="flex flex-col my-2">
         <h1 className="text-3xl text-dark josefin-sans">Rating:</h1>
         <div className="flex flex-row my-2 gap-4">
            <Image
               src={star}
               width={100}
               height={100}
               onClick={() => checkRating(1)}
               className={
                  isChecked.isChecked1
                     ? "opacity-100 hover:cursor-pointer hover:scale-110 duration-200"
                     : "opacity-50 hover:cursor-pointer hover:scale-110 duration-200"
               }
               alt="No star found"
            ></Image>
            <Image
               src={star}
               width={100}
               height={100}
               onClick={() => checkRating(2)}
               className={
                  isChecked.isChecked2
                     ? "opacity-100 hover:cursor-pointer hover:scale-110 duration-200"
                     : "opacity-50 hover:cursor-pointer hover:scale-110 duration-200"
               }
               alt="No star found"
            ></Image>
            <Image
               src={star}
               width={100}
               height={100}
               onClick={() => checkRating(3)}
               className={
                  isChecked.isChecked3
                     ? "opacity-100 hover:cursor-pointer hover:scale-110 duration-200"
                     : "opacity-50 hover:cursor-pointer hover:scale-110 duration-200"
               }
               alt="No star found"
            ></Image>
            <Image
               src={star}
               width={100}
               height={100}
               onClick={() => checkRating(4)}
               className={
                  isChecked.isChecked4
                     ? "opacity-100 hover:cursor-pointer hover:scale-110 duration-200"
                     : "opacity-50 hover:cursor-pointer hover:scale-110 duration-200"
               }
               alt="No star found"
            ></Image>
            <Image
               src={star}
               width={100}
               height={100}
               onClick={() => checkRating(5)}
               className={
                  isChecked.isChecked5
                     ? "opacity-100 hover:cursor-pointer hover:scale-110 duration-200"
                     : "opacity-50 hover:cursor-pointer hover:scale-110 duration-200"
               }
               alt="No star found"
            ></Image>
         </div>
      </div>
   );
}
