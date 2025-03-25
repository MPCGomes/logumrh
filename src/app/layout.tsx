import "../styles/globals.scss";
import Header from "@/components/common/Header/Header";
import BackToTop from "@/components/common/BackToTop/BackToTop";
import WhatsAppButton from "@/components/common/WhatsAppButton/WhatsAppButton";
import Footer from "@/components/common/Footer/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Logum RH | Recrutamento & Seleção",
  description:
    "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
  openGraph: {
    type: "website",
    url: "https://www.logumrh.com.br/",
    title: "Logum RH | Recrutamento & Seleção",
    description:
      "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
    images: [
      {
        url: "https://www.logumrh.com.br/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@logumrh",
    title: "Logum RH | Recrutamento & Seleção",
    description:
      "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
    image: "https://www.logumrh.com.br/og-image.jpg",
  },
  alternates: {
    canonical: "https://www.logumrh.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <BackToTop />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
