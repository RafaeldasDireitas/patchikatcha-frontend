import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";

export default async function FetchRegister({ userData, setRedirectToVerifyEmail, setFetchEmailToken, setCart }: any) {
   const createUser = await fetch(endpoints.url + endpoints.register, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
   });

   if (!createUser.ok) {
      toast.error("There was a problem creating your account, try again.");
      return;
   }

   if (createUser.ok) {
      setCart(null);
      setFetchEmailToken(true);
      setRedirectToVerifyEmail(true);
   }
}
