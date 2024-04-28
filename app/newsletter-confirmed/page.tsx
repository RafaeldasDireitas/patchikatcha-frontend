import newsletter from "@/public/newsletter_image.png";
import Image from "next/image";

export default function NewsletterConfirmed() {
   return (
      <div className="flex flex-col min-h-screen items-center justify-center">
         <Image className="mb-4" src={newsletter} width={300} height={300} alt="No letter found"></Image>
         <h1 className="text-2xl text-light font-bold mb-10 text-center">You have successfuly subscribed to our newsletter!</h1>
      </div>
   );
}
