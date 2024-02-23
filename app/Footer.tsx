export default function Footer() {
   return (
      <>
         <footer className="bg-button-background">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
               <span className="text-sm text-white sm:text-center justify-center flex">
                  © 2024{" "}
                  <a href="https://flowbite.com/" className="hover:underline text-white">
                     PatchiKatcha™
                  </a>
                  . All Rights Reserved.
               </span>
               <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-black sm:mt-0">
                  <li>
                     <a href="#" className=" hover:underline me-4 md:me-6 text-white">
                        About
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline me-4 md:me-6 text-white">
                        Privacy Policy
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline me-4 md:me-6 text-white">
                        Licensing
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline text-white">
                        Contact
                     </a>
                  </li>
               </ul>
            </div>
         </footer>
      </>
   );
}
