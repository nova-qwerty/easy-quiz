import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { backgroundImage, backgroundColor } from "./config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sensus giulietta",
  description: "",
  icons: [
    { rel: "icon", url: "/favicon.ico" }, // Favicon principal
    { rel: "shortcut icon", url: "/favicon.ico" }, // Para compatibilidad
  ],
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        <style>{`
          :root {
            --logo-url: url(${backgroundImage});
            --background: ${backgroundColor};
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
