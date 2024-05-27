import type { Metadata } from "next";
import { Quicksand, Fredoka } from "next/font/google";
import "./globals.css";
import Hydrate from "./Hydrate";
import { Toaster } from "sonner";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });

export const metadata: Metadata = {
   title: "Patchi Katcha",
   description: "Online shop that sells the most epic, cute products!"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en" className="bg-white text-black" suppressHydrationWarning>
         <body className={`container min-h-screen flex flex-col justify-between ${quicksand.className}`}>
            <Toaster
               expand
               visibleToasts={4}
               toastOptions={{
                  unstyled: true,
                  classNames: {
                     success:
                        "bg-button-background w-auto text-white  rounded-xl shadow-xl drop-shadow-xl flex flex-row items-center justify-center lg:justify-center text-center lg:text-start p-3",
                     error: "bg-red-800 w-auto text-white  rounded-xl shadow-xl drop-shadow-xl flex flex-row items-center justify-center lg:justify-center text-center lg:text-start p-3"
                  }
               }}
               position="bottom-left"
            />
            <Hydrate>{children}</Hydrate>
         </body>
      </html>
   );
}
