import { toast } from "sonner";

export async function FetchVerifyUserRole({ jwtToken, userEmail, setIsAuthorized }: any) {
   const verify = await fetch(`https://localhost:7065/api/Auth/verify-user-role?email=${userEmail}`, {
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
