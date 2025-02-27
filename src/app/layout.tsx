import type { Metadata } from "next";
import "@fontsource/montserrat";
import "../styles/globals.scss";
import Header from "@/components/common/Header/Header";
import BackToTop from "@/components/common/BackToTop/BackToTop";

export const metadata: Metadata = {
  title: "Logum Recursos Humanos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <BackToTop />
        {children}
      </body>
    </html>
  );
}
