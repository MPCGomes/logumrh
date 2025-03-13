export const metadata = {
  title: "Logum RH | Recrutamento & Seleção",
  description:
    "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
  openGraph: {
    url: "https://www.logumrh.com.br/",
    title: "Logum RH | Recrutamento & Seleção",
    description:
      "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
    images: [
      {
        url: "https://www.logumrh.com.br/home-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Logum RH | Recrutamento & Seleção",
    description:
      "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
    image: "https://www.logumrh.com.br/home-og-image.jpg",
  },
  alternates: {
    canonical: "https://www.logumrh.com.br/",
  },
};

import FaqSection from "@/containers/homePage/FaqSection/FaqSection";
import CtaSection from "@/containers/homePage/CtaSection/CtaSection";
import FeaturesSection from "@/containers/homePage/FeaturesSection/FeaturesSection";
import HeroSection from "@/containers/homePage/HeroSection/HeroSection";
import ProcessSection from "@/containers/homePage/ProcessSection/ProcessSection";
import JobSection from "@/containers/homePage/JobsSection/JobsSection";
import ServicesSection from "@/containers/homePage/ServicesSection/ServicesSection";
import TestimonialsSection from "@/containers/homePage/TestimonialsSection/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProcessSection />
      <JobSection limit={3} />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
