"use client";
import {
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle
} from "@/components/ui/alert-dialog";
import FetchDeleteReview from "../FetchDeleteReview";
import { useGlobalStore } from "@/zustand/globalstore";

type DeleteReviewModalPropType = {
   id: number;
};

export default function DeleteReviewModal({ id }: DeleteReviewModalPropType) {
   const globalStore = useGlobalStore();
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;

   const deleteReview = () => {
      FetchDeleteReview({ userId, id, jwtToken });
   };

   return (
      <AlertDialogContent>
         <AlertDialogHeader>
            <AlertDialogTitle className=" text-light text-center">Delete review</AlertDialogTitle>
            <AlertDialogDescription className=" text-center">Are you sure you want to delete your review?</AlertDialogDescription>
         </AlertDialogHeader>
         <AlertDialogFooter>
            <AlertDialogCancel className=" hover:bg-button-focused hover:text-white">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={deleteReview} className="bg-button-background hover:bg-button-focused ">
               Continue
            </AlertDialogAction>
         </AlertDialogFooter>
      </AlertDialogContent>
   );
}
