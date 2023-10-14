import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");

  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://azhar1038.github.io/astro-demo-learn",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/astro-demo-learn/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
