import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nabil | Web Developer & Robotics Programmer",
  description:
    "Portfolio of Nabil — Informatics Engineering student at UMRAH specializing in Web Development and Robotics. Merging robust web development with automation and computer vision.",
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
    title: "Nabil | Web Developer & Robotics Programmer",
    description:
      "Portfolio of Nabil — Informatics Engineering student at UMRAH specializing in Web Development and Robotics.",
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
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-bg text-text transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
