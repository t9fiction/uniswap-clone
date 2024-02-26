import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  title: "PKSWap",
  description: "PKSWap - A platform for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
