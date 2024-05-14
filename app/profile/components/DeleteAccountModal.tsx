import {
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle
} from "@/components/ui/alert-dialog";

export default function DeleteAccountModal() {
   return (
      <AlertDialogContent>
         <AlertDialogHeader>
            <AlertDialogTitle className="text-light quicksand-bold">Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className="quicksand-medium">
               This action cannot be undone. This will permanently delete your account and remove your data from our servers!
            </AlertDialogDescription>
         </AlertDialogHeader>
         <AlertDialogFooter>
            <AlertDialogCancel className="quicksand-semibold hover:bg-button-focused hover:text-white">Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-800 hover:bg-button-focused quicksand-semibold">Delete</AlertDialogAction>
         </AlertDialogFooter>
      </AlertDialogContent>
   );
}
