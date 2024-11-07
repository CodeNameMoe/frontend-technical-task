import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToggleProvider } from "@/src/context/toggle-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SENECA Frontend Technical Task",
  description: "By Mohamed Ali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToggleProvider>{children}</ToggleProvider>
      </body>
    </html>
  );
}
