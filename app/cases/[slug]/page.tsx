import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cases, getCaseBySlug } from "@/app/data/cases";
import { Button, Card, ContactButton, PageShell, SoftSection } from "@/app/components/ui";
import { absoluteUrl } from "@/app/data/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    return {
      title: "案例不存在",
    };
  }

  const description = `${item.title}案例拆解，行业方向：${item.industry}。包含客户痛点、解决方案、核心功能、项目价值和适合咨询的客户。`;

  return {
    title: `${item.title}案例`,
    description,
    alternates: {
      canonical: absoluteUrl(`/cases/${item.slug}`),
    },
    openGraph: {
      title: `${item.title}案例 | 业务系统需求拆解`,
      description,
      url: absoluteUrl(`/cases/${item.slug}`),
      type: "article",
      tags: [item.industry],
    },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <PageShell>
      <article className="min-w-0 overflow-x-hidden">
        <section className="relative overflow-hidden border-b border-stone-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(22,101,52,0.14),transparent_28%),linear-gradient(135deg,#f8f4ec_0%,#eef4ee_55%,#fff8eb_100%)]" />
          <div className="relative mx-auto w-full max-w-5xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <Button href="/cases" variant="ghost" className="border border-stone-200 bg-white/70">
              返回案例列表
            </Button>
            <p className="mt-8 w-fit rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white">
              {item.industry}
            </p>
            <h1 className="mt-6 break-words text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {item.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
              这类项目的关键不只是功能开发，而是先把业务流程、角色权限、运营规则和交付边界梳理清楚。
            </p>
          </div>
        </section>

        <SoftSection>
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="min-w-0 rounded-[2rem] border border-stone-200 bg-white/88 p-5 shadow-sm shadow-slate-900/5 sm:p-8 lg:p-9">
              <div className="grid gap-5">
                <DetailBlock title="客户痛点" text={item.pain} />
                <DetailBlock title="解决方案" text={item.solution} />
                <DetailBlock title="项目价值" text={item.value} />
                <DetailBlock title="适合咨询的客户" text={item.fit} />
              </div>

              <section className="mt-8 rounded-[1.5rem] bg-[#f8f4ec] p-5 sm:p-6">
                <h2 className="text-xl font-semibold text-slate-950">核心功能</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="break-words rounded-full bg-white px-4 py-2 text-sm text-slate-700 shadow-sm shadow-slate-900/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </section>

              <div className="mt-10 rounded-[1.5rem] bg-emerald-50 p-5 sm:p-6">
                <p className="break-words text-xl font-semibold text-slate-950">你也在准备类似项目？</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  可以先发我业务背景、当前想法和最担心的问题，我会帮你一起判断需求边界、开发路径和前期风险。
                </p>
                <div className="mt-5">
                  <ContactButton label="发我你的需求" />
                </div>
              </div>
            </div>

            <aside className="min-w-0 lg:sticky lg:top-28">
              <Card>
                <p className="text-sm font-semibold text-slate-950">适合先聊的问题</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  如果你也在规划类似系统，可以先从业务流程、首期功能、预算周期和开发风险这几个问题开始梳理。
                </p>
              </Card>
            </aside>
          </div>
        </SoftSection>
      </article>
    </PageShell>
  );
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <section className="min-w-0 rounded-[1.5rem] border border-stone-200 bg-white p-5">
      <h2 className="break-words text-xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 break-words text-base leading-8 text-slate-700">{text}</p>
    </section>
  );
}
