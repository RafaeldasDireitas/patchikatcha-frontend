import message from "@/public/Message_light.svg";
import Image from "next/image";

export default function Newsletter() {
   return (
      <>
         <div className="flex flex-col items-center m-2 gap-y-4">
            <h1 className="text-3xl lg:text-start text-center text-dark font-bold yeseva-one-regular">Sign up for our Newsletter!</h1>
            <p className="josefin-sans">Stay up to date with new products and announcements!</p>
            <label className="flex flex-row input rounded-full bg-white gap-2 border-border-light focus-within:border-border-light border-2">
               <Image src={message} width={30} height={30} alt="No icon found"></Image>
               <input className="bg-white w-56 josefin-sans" placeholder="Enter your email" type="text" id="email"></input>
            </label>
         </div>
      </>
   );
}
