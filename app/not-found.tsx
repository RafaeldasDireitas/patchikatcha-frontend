import notFound from "@/public/404_image.png";
import Image from "next/image";

export default function NotFound() {
   return (
      <div className="min-h-screen flex flex-col justify-center items-center">
         <Image src={notFound} width={300} height={300} alt="404"></Image>
         <h1 className="text-3xl text-dark quicksand-bold">404</h1>
         <p className="text-light text-xl my-1">Oops... page not found!</p>
      </div>
   );
}
