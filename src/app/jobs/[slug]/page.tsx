"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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
}

const JobDetailPage = () => {
  const { slug } = useParams(); // Get slug dynamically
  const router = useRouter();

  const [job, setJob] = useState<JobData | null>(null);
  const [jobContent, setJobContent] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    // Find job in JSON data
    const foundJob = jobsData.find((j) => j.slug === slug);
    if (!foundJob) {
      router.push("/jobs"); // Redirect if not found
      return;
    }
    setJob(foundJob);

    // Fetch markdown content
    fetch(`/jobs/${slug}.md`)
      .then((res) => (res.ok ? res.text() : null))
      .then((content) => setJobContent(content))
      .catch(() => setJobContent(null));
  }, [slug, router]);

  if (!job) return <p>Carregando...</p>;

  return (
    <section className={"container section " + styles.section}>
      <h1>{job.jobTitle}</h1>
      <p>
        <strong>Empresa:</strong> {job.company} - <strong>Local:</strong>{" "}
        {job.location}
      </p>
      <p>
        <strong>Salário:</strong> {job.salary}
      </p>
      <p>
        <strong>Benefícios:</strong> {job.benefits}
      </p>
      <p>
        <strong>Horário:</strong> {job.schedule} - <strong>Dias:</strong>{" "}
        {job.workDays}
      </p>

      {jobContent ? (
        <ReactMarkdown className={styles.markdown} remarkPlugins={[remarkGfm]}>
          {jobContent}
        </ReactMarkdown>
      ) : (
        <p>Erro ao carregar a descrição da vaga.</p>
      )}

      <div className={styles.buttonContainer}>
        <Link href="/jobs" className={styles.linkButton}>
          Voltar
        </Link>
        <Button variant="contained">Candidatar-se</Button>
      </div>
    </section>
  );
};

export default JobDetailPage;
