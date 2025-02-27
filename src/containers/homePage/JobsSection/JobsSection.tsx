import React from "react";
import styles from "./JobsSection.module.scss";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import Link from "next/link";
import JobCard from "@/components/common/JobCard/JobCard";
import jobsData from "@/data/jobs.json";

interface JobData {
  slug: string;
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  salary: string;
  benefits: string;
  schedule: string;
  workDays: string;
}

interface JobSectionProps {
  limit?: number;
}

const JobSection: React.FC<JobSectionProps> = ({ limit = 3 }) => {
  const jobs = limit ? jobsData.slice(0, limit) : jobsData;

  return (
    <section className="container section">
      <SectionHeading
        subheading="Procurando Emprego?"
        heading="Confira Nossas Vagas"
        variant="center"
      />
      {jobs.length === 0 ? (
        <p>Nenhuma vaga encontrada.</p>
      ) : (
        <div className={styles.jobGrid}>
          {jobs.map((job: JobData) => (
            <JobCard key={job.slug} {...job} />
          ))}
        </div>
      )}
      {limit && jobs.length > limit ? (
        <Link href="/jobs" className={styles.viewAll}>
          Ver todas as vagas
        </Link>
      ) : null}
    </section>
  );
};

export default JobSection;
