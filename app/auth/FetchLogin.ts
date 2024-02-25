import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default async function FetchLogin({ userData, setJwtToken, setIsAuthenticated, setUserEmail }: any) {
   const createUser = await fetch(endpoints.url + endpoints.login, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
   });

   if (!createUser.ok) {
      console.log("there was an error");
   }

   const responseData = await createUser.json();
   toast.success("You successfuly logged in!");
   setJwtToken(responseData.jwtToken);
   setIsAuthenticated(true);
   setUserEmail(userData.email);
}
