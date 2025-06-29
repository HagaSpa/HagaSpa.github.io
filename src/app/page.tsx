import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface ResumeData {
  title?: string;
  description?: string;
}

async function getResumeContent() {
  const filePath = path.join(process.cwd(), "contents/resume.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  console.log("Raw markdown content:", fileContents.substring(0, 500)); // デバッグ用

  const matterResult = matter(fileContents);
  console.log("Frontmatter data:", matterResult.data); // デバッグ用
  console.log("Content after frontmatter:", matterResult.content.substring(0, 500)); // デバッグ用

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  console.log("Generated HTML:", contentHtml.substring(0, 1000)); // デバッグ用

  return {
    contentHtml,
    ...matterResult.data,
  } as { contentHtml: string } & ResumeData;
}

export default async function Home() {
  const { contentHtml, title, description } = await getResumeContent();

  return (
    <article className="prose prose-slate max-w-none">
      {title && <h1 className="text-3xl font-bold mb-4 text-slate-900">{title}</h1>}
      {description && <p className="text-lg text-slate-600 mb-8">{description}</p>}
      <div
        className="resume-content prose prose-slate max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-slate-800 prose-h3:mt-6 prose-h3:mb-3 prose-table:border-collapse prose-table:border prose-table:border-slate-300 prose-th:border prose-th:border-slate-300 prose-th:bg-slate-50 prose-th:p-3 prose-td:border prose-td:border-slate-300 prose-td:p-3"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
