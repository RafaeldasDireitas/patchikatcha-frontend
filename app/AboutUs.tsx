import Image from "next/image";
import AboutUsImage from "@/public/aboutus.png";

export default function AboutUs() {
   return (
      <div className="flex flex-col lg:flex-row lg:p-12">
         <div className="flex flex-col lg:w-2/4 items-center">
            <Image className="rounded-xl" src={AboutUsImage} width={1000} height={1000} alt="About us"></Image>
         </div>

         <div className="flex flex-col lg:w-2/4 lg:px-10 my-4 lg:my-0">
            <h1 className="text-3xl lg:text-start text-center text-dark">About us</h1>
            <p className="lg:p-1 p-4 text-center lg:text-start">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem ducimus magnam voluptatibus ab earum, fuga suscipit quo
               voluptas quia atque, rerum culpa cumque est illum error praesentium similique dolor. Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Officia dolorem ducimus magnam voluptatibus ab earum, fuga suscipit quo voluptas quia atque, rerum culpa cumque est
               illum error praesentium similique dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem ducimus magnam
               voluptatibus ab earum, fuga suscipit quo voluptas quia atque, rerum culpa cumque est illum error praesentium similique dolor. Lorem
               ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem ducimus magnam voluptatibus ab earum, fuga suscipit quo voluptas
               quia atque, rerum culpa cumque est illum error praesentium similique dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Officia dolorem ducimus magnam voluptatibus ab earum, fuga suscipit quo voluptas quia atque, rerum culpa cumque est illum error
               praesentium similique dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem ducimus magnam voluptatibus ab
               earum, fuga suscipit quo voluptas quia atque, rerum culpa cumque est illum error praesentium similique dolor. Lorem ipsum dolor sit
               amet consectetur, adipisicing elit. Officia dolorem ducimus magnam voluptatibus ab earum, fuga suscipit quo voluptas quia atque, rerum
               culpa cumque est illum error praesentium similique dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem
               ducimus magnam voluptatibus ab earum, fuga suscipit quo voluptas quia atque, rerum culpa cumque est illum error praesentium similique
               dolor.
            </p>
         </div>
      </div>
   );
}
