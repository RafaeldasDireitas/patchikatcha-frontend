"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Comment({ comment, setComment }: any) {
   const editor = useEditor({
      extensions: [StarterKit],
      content: "",
      editorProps: {
         attributes: {
            class: "my-2 h-[300px] max-h-[500px] border-2 border-border-light rounded-xl focus-within:border-border-light focus:border-border-light"
         }
      },
      onUpdate: ({ editor }: any) => {
         const comment = editor.getHTML();
         setComment(comment);
      }
   });

   return (
      <>
         <div className="flex flex-col my-2">
            <h1 className="text-3xl text-dark josefin-sans">Make your comment:</h1>
            <div>
               <EditorContent editor={editor} />
            </div>{" "}
         </div>
      </>
   );
}
