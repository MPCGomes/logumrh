"use client";

import React, { useEffect, useState } from "react";
import styles from "./JobsSection.module.scss";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import Link from "next/link";
import JobCard from "@/components/common/JobCard/JobCard";
import { getJobs, JobData } from "@/utils/jobFetcher";

interface JobSectionProps {
  limit?: number;
}

const JobSection: React.FC<JobSectionProps> = ({ limit = 3 }) => {
  const [jobs, setJobs] = useState<JobData[] | null>(null);

  useEffect(() => {
    getJobs(limit).then(setJobs);
  }, [limit]);

  return (
    <section className="container section">
      <SectionHeading
        subheading="Procurando Emprego?"
        heading="Confira Nossas Vagas"
        variant="center"
      />
      {jobs === null ? (
        <p>Carregando vagas...</p>
      ) : jobs.length === 0 ? (
        <p>Nenhuma vaga encontrada.</p>
      ) : (
        <div className={styles.jobGrid}>
          {jobs.map((job) => (
            <JobCard key={job.slug} {...job} />
          ))}
        </div>
      )}
      {limit && jobs?.length ? (
        <Link href="/jobs" className={styles.viewAll}>
          Ver todas as vagas
        </Link>
      ) : null}
    </section>
  );
};

export default JobSection;
