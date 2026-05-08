import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/app/data/cases";
import {
  Button,
  Card,
  ContactCta,
  Hero,
  PageShell,
  SectionIntro,
  SoftSection,
} from "@/app/components/ui";
import { absoluteUrl } from "@/app/data/seo";

export const metadata: Metadata = {
  title: "商业模式案例",
  description:
    "这里整理的是一些常见商业模式的系统开发前思考。内容不做收益承诺，重点帮助你判断模式是否适合、规则是否清楚、开发前需要确认哪些问题。",
  alternates: {
    canonical: absoluteUrl("/cases"),
  },
  openGraph: {
    title: "商业模式案例 | 系统开发前的规则梳理",
    description:
      "围绕裂变、分销、返利、积分、社区经济和拼团玩法，整理常见商业模式的开发前思考。",
    url: absoluteUrl("/cases"),
    type: "website",
  },
};

export default function CasesPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="商业模式案例"
        title="把模式看清楚，再决定要不要开发。"
        description="这里整理的是一些常见商业模式的系统开发前思考。内容不做收益承诺，重点帮助你判断模式是否适合、规则是否清楚、开发前需要确认哪些问题。"
        aside={<CasesAside />}
      >
        <Button href="/contact">找我聊聊项目想法</Button>
      </Hero>

      <SoftSection>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Model Notes"
            title="商业模式案例列表"
            description="这些内容更像开发前的规则梳理，不是招商文案，也不是收益宣传。适合企业老板、创业者和业务负责人先拿来判断方向。"
          />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.slug}
              className="min-w-0 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/8"
            >
              <div className="p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">
                  {item.industry}
                </p>
                <h2 className="mt-4 break-words text-2xl font-semibold leading-tight text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.suitableIndustries.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="break-words rounded-full bg-[#f8f4ec] px-3 py-2 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-950">核心关注点</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.focus}</p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href={`/cases/${item.slug}`} variant="secondary">
                    查看详情
                  </Button>
                  <Button href="/contact" variant="ghost" className="border border-stone-200 bg-white">
                    找我聊聊项目想法
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SoftSection>

      <ContactCta
        title="如果你也在研究某种商业模式，不一定要先急着开发。"
        description="可以先把你的产品、用户场景、毛利、规则设想和当前顾虑发给我。我可以帮你一起判断这个模式是否适合、规则是否清楚、开发前还缺哪些关键确认。"
      />
    </PageShell>
  );
}

function CasesAside() {
  return (
    <Card className="bg-white/78">
      <p className="text-sm font-semibold text-slate-950">适合先用这些问题看模式</p>
      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
        <p>这个模式适不适合自己的产品和用户？</p>
        <p>奖励、积分、分润规则是否真的说得清楚？</p>
        <p>退款、售后、异常订单和结算口径怎么处理？</p>
        <p>如果要开发系统，需求和边界是否已经足够明确？</p>
      </div>
    </Card>
  );
}
