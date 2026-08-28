import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { InteractiveCloudBackground } from "@/components/ui/interactive-cloud-background";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan Cangas | SOC & Systems Engineer",
  description:
    "DevSecOps, Cloud Infrastructure & SOC Systems Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body
        className={`${montserrat.className} antialiased bg-[#07090E] text-zinc-100 min-h-screen relative selection:bg-cyan-500 selection:text-black`}
      >
        <InteractiveCloudBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
