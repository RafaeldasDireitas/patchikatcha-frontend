import { Editor } from "@tinymce/tinymce-react";

export default function Comment({ comment, setComment }: any) {
   const handleComment = (content: any, editor: any) => {
      setComment(content);
   };

   return (
      <>
         <div className="flex flex-col my-2">
            <h1 className="text-3xl text-dark josefin-sans">Make your comment:</h1>
            <div className="my-2 border-2 border-border-light rounded-xl focus-within:border-border-light focus:border-border-light">
               <Editor
                  apiKey="whvo6todsl87fpbo8i8n29zir5w6e61nt40y9osdnrg8xlvr"
                  init={{
                     menubar: "",
                     plugins: "anchor autolink wordcount",
                     height: 300,
                     max_height: 500,
                     color_default_foreground: "red",
                     toolbar:
                        "undo redo | blocks fontsize | bold italic underline strikethrough | align lineheight | numlist bullist indent outdent | removeformat"
                  }}
                  onEditorChange={handleComment}
               />
            </div>{" "}
         </div>
      </>
   );
}
