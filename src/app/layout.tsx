import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sci-Fi Interfaces That Foretell the Future of Creative Tools",
  description:
    "The most influential creative tool interfaces of the next decade have already been designed — not by product teams, but by Hollywood.",
  openGraph: {
    title: "Sci-Fi Interfaces That Foretell the Future of Creative Tools",
    description:
      "The most influential creative tool interfaces of the next decade have already been designed — not by product teams, but by Hollywood.",
    images: ["/images/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
