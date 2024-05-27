import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Hydrate from "./Hydrate";
import { Toaster } from "sonner";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
   title: "Patchi Katcha",
   description: "Online shop that sells the most epic, cute products!"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en" className="bg-white text-black" suppressHydrationWarning>
         <Head>
            <style>@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');</style>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
               href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Quicksand:wght@300..700&display=swap"
               rel="stylesheet"
            ></link>
         </Head>
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
