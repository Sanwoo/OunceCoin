import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Navbar from "@/components/Navbar";
import { Geist } from "next/font/google";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
