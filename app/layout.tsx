import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import Header from "@/src/Header";
import { defaultMetadata } from "./metadata";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/M00nBot.png" type="image/x-png" />
      </head>
      <body className={`${ibmPlexMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}