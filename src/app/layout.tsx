import "./assets/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio - Tomasz Łukowski",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
