import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/case-study");

export interface CaseStudyMeta {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  description: string;
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  const studies = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug: file.replace(/\.mdx$/, ""),
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      tags: data.tags ?? [],
      description: data.description ?? "",
    } as CaseStudyMeta;
  });

  return studies.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getCaseStudyBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);

  return {
    slug,
    title: data.title,
    subtitle: data.subtitle,
    date: data.date,
    tags: data.tags ?? [],
    description: data.description ?? "",
  } as CaseStudyMeta;
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
