import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sensus giulietta",
  description: "",
};

export const geistManrope = Manrope({
  variable: "--font-geist-manrope",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistManrope.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
