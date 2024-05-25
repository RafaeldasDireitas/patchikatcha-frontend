import { endpoints } from "@/endpoints/endpoints";
import { redirection } from "@/endpoints/redirection";
import { toast } from "sonner";

type SucceededType = {
   errors: string[];
   succeeded: false;
};

export default async function FetchChangePassword({ changePasswordData }: any) {
   const sendPasswordData = await fetch(endpoints.url + endpoints.changePassword, {
      method: "PUT",
      headers: {
         "Content-type": "application/json"
      },
      body: JSON.stringify(changePasswordData)
   });

   const responseData: SucceededType = await sendPasswordData.json();

   if (responseData.succeeded === false) {
      toast.error("There was an error, try again.");
   } else {
      toast.success("Congrats, your password has been changed!");

      setTimeout(() => {
         window.location.href = redirection.auth;
      }, 5000);
   }
}
