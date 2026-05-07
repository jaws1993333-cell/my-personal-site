import type { Metadata } from "next";
import { services } from "@/app/data/site";
import { Button, Card, ContactButton, ContactCta, Hero, PageShell, SectionIntro, SoftSection } from "@/app/components/ui";
import { absoluteUrl } from "@/app/data/seo";

export const metadata: Metadata = {
  title: "服务",
  description:
    "提供小程序开发需求梳理、软件定制开发方案咨询、AI应用想法梳理、企业数字化系统规划和开发前预算周期判断。",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
  openGraph: {
    title: "服务方向 | 软件项目咨询与需求梳理",
    description:
      "在正式开发前，先把需求、方案、预算和风险对齐。",
    url: absoluteUrl("/services"),
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="服务方向"
        title="在正式开发前，先把需求、方案、预算和风险对齐。"
        description="我提供的是轻量但关键的项目梳理支持：帮你把业务语言转成开发语言，把想法拆成可估算、可沟通、可推进的方案。"
      >
        <ContactButton label="找我聊聊项目想法" />
      </Hero>

      <SoftSection>
        <SectionIntro
          eyebrow="Directions"
          title="可以先从这几类问题聊起"
          description="先做简单、准确、能执行的判断，不把咨询包装成复杂流程，也不急着把项目做大。"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <h2 className="text-xl font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </SoftSection>

      <SoftSection className="pt-0">
        <div className="rounded-[2rem] border border-emerald-900/15 bg-emerald-50 p-6 sm:p-10">
          <p className="text-2xl font-semibold text-slate-950">适合在这些节点找我聊</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {["找开发团队之前", "项目报价看不懂时", "需求越聊越乱时"].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-5 text-sm font-semibold text-slate-800">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ContactButton label="发我你的需求" />
            <Button href="/cases" variant="secondary">
              先看看案例
            </Button>
          </div>
        </div>
      </SoftSection>
      <ContactCta
        title="不确定该从哪项服务开始？"
        description="可以先把项目背景和当前问题发给我，我们从需求边界、功能优先级和预算周期这些实际问题开始聊。"
      />
    </PageShell>
  );
}
