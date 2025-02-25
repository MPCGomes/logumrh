import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Button from "@/components/common/Button/Button";
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
  content: string;
}

export function generateStaticParams() {
  return jobsData.map((job) => ({
    slug: job.slug,
  }));
}

const JobDetailPage = ({ params }: { params: { slug: string } }) => {
  const job = jobsData.find((j) => j.slug === params.slug);

  if (!job) {
    return <p>Vaga não encontrada.</p>;
  }

  return (
    <section className={"container section " + styles.section}>
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
