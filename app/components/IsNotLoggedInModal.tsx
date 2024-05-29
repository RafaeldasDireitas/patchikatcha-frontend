import {
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export default function IsNotLoggedInModal() {
   return (
      <AlertDialogContent>
         <AlertDialogHeader>
            <AlertDialogTitle className="text-light">Authentication required</AlertDialogTitle>
            <AlertDialogDescription>To proceed to this page, please authenticate your account.</AlertDialogDescription>
         </AlertDialogHeader>
         <AlertDialogFooter>
            <AlertDialogCancel className="bg-transparent hover:bg-button-focused text-black hover:text-white ">Go back</AlertDialogCancel>
            <Link href={"/auth"} className="flex justify-center">
               <AlertDialogAction className="bg-button-background w-full hover:bg-button-focused text-white ">Log In</AlertDialogAction>
            </Link>
         </AlertDialogFooter>
      </AlertDialogContent>
   );
}
