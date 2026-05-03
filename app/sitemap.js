import { posts, site } from "@/data/site";

export const dynamic = "force-static";

const routes = ["", "/about-emilia", "/services", "/success-stories", "/resources", "/blog", "/style-quiz", "/contact"];
const postRoutes = posts.flatMap((post) => [`/resources/${post.slug}`, `/blog/${post.slug}`]);

export default function sitemap() {
  return [...routes, ...postRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
