import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchDeleteAccount({ userId, password, jwtToken, setJwtToken, setUserEmail, setUserId, setIsAuthenticated }: any) {
   const deleteAccount = await fetch(endpoints.url + endpoints.deleteAccount(userId, password), {
      method: "DELETE",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      }
   });

   if (deleteAccount.ok) {
      setJwtToken("");
      setUserEmail("");
      setUserId("");
      setIsAuthenticated(false);

      window.location.href = "/";
      return;
   }

   const deleteAccountJson = await deleteAccount.json();

   toast.error(deleteAccountJson.message);
}
