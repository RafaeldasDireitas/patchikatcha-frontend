"use client";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useGlobalStore } from "@/zustand/globalstore";
import { useState } from "react";
import FetchDeleteAccount from "../FetchDeleteAccount";

export default function DeleteAccountModal() {
   const globalStore = useGlobalStore();
   const setJwtToken = globalStore.setJwtToken;
   const setUserEmail = globalStore.setUserEmail;
   const setUserId = globalStore.setUserId;
   const setIsAuthenticated = globalStore.setIsAuthenticated;
   const userId = globalStore.userId;
   const jwtToken = globalStore.jwtToken;

   const [password, setPassword] = useState("");

   const passwordHandler = (e: any) => {
      const password = e.target.value;
      setPassword(password);
   };

   const deleteAccount = async () => {
      FetchDeleteAccount({ userId, password, jwtToken, setJwtToken, setUserEmail, setUserId, setIsAuthenticated });
   };

   return (
      <DialogContent className="sm:max-w-[425px]">
         <DialogHeader>
            <DialogTitle className=" text-light text-center">Are you absolutely sure?</DialogTitle>
            <DialogDescription className=" text-center">This action is irreversible</DialogDescription>
         </DialogHeader>
         <input
            type="password"
            placeholder="Password"
            className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] w-full bg-white quicksand-light"
            id="password"
            onChange={passwordHandler}
            value={password}
         />

         <DialogFooter className="flex mx-auto">
            <DialogClose>
               <button
                  onClick={deleteAccount}
                  className="btn btn-circle w-60 bg-button-background disabled:text-black disabled:bg-gray-300 hover:bg-red-800 text-white border-none"
               >
                  Delete account
               </button>
            </DialogClose>
         </DialogFooter>
      </DialogContent>
   );
}
