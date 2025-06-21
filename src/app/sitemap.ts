import { getAllPosts } from "@/lib/api";
import { DNS } from "@/lib/constants";
import globby from "globby";

function addPage(page: string) {
  const path = page
  .replace("src/", "")
    .replace("app/", "")
    .replace(".tsx", "")
    .replace(".mdx", "")
    .replace("/page", "");
  return path;
}
export default async function sitemap() {
  const pages = await globby([
    "src/**/*{.js,jsx,ts,tsx,.mdx}",
    "!src/../*.js",
    "!src/app/{sitemap,layout,head,robots,manifest,not-found}.{js,jsx,ts,tsx}",
    "!src/api/*",
    "!src/interfaces/*",
    "!src/lib/*",
    "!src/app/components/**/*{.js,jsx,ts,tsx,.mdx}",
    "!src/scripts/*",
    "!src/app/(api|auth|private)/**",
    "!src/app/(dashboard|admin)/**",
    '!src/app/posts/[slug]/page.tsx',
    '!src/app/bio/doctors/[slug]/page.tsx'
  ]);

  const allPosts = getAllPosts();

  const routes = pages.map((page: string) => ({
    url: `${DNS}/${addPage(page)}`,
    lastModified: new Date().toISOString(),
  }));
  
  allPosts.forEach((post) => {
    routes.push({
      url: `${DNS}/posts/${post.slug}`,
      lastModified: post.date,
    });
  });

  return [...routes];
}
