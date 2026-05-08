import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, type ArticleVisual } from "@/app/data/articles";
import { Button, Card, ContactButton, PageShell, SoftSection } from "@/app/components/ui";
import { absoluteUrl } from "@/app/data/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "文章不存在",
    };
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: absoluteUrl(`/articles/${article.slug}`),
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: absoluteUrl(`/articles/${article.slug}`),
      type: "article",
      publishedTime: article.date,
      authors: ["软件项目咨询与需求梳理"],
      tags: [article.category],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <PageShell>
      <article className="min-w-0 overflow-x-hidden">
        <section className="relative overflow-hidden border-b border-stone-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(22,101,52,0.14),transparent_28%),linear-gradient(135deg,#f8f4ec_0%,#eef4ee_55%,#fff8eb_100%)]" />
          <div className="relative mx-auto w-full max-w-4xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <Button href="/articles" variant="ghost" className="border border-stone-200 bg-white/70">
              返回文章列表
            </Button>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-emerald-900 px-3 py-1.5 font-semibold text-white">
                {article.category}
              </span>
              <span>{article.date}</span>
            </div>
            <h1 className="mt-6 break-words text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
              {article.description}
            </p>
          </div>
        </section>

        <SoftSection>
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="min-w-0 rounded-[2rem] border border-stone-200 bg-white/88 p-5 shadow-sm shadow-slate-900/5 sm:p-8 lg:p-9">
              <div className="space-y-10">
                {article.body.map((section) => (
                  <section key={section.heading} className="min-w-0">
                    <h2 className="break-words text-2xl font-semibold tracking-tight text-slate-950">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="break-words text-[15px] leading-8 text-slate-700 sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.visual ? <ArticleVisualBlock visual={section.visual} /> : null}
                  </section>
                ))}
              </div>

              <div className="mt-10 rounded-[1.5rem] bg-emerald-50 p-5 sm:p-6">
                <p className="break-words text-xl font-semibold text-slate-950">
                  这篇文章里的问题，正好也是你的项目现状？
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  可以先发我你的业务背景和当前卡点，我们一起把需求、预算、周期和风险先看清楚。
                </p>
                <div className="mt-5">
                  <ContactButton label="找我聊聊项目想法" />
                </div>
              </div>
            </div>

            <aside className="min-w-0 lg:sticky lg:top-28">
              <Card>
                <p className="text-sm font-semibold text-slate-950">本文要点</p>
                <div className="mt-4 space-y-3">
                  {article.points.map((point) => (
                    <p
                      key={point}
                      className="break-words rounded-2xl bg-[#f8f4ec] px-4 py-3 text-sm leading-6 text-slate-700"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </Card>
            </aside>
          </div>
        </SoftSection>
      </article>
    </PageShell>
  );
}

function ArticleVisualBlock({ visual }: { visual: ArticleVisual }) {
  if (visual.type === "relationship") {
    return (
      <div className="mt-6 rounded-2xl border border-emerald-900/15 bg-emerald-50 p-5">
        <p className="break-words text-lg font-semibold text-slate-950">{visual.title}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {visual.items.map((item) => (
            <div key={item.role} className="min-w-0 rounded-2xl bg-white p-4 shadow-sm shadow-slate-900/5">
              <p className="text-sm font-semibold text-emerald-900">{item.role}</p>
              <p className="mt-2 break-words text-sm leading-7 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual.type === "table") {
    return (
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="bg-slate-950 px-4 py-4 text-white sm:px-5">
          <p className="break-words text-lg font-semibold">{visual.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{visual.note}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="border-b border-slate-200 px-4 py-3 font-semibold sm:px-5">项目</th>
                <th className="border-b border-slate-200 px-4 py-3 font-semibold sm:px-5">示例金额</th>
                <th className="border-b border-slate-200 px-4 py-3 font-semibold sm:px-5">说明</th>
              </tr>
            </thead>
            <tbody>
              {visual.rows.map((row) => (
                <tr key={row.label} className="odd:bg-white even:bg-slate-50/70">
                  <td className="border-b border-slate-100 px-4 py-4 font-semibold break-words text-slate-900 sm:px-5">
                    {row.label}
                  </td>
                  <td className="border-b border-slate-100 px-4 py-4 break-words text-emerald-900 sm:px-5">
                    {row.value}
                  </td>
                  <td className="border-b border-slate-100 px-4 py-4 break-words text-slate-600 sm:px-5">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="break-words text-lg font-semibold text-slate-950">{visual.title}</p>
      <div className="mt-4 grid gap-3">
        {visual.items.map((item, index) => (
          <div key={item} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm shadow-slate-900/5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-xs font-semibold text-white">
              {index + 1}
            </span>
            <p className="break-words text-sm leading-7 text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
