"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import FetchChangePassword from "./FetchChangePassword";
import { toast } from "sonner";

export default function ChangePassword() {
   const [newPassword, setNewPassword] = useState<string>("");
   const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

   const useParams = useSearchParams();
   const userEmail = useParams.get("email");
   const token = useParams.get("token");
   const formattedToken = token?.replace(/ /g, "+");

   const changePasswordData = {
      userEmail: userEmail,
      token: formattedToken,
      password: newPassword
   };

   const handleNewPassword = (e: any) => {
      const newPassword = e.target.value;
      setNewPassword(newPassword);
   };

   const handleConfirmNewPassword = (e: any) => {
      const confirmNewPassword = e.target.value;
      setConfirmNewPassword(confirmNewPassword);
   };

   const SendPasswordData = async () => {
      if (newPassword !== confirmNewPassword) {
         toast.error("Passwords don't match.");
      } else {
         FetchChangePassword({ changePasswordData });
      }
   };

   return (
      <div className="flex flex-col min-h-screen items-center justify-center">
         <input
            type="password"
            placeholder="New password"
            className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white josefin-sans"
            onChange={handleNewPassword}
            value={newPassword}
         />
         <input
            type="password"
            placeholder="Confirm new password"
            className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white josefin-sans"
            onChange={handleConfirmNewPassword}
            value={confirmNewPassword}
         />
         <button className="btn w-40 bg-button-background text-white border-none" onClick={SendPasswordData}>
            Submit
         </button>
      </div>
   );
}
