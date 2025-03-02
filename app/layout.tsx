import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sensus giulietta",
  description: "",
};

export const manrope = Manrope({
  variable: "--font-manrope",
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
        className={`${manrope.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
