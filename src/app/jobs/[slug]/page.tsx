import { promises as fs } from "fs";
import path from "path";
import styles from "./page.module.scss";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Button from "@/components/common/Button/Button";
import jobsData from "@/data/jobs.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

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
    console.error(`Erro ao carregar o arquivo Markdown: ${slug}.md`, error);
    return null;
  }
};

const JobDetailPage = async ({ params }: PageProps) => {
  const job = jobsData.find(async (j) => j.slug === (await params).slug);

  if (!job) {
    return <p>Vaga não encontrada.</p>;
  }

  const jobContent = await getJobContent((await params).slug);

  if (!jobContent) {
    return <p>Erro ao carregar a descrição da vaga.</p>;
  }

  return (
    <section className={"container section " + styles.section}>
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
