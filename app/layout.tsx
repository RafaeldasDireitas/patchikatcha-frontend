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
      <html lang="en" className="bg-white text-black">
         <Head>
            <style>@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');</style>
         </Head>
         <body>
            <Toaster expand visibleToasts={4} toastOptions={{ style: { backgroundColor: "#BC6C25", color: "white" } }} />
            <Hydrate>{children}</Hydrate>
            <Footer />
         </body>
      </html>
   );
}
