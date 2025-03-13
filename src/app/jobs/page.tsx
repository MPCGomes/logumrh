export const metadata = {
  title: "Logum RH | Recrutamento & Seleção",
  description:
    "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
  openGraph: {
    url: "https://www.logumrh.com.br/jobs/",
    title: "Logum RH | Recrutamento & Seleção",
    description:
      "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
    images: [
      {
        url: "https://www.logumrh.com.br/jobs-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Logum RH | Recrutamento & Seleção",
    description:
      "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
    image: "https://www.logumrh.com.br/jobs-og-image.jpg",
  },
  alternates: {
    canonical: "https://www.logumrh.com.br/jobs/",
  },
};

import JobsSection from "@/containers/homePage/JobsSection/JobsSection";

export default function JobsPage() {
  return (
    <div>
      <JobsSection />
    </div>
  );
}
