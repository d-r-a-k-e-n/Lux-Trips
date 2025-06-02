import type { Metadata } from "next";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
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
      <body>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
