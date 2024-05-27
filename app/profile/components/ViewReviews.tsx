import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ReviewType } from "@/types/ReviewType";
import { BiSolidCheckCircle } from "react-icons/bi";
import { FaRegStar, FaRegTrashAlt, FaStar } from "react-icons/fa";
import DeleteReviewModal from "./DeleteReviewModal";
import Link from "next/link";
import Image from "next/image";

type ViewReviewsPropType = {
   userReviews: ReviewType[] | undefined;
};

export default function ViewReviews({ userReviews }: ViewReviewsPropType) {
   return (
      <div className="p-12 lg:my-8 quicksand flex flex-col gap-y-4">
         <h1 className="text-2xl text-dark  lg:text-start text-center mb-2">View reviews:</h1>
         {userReviews?.map((userReview) => {
            const stars = userReview.rating;
            const emptyStars = 5 - userReview.rating;

            return (
               <>
                  <div className="flex lg:flex-row flex-col">
                     <div className="flex items-center justify-center">
                        <Image className="rounded-l-xl" src={userReview.productImage} width={150} height={150} alt="No image found"></Image>
                     </div>

                     <div className="flex flex-col w-full bg-body-background p-4 rounded-xl">
                        <div className="flex flex-row items-center">
                           <h1 className=" my-1">{userReview.username}</h1>
                           <BiSolidCheckCircle className="mx-2 text-light" size={25} />
                           <AlertDialog>
                              <AlertDialogTrigger asChild>
                                 <FaRegTrashAlt className="text-light hover:scale-105 hover:cursor-pointer duration-200" size={20}></FaRegTrashAlt>
                              </AlertDialogTrigger>
                              <DeleteReviewModal id={userReview.id} />
                           </AlertDialog>
                           <h2 className="px-2 text-end w-full">{new Date(userReview.createdAt).toLocaleDateString()}</h2>
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
                           <h1 className="">{userReview.title}</h1>
                           <p className="" dangerouslySetInnerHTML={{ __html: userReview.comment }}></p>
                        </div>
                     </div>
                  </div>
               </>
            );
         })}
      </div>
   );
}
