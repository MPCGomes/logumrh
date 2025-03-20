"use client";

import { FC } from "react";
import styles from "./JobsSection.module.scss";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import JobCard from "@/components/common/JobCard/JobCard";
import jobsData from "@/data/jobs.json";
import clsx from "clsx";
import Button from "@/components/common/Button/Button";

interface JobsSectionProps {
  limit?: number;
}

const JobsSection: FC<JobsSectionProps> = ({ limit = 3 }) => {
  const jobs = limit ? jobsData.slice(0, limit) : jobsData;

  return (
    <section className="primaryBackground">
      <div className={clsx("container section", styles.jobsContainer)}>
        <SectionHeading
        headingColor="lightHeading"
        subHeadingColor="lightSubHeading"
        subheading="Procurando Emprego?"
        heading="Confira Nossas Vagas"
        variant="center"
      />
      {jobs.length === 0 ? (
        <p>Nenhuma vaga encontrada.</p>
      ) : (
        <div className={styles.jobGrid}>
          {jobs.map((job) => (
            <JobCard key={job.slug} {...job} />
          ))}
        </div>
      )}
      {limit && jobsData.length > limit && (
        <div className={styles.viewAll}>
          <Button href="/jobs" variant="contained-white">
            Ver todas as vagas
          </Button>
        </div>
      )}
      </div>
      
    </section>
  );
};

export default JobsSection;
