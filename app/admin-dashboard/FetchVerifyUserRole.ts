import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export async function FetchVerifyUserRole({ jwtToken, userEmail, setIsAuthorized }: any) {
   const verify = await fetch(endpoints.url + endpoints.verifyRole(userEmail), {
      method: "GET",
      headers: {
         Authorization: `Bearer ${jwtToken}`
      }
   });

   if (verify.ok) {
      setIsAuthorized(true);
      toast.success("Logged in as admin.");
   }
}
