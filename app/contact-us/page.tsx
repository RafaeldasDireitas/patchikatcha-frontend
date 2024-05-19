"use client";
import { contactUsValidation } from "@/zod/zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ContactUs() {
   const [userEmail, setUserEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [content, setContent] = useState("");

   useEffect(() => {
      document.title = "Contact us";
   }, []);

   const handleUserEmail = (e: any) => {
      const userEmail = e.target.value;
      setUserEmail(userEmail);
   };

   const handleSubject = (e: any) => {
      const subject = e.target.value;
      setSubject(subject);
   };

   const handleContent = (e: any) => {
      const content = e.target.value;
      setContent(content);
   };

   const contactData = {
      userEmail: userEmail,
      subject: subject,
      content: content
   };

   const sendEmail = async () => {
      const isValid = await contactUsValidation.safeParseAsync(contactData);

      if (!isValid.success) {
         isValid.error.errors.forEach((error) => {
            toast.error(error.message);
         });
         return;
      }

      const sendEmailPOST = await fetch("/api/send-email", {
         method: "POST",
         headers: {
            "Content-type": "application/json"
         },
         body: JSON.stringify({ userEmail, subject, content })
      });

      if (sendEmailPOST.ok) {
         toast.success("Email sent");
         window.location.reload();
         return;
      }

      toast.error("There was an error, try again");
      return;
   };

   return (
      <div className="px-2 lg:px-0">
         <div className="min-h-screen flex flex-col justify-center items-center gap-y-2">
            <h1 className="text-3xl text-dark quicksand-bold">Contact us</h1>
            <input
               type="text"
               onChange={handleSubject}
               value={subject}
               placeholder="Subject"
               className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] my-2 w-full bg-white quicksand-light"
               id="subject"
            />
            <input
               type="text"
               onChange={handleUserEmail}
               value={userEmail}
               placeholder="Your email"
               className="input rounded-full border-border-light focus:border-border-light border-2 max-w-[500px] w-full bg-white quicksand-light"
               id="userEmail"
            />
            <textarea
               className="textarea rounded-xl border-border-light focus:border-border-light border-2 max-w-[500px] max-h-96 h-48  w-full bg-white quicksand-light"
               placeholder="Content"
               onChange={handleContent}
               value={content}
            ></textarea>
            <button
               onClick={sendEmail}
               className="btn btn-circle bg-button-background hover:bg-button-focused quicksand-semibold w-60 text-white border-none"
            >
               Submit
            </button>
         </div>
      </div>
   );
}
