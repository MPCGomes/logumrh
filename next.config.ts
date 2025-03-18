/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async exportPathMap() {
    const jobsData: { slug: string }[] = require("./src/data/jobs.json");

    const paths: Record<string, { page: string; query?: { slug: string } }> = {
      "/": { page: "/" },
    };

    jobsData.forEach((job: { slug: string }) => {
      paths[`/jobs/${job.slug}`] = {
        page: "/jobs/[slug]",
        query: { slug: job.slug },
      };
    });

    return paths;
  },
};

module.exports = nextConfig;
