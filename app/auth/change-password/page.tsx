"use client";
import { useSearchParams } from "next/navigation";

export default function ChangePassword() {
   const useParams = useSearchParams();
   const userEmail = useParams.get("email");
   const token = useParams.get("token");
   const formattedToken = token?.replace(/ /g, "+");

   console.log(userEmail);
   console.log(formattedToken);

   return (
      <>
         <h1>Change password</h1>
         <h1>{userEmail}</h1>
         <h1>{formattedToken}</h1>
      </>
   );
}
