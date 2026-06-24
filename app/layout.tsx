import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZeroFounder",
  description: "Turn rough ideas into a launch-ready plan."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
