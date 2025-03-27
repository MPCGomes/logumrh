export const metadata = {
  title: "Logum RH | Recrutamento & Seleção",
  description:
    "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
  openGraph: {
    url: "https://www.logumrh.com.br/vagas/",
    title: "Logum RH | Recrutamento & Seleção",
    description:
      "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
    images: [
      {
        url: "https://www.logumrh.com.br/vagas-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Logum RH | Recrutamento & Seleção",
    description:
      "Consultoria de Recursos Humanos em Caraguatatuba. Especialistas em processos seletivos, encontramos os melhores talentos para sua empresa no Litoral Norte e Vale do Paraíba.",
    image: "https://www.logumrh.com.br/vagas-og-image.jpg",
  },
  alternates: {
    canonical: "https://www.logumrh.com.br/vagas/",
  },
};

import { FC } from "react";
import styles from "./page.module.scss";
import JobCard from "@/components/common/JobCard/JobCard";
import jobsData from "@/data/jobs.json";
import clsx from "clsx";

const JobsPage: FC = () => {
  return (
    <section className={clsx("container section", styles.jobsSection)}>
      <div className={styles.jobsContainer}>
        {jobsData.length === 0 ? (
          <p>Nenhuma vaga encontrada.</p>
        ) : (
          <div className={styles.jobGrid}>
            {jobsData.map((job) => (
              <JobCard key={job.slug} {...job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsPage;
