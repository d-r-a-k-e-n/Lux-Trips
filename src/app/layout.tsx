import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lux Trips",
  description:
    "This is the best travel agency that can offer you an unforgettable vacation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
