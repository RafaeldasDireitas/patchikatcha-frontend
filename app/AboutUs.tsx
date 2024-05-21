import Image from "next/image";
import imageTest from "@/public/card-image-test.png";

export default function AboutUs() {
   return (
      <div className="flex flex-col lg:flex-row p-12">
         <div className="flex flex-col w-1/3">
            <Image src={imageTest} width={1000} height={1000} alt="About us"></Image>
         </div>

         <div className="flex flex-col w-2/3 px-10">
            <h1>About us</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem ducimus magnam voluptatibus ab earum, fuga suscipit quo
               voluptas quia atque, rerum culpa cumque est illum error praesentium similique dolor.
            </p>
         </div>
      </div>
   );
}
