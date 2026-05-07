import type { Metadata } from "next";
import { Card, ContactButton, Hero, PageShell, SectionIntro, SoftSection } from "@/app/components/ui";
import { absoluteUrl } from "@/app/data/seo";

export const metadata: Metadata = {
  title: "关于我",
  description:
    "了解我在软件项目咨询、需求沟通、方案梳理和项目推进中的工作方式，重点关注业务需求、项目落地和开发风险控制。",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title: "关于我 | 软件项目咨询与需求梳理",
    description:
      "我关注的不是多做几个功能，而是先把业务问题、用户流程和投入边界说清楚。",
    url: absoluteUrl("/about"),
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="关于我的工作方式"
        title="我关注的不是多做几个功能，而是项目能不能真正落地。"
        description="长期参与软件项目咨询、需求沟通、方案梳理和项目推进后，我越来越相信：好的软件项目，先要把业务问题、用户流程和投入边界说清楚。"
        aside={<AboutAside />}
      >
        <ContactButton label="找我聊聊项目想法" />
      </Hero>

      <SoftSection>
        <SectionIntro
          eyebrow="How I Work"
          title="我通常从业务和风险开始看项目"
          description="开发当然重要，但在开发之前，更重要的是判断这个系统要解决什么问题、哪些功能必须先做、哪些想法可以后放。"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "把想法拆成用户、流程、功能和后台管理规则。",
            "帮业务方听懂开发团队的技术表达和成本逻辑。",
            "在预算、周期和需求之间找到更稳妥的阶段方案。",
          ].map((item) => (
            <Card key={item}>
              <p className="text-lg font-semibold leading-8 text-slate-950">{item}</p>
            </Card>
          ))}
        </div>
      </SoftSection>

      <section className="border-y border-stone-200 bg-white/42">
        <SoftSection>
          <SectionIntro
            eyebrow="Why Talk First"
            title="你不需要一开始就准备完整需求文档"
            description="只要你有业务背景、目标用户、想解决的问题，甚至只有一个模糊方向，都可以先聊。第一次沟通的价值，是把不确定性摊开，而不是马上承诺开发。"
          />
          <div className="mt-8">
            <ContactButton label="先把项目想法聊清楚" />
          </div>
        </SoftSection>
      </section>
    </PageShell>
  );
}

function AboutAside() {
  return (
    <Card className="bg-white/76">
      <p className="text-sm font-semibold text-slate-950">我更适合介入的阶段</p>
      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
        <p>想法刚成型，还不确定该怎么做。</p>
        <p>准备找开发团队，但担心报价和方案看不懂。</p>
        <p>项目已经开始沟通，但需求越来越散。</p>
      </div>
    </Card>
  );
}
