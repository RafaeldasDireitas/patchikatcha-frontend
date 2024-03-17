import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchChangePasswordEmail({ userEmail }: any) {
   const fetchToken = await fetch(endpoints.url + endpoints.grabPasswordToken(userEmail));

   const passwordToken = await fetchToken.text();

   const passwordData = {
      userEmail: userEmail as string,
      passwordToken: passwordToken
   };

   if (fetchToken.ok) {
      const sendTokenToAPI = await fetch("/api/send-change-password", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(passwordData)
      });

      toast.success("Email sent.");

      setTimeout(() => {
         window.location.href = "/auth";
      }, 5000);
   } else {
      toast.error("There was an error, try again.");
   }
}
