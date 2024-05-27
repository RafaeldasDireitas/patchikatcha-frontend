import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import FetchEmailToken from "../FetchEmailToken";

export default function SendEmailModal({ setUserEmail, setEmailToken, setIsButtonDisabled, userEmail, isButtonDisabled }: any) {
   const emailHandler = (e: any) => {
      const userEmail = e.target.value;
      setUserEmail(userEmail);
   };

   const handleSendVerificationEmail = async () => {
      setIsButtonDisabled(true);
      FetchEmailToken({ email: userEmail, setEmailToken });
   };

   return (
      <DialogContent className="sm:max-w-[425px]">
         <DialogHeader>
            <DialogTitle className="text-light">Send email</DialogTitle>
            <DialogDescription className="">If you didn't receive your email, type it here again, and we'll send you another!</DialogDescription>
         </DialogHeader>
         <input
            type="text"
            placeholder="example@email.com"
            className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] w-full bg-white quicksand-light"
            id="email"
            onChange={emailHandler}
            value={userEmail}
         />

         <DialogFooter className="flex mx-auto">
            <DialogClose>
               <button
                  className="btn btn-circle w-60 bg-button-background disabled:text-black disabled:bg-gray-300 hover:bg-button-focused text-white border-none"
                  onClick={handleSendVerificationEmail}
                  disabled={isButtonDisabled}
               >
                  Submit
               </button>
            </DialogClose>
         </DialogFooter>
      </DialogContent>
   );
}
