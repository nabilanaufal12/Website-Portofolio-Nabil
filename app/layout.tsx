import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nabil — Web Developer & Robotics Programmer",
  description:
    "Portfolio of Nabil — Informatics Engineering student at UMRAH. Building thoughtful digital experiences at the intersection of web development, robotics, and automation.",
  keywords: [
    "Nabil",
    "Web Developer",
    "Robotics",
    "Next.js",
    "Portfolio",
    "UMRAH",
    "Informatics Engineering",
  ],
  authors: [{ name: "Nabil" }],
  openGraph: {
    title: "Nabil — Web Developer & Robotics Programmer",
    description:
      "Building thoughtful digital experiences at the intersection of web development, robotics, and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} ${lora.variable} ${robotoMono.variable} font-sans antialiased bg-bg text-text transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
