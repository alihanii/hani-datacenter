import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Home/Header";
import Footer from "./Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="grid h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="bg-sharpbgg flex justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
