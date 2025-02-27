import type { Metadata } from "next";
import "@fontsource/montserrat";
import "../styles/globals.scss";
import Header from "@/components/common/Header/Header";

export const metadata: Metadata = {
  title: "Logum RH | Assessoria e Consultoria de RH",
  description:
    "Especialistas em recrutamento e seleção em Caraguatatuba, conectando talentos às empresas certas.",
  keywords: [
    "Recrutamento",
    "Seleção",
    "RH",
    "Caraguatatuba",
    "Consultoria de RH",
  ],
  openGraph: {
    title: "Logum RH | Assessoria e Consultoria de RH",
    description:
      "Recrutamento e seleção em Caraguatatuba para empresas que buscam talentos qualificados.",
    url: "https://www.logumrh.com.br",
    siteName: "Logum RH",
    type: "website",
  },
  robots: "index, follow",
  other: {
    sitemap: "https://www.logumrh.com.br/sitemap.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
