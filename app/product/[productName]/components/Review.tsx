"use client";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Link from "next/link";

export default function Review({ productId, productTitle, image }: any) {
   const editorRef = useRef<any>(null);
   const [characterDescription, setCharacterDescription] = useState("Character Description...");

   const handleCharacterDescription = (content: any, editor: any) => {
      setCharacterDescription(content);
   };

   console.log(characterDescription);

   return (
      <>
         <div className="collapse bg-white">
            <input type="checkbox" />
            <div className="flex justify-center collapse-title text-xl">
               <h1 className="text-3xl text-dark josefin-sans">Click here to make a review!</h1>
            </div>
            <div className="collapse-content">
               <Editor
                  apiKey="whvo6todsl87fpbo8i8n29zir5w6e61nt40y9osdnrg8xlvr"
                  init={{
                     plugins: "anchor autolink wordcount",
                     height: 300,
                     toolbar: "undo redo | blocks fontsize | bold italic underline strikethrough | align lineheight | numlist bullist indent outdent | removeformat"
                  }}
                  initialValue="Review"
                  onEditorChange={handleCharacterDescription}
               />
               <Link href={{ pathname: `/review-product`, query: { productId: productId } }}>
                  <div className="flex justify-end my-2">
                     <button className="btn text-white bg-button-background hover:bg-button-focused border-none rounded-3xl my-2 w-40">Give us a review!</button>
                  </div>
               </Link>
            </div>
         </div>

         {/* <textarea placeholder="Bio" className="textarea border-2 border-border-light focus-within:border-border-light max-h-52 bg-white textarea-bordered textarea-md w-full"></textarea> */}
      </>
   );
}
