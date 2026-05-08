"use client";

import Link from "next/link";
import { useState } from "react";
import type { Article } from "@/app/data/articles";
import { Button, Card } from "@/app/components/ui";

type SortKey = "latest" | "popular";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "latest", label: "最新发布" },
  { key: "popular", label: "热门文章" },
];

export function ArticleList({
  latestArticles,
  popularArticles,
}: {
  latestArticles: Article[];
  popularArticles: Article[];
}) {
  const [sortKey, setSortKey] = useState<SortKey>("latest");
  const articles = sortKey === "latest" ? latestArticles : popularArticles;
  const hotArticles = popularArticles.slice(0, 5);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          {sortOptions.map((option) => {
            const active = option.key === sortKey;

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => setSortKey(option.key)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-emerald-900 bg-emerald-900 text-white shadow-sm shadow-emerald-900/15"
                    : "border-slate-300 bg-white text-slate-700 hover:border-emerald-900 hover:text-emerald-900"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5">
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/4 transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <div className="grid gap-5 lg:grid-cols-[0.24fr_minmax(0,1fr)_0.32fr] lg:items-start">
                <div className="flex flex-row flex-wrap items-center gap-3 lg:block">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">
                    Note {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="w-fit rounded-full bg-[#f1efe8] px-3 py-2 text-xs font-semibold text-slate-600">
                    {article.category}
                  </p>
                </div>

                <div className="min-w-0">
                  <Link href={`/articles/${article.slug}`} className="group">
                    <h2 className="text-xl font-semibold leading-tight text-slate-950 transition group-hover:text-emerald-900 sm:text-2xl">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {article.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:items-end lg:justify-start">
                  <span className="text-sm text-slate-500">{article.date}</span>
                  <span className="text-sm font-medium text-slate-600">
                    {formatArticleViews(article.views)}
                  </span>
                  <Button
                    href={`/articles/${article.slug}`}
                    variant="ghost"
                    className="border border-slate-200 bg-white"
                  >
                    阅读全文
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="lg:sticky lg:top-24">
        <Card>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
            热门文章
          </p>
          <div className="mt-4 space-y-3">
            {hotArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-emerald-900 hover:bg-white"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Top {index + 1}
                </p>
                <p className="mt-2 text-base font-semibold leading-7 text-slate-900">
                  {article.title}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>{article.category}</span>
                  <span>{formatArticleViews(article.views)}</span>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      </aside>
    </div>
  );
}

function formatArticleViews(views: number) {
  if (views < 1000) {
    return `阅读 ${views} 次`;
  }

  const compact = Math.round((views / 1000) * 10) / 10;
  return `阅读 ${compact}k 次`;
}
