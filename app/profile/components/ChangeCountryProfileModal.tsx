import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger
} from "@/components/ui/dialog";
import countries from "@/data/countries.json";
import Image from "next/image";

export default function ChangeCountryProfileModal() {
   return (
      <DialogContent className="lg:w-[500px]" onInteractOutside={(e) => e.preventDefault()}>
         <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
         </DialogHeader>
         <div className="grid grid-cols-3 gap-2">
            {countries.countries.country.map((country, key) => {
               return (
                  <button key={key + key} className="btn p-0 m-0 text-sm">
                     <Image src={`${country.countryFlag}`} width={30} height={30} alt="No image found" />
                     {country.countryName}
                  </button>
               );
            })}
         </div>
         <DialogFooter>
            <DialogClose>
               <h1>Confirm</h1>
            </DialogClose>
         </DialogFooter>
      </DialogContent>
   );
}
