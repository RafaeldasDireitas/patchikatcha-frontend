import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hydrate from "./Hydrate";
import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Patchi Katcha",
   description: "Online shop that sells the most epic, cute products!"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en" className="bg-white text-black" suppressHydrationWarning>
         <Head>
            <style>@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');</style>
         </Head>
         <body className="min-h-screen flex flex-col justify-between">
            <Toaster
               expand
               visibleToasts={4}
               toastOptions={{
                  unstyled: true,
                  classNames: {
                     success:
                        "bg-button-background w-auto text-white quicksand-semibold rounded-xl shadow-xl drop-shadow-xl flex flex-row items-center justify-center lg:justify-center text-center lg:text-start p-3",
                     error: "bg-red-800 w-auto text-white quicksand-semibold rounded-xl shadow-xl drop-shadow-xl flex flex-row items-center justify-center lg:justify-center text-center lg:text-start p-3"
                  }
               }}
               position="bottom-left"
            />
            <Hydrate>{children}</Hydrate>
         </body>
      </html>
   );
}
