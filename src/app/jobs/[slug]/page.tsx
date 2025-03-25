import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import Link from "next/link";
import styles from "./page.module.scss";
import jobsData from "@/data/jobs.json";
import ApplyModal from "./ApplyModal";
import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "next/dist/build/templates/pages";
import ShareModal from "@/components/common/ShareModal/ShareModal";

export async function generateStaticParams() {
  return jobsData.map((job) => ({ slug: job.slug }));
}

export default async function JobDetailPage({
  params,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { slug } = params;
  const job = jobsData.find((j) => j.slug === slug);
  if (!job) notFound();

  let jobContent: string | null = null;
  try {
    jobContent = fs.readFileSync(
      path.join(process.cwd(), "public", "jobs", `${slug}.md`),
      "utf8"
    );
  } catch {}

  return (
    <section className={"container section " + styles.section}>
      <div className={styles.markdownWrapper}>
        <div className={styles.titleContainer}>
          <div className={styles.shareContainer}>
            <ShareModal slug={slug} />
          </div>
          <h1>{job.jobTitle}</h1>
        </div>

        {jobContent ? (
          <ReactMarkdown
            className={styles.markdown}
            remarkPlugins={[remarkGfm, remarkBreaks]}
          >
            {jobContent}
          </ReactMarkdown>
        ) : (
          <p>Erro ao carregar a descrição da vaga.</p>
        )}
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/jobs/" className={styles.linkButton}>
          Voltar
        </Link>
        <ApplyModal jobId={job.id} jobTitle={job.jobTitle} />
      </div>
    </section>
  );
}
