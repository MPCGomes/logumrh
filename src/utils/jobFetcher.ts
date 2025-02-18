export interface JobData {
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

export const getJobs = async (limit?: number): Promise<JobData[]> => {
  const res = await fetch("/jobs.json");
  if (!res.ok) {
    console.error("❌ Error loading jobs.json");
    return [];
  }

  const jobs: JobData[] = await res.json();
  return limit ? jobs.slice(0, limit) : jobs;
};

export const getJobBySlug = async (slug: string): Promise<JobData | null> => {
  const res = await fetch("/jobs.json");
  if (!res.ok) {
    console.error("❌ Error loading jobs.json");
    return null;
  }

  const jobs: JobData[] = await res.json();
  return jobs.find((job) => job.slug === slug) || null;
};
