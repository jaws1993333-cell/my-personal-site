import type { MetadataRoute } from "next";
import { articles } from "@/app/data/articles";
import { cases } from "@/app/data/cases";
import { absoluteUrl } from "@/app/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/about", "/services", "/cases", "/articles", "/contact"];
  const articleRoutes = articles.map((article) => `/articles/${article.slug}`);
  const caseRoutes = cases.map((item) => `/cases/${item.slug}`);

  return [...staticRoutes, ...articleRoutes, ...caseRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("/articles/") || route.includes("/cases/") ? 0.7 : 0.8,
  }));
}
