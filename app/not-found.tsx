import notFound from "@/public/404_image.png";
import Image from "next/image";

export default function NotFound() {
   return (
      <div className="flex flex-col min-h-screen my-16 items-center">
         <Image src={notFound} width={300} height={300} alt="404"></Image>
         <h1 className="text-3xl text-dark mt-2">404</h1>
         <p className="text-light text-xl my-1">Oops... page not found!</p>
      </div>
   );
}
