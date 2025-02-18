const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const JOBS_DIRECTORY = path.join(process.cwd(), "public/jobs");
const OUTPUT_FILE = path.join(process.cwd(), "public/jobs.json");

const generateJobs = () => {
  if (!fs.existsSync(JOBS_DIRECTORY)) {
    console.error("❌ Error: Jobs directory does not exist!");
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([]));
    return;
  }

  const files = fs.readdirSync(JOBS_DIRECTORY);

  const jobs = files.map((filename: string) => {
    const filePath = path.join(JOBS_DIRECTORY, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return { slug: filename.replace(".md", ""), ...data, content };
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(jobs, null, 2));
  console.log("✅ Jobs data has been generated!");
};

generateJobs();
