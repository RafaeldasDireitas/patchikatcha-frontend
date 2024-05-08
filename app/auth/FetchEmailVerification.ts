import { toast } from "sonner";

type FetchEmailVerificationPropType = {
   emailToken: string;
   email: string;
};

export default async function FetchEmailVerification(props: FetchEmailVerificationPropType) {
   const send = await fetch("/api/send-email-verification", {
      method: "POST",
      headers: {
         "Content-type": "application/json"
      },
      body: JSON.stringify(props)
   });

   if (send.ok) {
      toast.success("Email was sent successfuly.");
      return;
   }

   toast.error("There was a problem, try again.");
}
