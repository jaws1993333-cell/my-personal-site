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

  return {
    title: item.seoTitle,
    description: item.seoDescription,
    alternates: {
      canonical: absoluteUrl(`/cases/${item.slug}`),
    },
    openGraph: {
      title: item.seoTitle,
      description: item.seoDescription,
      url: absoluteUrl(`/cases/${item.slug}`),
      type: "article",
      tags: [item.industry, ...item.suitableIndustries],
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
              {item.summary}
            </p>
          </div>
        </section>

        <SoftSection>
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="min-w-0 rounded-[2rem] border border-stone-200 bg-white/90 p-5 shadow-sm shadow-slate-900/5 sm:p-8 lg:p-9">
              <SectionBlock title="一、案例标题">
                <p className="break-words text-lg leading-8 text-slate-700">{item.title}</p>
              </SectionBlock>

              <SectionBlock title="二、模式简介">
                {item.intro.map((paragraph) => (
                  <p key={paragraph} className="break-words text-[15px] leading-8 text-slate-700 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </SectionBlock>

              <SectionBlock title="三、适合行业">
                <BulletList items={item.suitableIndustries} />
              </SectionBlock>

              <SectionBlock title="四、客户常见痛点">
                <BulletList items={item.commonPainPoints} />
              </SectionBlock>

              <SectionBlock title="五、模式逻辑拆解">
                <BulletList items={item.logicBreakdown} />
              </SectionBlock>

              <SectionBlock title="六、奖励 / 积分 / 分润规则设计建议">
                <BulletList items={item.ruleAdvice} />
              </SectionBlock>

              <SectionBlock title="七、开发前必须确认的问题">
                <BulletList items={item.questions} />
              </SectionBlock>

              <SectionBlock title="八、项目价值">
                <BulletList items={item.projectValues} />
              </SectionBlock>

              <SectionBlock title="九、适合咨询的客户">
                <BulletList items={item.fitClients} />
              </SectionBlock>

              <div className="mt-10 rounded-[1.5rem] bg-emerald-50 p-5 sm:p-6">
                <p className="break-words text-xl font-semibold text-slate-950">十、联系引导</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  如果你正在考虑做类似项目，可以先把你的想法发给我。我可以帮你一起梳理业务规则、用户路径、奖励机制和开发前需要确认的问题，避免还没想清楚规则就急着开发。
                </p>
                <div className="mt-5">
                  <ContactButton label="找我聊聊项目想法" />
                </div>
              </div>
            </div>

            <aside className="min-w-0 lg:sticky lg:top-28">
              <Card>
                <p className="text-sm font-semibold text-slate-950">这类案例先看什么</p>
                <div className="mt-4 space-y-3">
                  {[
                    item.focus,
                    item.value,
                    item.fit,
                  ].map((point) => (
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

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="min-w-0 border-b border-stone-200/80 py-7 last:border-b-0 last:pb-0 first:pt-0">
      <h2 className="break-words text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-xs font-semibold text-white">
            {index + 1}
          </span>
          <p className="break-words text-sm leading-7 text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  );
}
