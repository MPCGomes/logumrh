import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import jobsData from "@/data/jobs.json";
import styles from "./page.module.scss";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Button from "@/components/common/Button/Button";

export function generateStaticParams() {
  return jobsData.map((job) => ({
    slug: job.slug,
  }));
}

const getJobContent = async (slug: string): Promise<string | null> => {
  const filePath = path.join(process.cwd(), "public", "jobs", `${slug}.md`);
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error(`Erro ao carregar o Markdown: ${slug}.md`, error);
    return null;
  }
};

const JobDetailPage = async ({ params }: { params: { slug: string } }) => {
  const job = jobsData.find((j) => j.slug === params.slug);

  if (!job) {
    notFound();
  }

  const jobContent = await getJobContent(params.slug);

  if (!jobContent) {
    return <p>Erro ao carregar a descrição da vaga.</p>;
  }

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

      <ReactMarkdown className={styles.markdown} remarkPlugins={[remarkGfm]}>
        {jobContent}
      </ReactMarkdown>

      <div className={styles.buttons}>
        <Button>Candidatar-se</Button>
        <Link href="/jobs">Voltar</Link>
      </div>
    </section>
  );
};

export default JobDetailPage;
