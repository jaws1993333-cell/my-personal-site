import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/app/data/cases";
import { Button, Card, ContactButton, ContactCta, Hero, PageShell, SoftSection } from "@/app/components/ui";
import { absoluteUrl } from "@/app/data/seo";

export const metadata: Metadata = {
  title: "软件案例",
  description:
    "查看上门按摩O2O系统、分销商城小程序、门店会员营销系统、AI智能客服系统等项目类型的需求拆解和方案梳理案例。",
  alternates: {
    canonical: absoluteUrl("/cases"),
  },
  openGraph: {
    title: "软件案例 | 常见业务系统需求拆解",
    description:
      "从客户痛点、解决方案、核心功能和项目价值看软件项目如何落地。",
    url: absoluteUrl("/cases"),
    type: "website",
  },
};

export default function CasesPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="软件案例"
        title="更真实地看一个软件项目，是怎么从想法走到方案的。"
        description="这里用常见业务系统做拆解，重点看客户痛点、业务流程、核心功能、项目价值，以及开发前需要想清楚的关键问题。"
        aside={<CaseAside />}
      >
        <ContactButton label="找我聊聊项目想法" />
      </Hero>

      <SoftSection>
        <div className="grid gap-6">
          {cases.map((item, index) => (
            <article
              key={item.slug}
              className="min-w-0 overflow-hidden rounded-[2rem] border border-stone-200 bg-white/86 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/8"
            >
              <div className="grid min-w-0 gap-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <Link href={`/cases/${item.slug}`} className="block min-w-0 border-b border-stone-200 bg-slate-950 p-6 text-white sm:p-8 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-emerald-200">
                    Case 0{index + 1}
                  </p>
                  <h2 className="mt-4 break-words text-2xl font-semibold leading-tight">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.industry}</p>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">适合关注</p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      流程是否闭环、规则是否清楚、第一版是否能落地
                    </p>
                  </div>
                </Link>
                <div className="min-w-0 p-5 sm:p-8">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Info title="客户痛点" text={item.pain} />
                    <Info title="解决方案" text={item.solution} />
                    <Info title="项目价值" text={item.value} />
                    <Info title="适合咨询的客户" text={item.fit} />
                  </div>
                  <div className="mt-6 rounded-2xl bg-[#f8f4ec] p-5">
                    <p className="text-sm font-semibold text-slate-950">核心功能</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.features.map((feature) => (
                        <span key={feature} className="break-words rounded-full bg-white px-3 py-2 text-sm text-slate-700 shadow-sm shadow-slate-900/5">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button href={`/cases/${item.slug}`} variant="secondary">
                      查看案例详情
                    </Button>
                    <Button href="/contact" variant="ghost" className="border border-stone-200 bg-white">
                      发我你的需求
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SoftSection>
      <ContactCta
        title="你的项目也属于类似类型？"
        description="先不用急着整理完整方案，可以把业务流程、想做的功能和目前最担心的问题发给我，我帮你一起判断第一版怎么落地。"
      />
    </PageShell>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-950">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function CaseAside() {
  return (
    <Card className="bg-white/76">
      <p className="text-sm font-semibold text-slate-950">看案例时，建议先看这些问题</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        真实项目不只是功能清单，更要看业务流程、运营规则、后台管理和交付边界是否提前想清楚。
      </p>
      <div className="mt-5 grid gap-2 text-sm text-slate-700">
        {["痛点是否真实", "流程是否闭环", "首期是否可交付"].map((item) => (
          <span key={item} className="rounded-full bg-[#f8f4ec] px-4 py-2">
            {item}
          </span>
        ))}
      </div>
    </Card>
  );
}
