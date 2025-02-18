"use client";

import React, { useEffect, useState } from "react";
import { getJobBySlug, JobData } from "@/utils/jobFetcher";
import styles from "./page.module.scss";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Button from "@/components/common/Button/Button";
import clsx from "clsx";

const JobDetailPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [job, setJob] = useState<JobData | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  useEffect(() => {
    if (slug) {
      getJobBySlug(slug).then(setJob);
    }
  }, [slug]);

  if (!slug) {
    return <p>Carregando...</p>;
  }

  if (job === null) {
    return <p>Carregando vaga...</p>;
  }

  if (!job) {
    return <p>Vaga não encontrada.</p>;
  }

  return (
    <section className={clsx("container section", styles.section)}>
      <h1>{job.jobTitle}</h1>
      <p>
        {job.company} - {job.location}
      </p>
      <p>
        <strong>Salário:</strong> {job.salary}
      </p>
      <p>
        <strong>Benefícios:</strong> {job.benefits}
      </p>
      <p>
        <strong>Horário:</strong> {job.schedule}
      </p>
      <p>
        <strong>Dias de trabalho:</strong> {job.workDays}
      </p>
      <hr />
      <ReactMarkdown className={styles.markdown} remarkPlugins={[remarkGfm]}>
        {job.content}
      </ReactMarkdown>
      <div className={styles.buttons}>
        <Button>Candidatar-se</Button>
        <Link href="/jobs">Voltar</Link>
      </div>
    </section>
  );
};

export default JobDetailPage;
