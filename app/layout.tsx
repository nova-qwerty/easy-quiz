import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { backgroundImage, backgroundColor } from "./config.json";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giorgia In Italiano",
  description: "",
};

const manrope = Manrope({
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
      <head>
        <style>{`
          :root {
            --logo-url: url(${backgroundImage});
            --background: ${backgroundColor};
            --color: black;
          }
        `}</style>
      </head>
      <body
        className={`${manrope.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
