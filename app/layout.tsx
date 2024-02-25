import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hydrate from "./Hydrate";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Patchi Katcha",
   description: "Generated by create next app"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en" className="bg-body-background min-h-screen text-black flex flex-col">
         <body>
            <Toaster expand visibleToasts={1} toastOptions={{ style: { backgroundColor: "#BC6C25", color: "white" } }}></Toaster>
            <Hydrate>{children}</Hydrate>
         </body>
      </html>
   );
}
