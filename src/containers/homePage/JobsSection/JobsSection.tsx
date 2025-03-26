"use client";

import { FC } from "react";
import styles from "./JobsSection.module.scss";
import SectionHeading from "@/components/common/SectionHeading/SectionHeading";
import JobCard from "@/components/common/JobCard/JobCard";
import jobsData from "@/data/jobs.json";
import clsx from "clsx";
import Button from "@/components/common/Button/Button";

const JobsSection: FC = () => {
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
        {jobsData.length === 0 ? (
          <p>Nenhuma vaga encontrada.</p>
        ) : (
          <div
            className={clsx(
              styles.jobGrid,
              jobsData.slice(0, 3).length <= 2 && styles.centered
            )}
          >
            {jobsData.slice(0, 3).map((job) => (
              <JobCard key={job.slug} {...job} />
            ))}
          </div>
        )}
        <div className={styles.viewAll}>
          <Button href="/jobs" variant="contained-white">
            Ver Todas as Vagas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
