import type { Metadata } from "next";
import { projectTypes, services } from "@/app/data/site";
import { cases } from "@/app/data/cases";
import { getArticlesByNewest } from "@/app/data/articles";
import { Button, Card, ContactButton, ContactCta, Hero, PageShell, SectionIntro, SoftSection } from "@/app/components/ui";
import { absoluteUrl } from "@/app/data/seo";

export const metadata: Metadata = {
  title: "首页",
  description:
    "软件项目开发前的需求梳理与方案判断，帮助你理清小程序、AI应用、企业系统和定制开发的功能边界、预算周期与项目风险。",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "把软件项目想清楚，再让开发开始",
    description:
      "个人经验型网站，帮助你在开发前梳理需求、判断方案、降低软件项目落地风险。",
    url: absoluteUrl("/"),
    type: "website",
  },
};

export default function Home() {
  const articles = getArticlesByNewest();

  return (
    <PageShell>
      <Hero
        eyebrow="软件项目开发前的判断与梳理"
        title="把项目想清楚，再让开发开始。"
        description="我长期参与软件项目咨询、需求沟通、方案梳理和项目推进。这里更像一份个人经验笔记：帮你判断小程序、AI应用、企业系统和定制开发，到底该先做什么、怎么做、哪里容易踩坑。"
        aside={<HeroNote />}
      >
        <ContactButton label="找我聊聊项目想法" />
        <Button href="/cases" variant="secondary">
          看看项目案例
        </Button>
      </Hero>

      <SoftSection>
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionIntro
            eyebrow="What I Help With"
            title="我主要帮你把模糊的软件想法，变成能沟通、能估算、能推进的项目。"
            description="不是一上来就堆功能，也不是替你拍脑袋做决定。更重要的是把业务目标、用户流程、开发范围和风险先摆到桌面上。"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "需求边界不清楚",
              "预算周期不好判断",
              "开发方案看不懂",
              "项目推进容易跑偏",
            ].map((item, index) => (
              <Card key={item} className="group">
                <span className="text-xs font-bold text-emerald-800">0{index + 1}</span>
                <p className="mt-3 text-xl font-semibold text-slate-950">{item}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  先把问题拆开，再决定功能、版本和投入节奏。
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SoftSection>

      <section className="border-y border-stone-200 bg-white/42">
        <SoftSection>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionIntro
              eyebrow="Good Fit"
              title="这些情况，适合先找我聊一轮"
              description="如果你还没准备好完整需求文档，也没关系。很多项目真正需要的第一步，就是先把问题说清楚。"
            />
            <Button href="/contact" variant="secondary">
              发我你的需求
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projectTypes.map((item) => (
              <Card key={item} className="border-l-4 border-l-emerald-800">
                <p className="text-base font-semibold leading-7 text-slate-900">{item}</p>
              </Card>
            ))}
          </div>
        </SoftSection>
      </section>

      <SoftSection>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            eyebrow="Common Questions"
            title="开发前，很多项目其实先卡在这些问题上"
            description="这些问题越早说清楚，后面找开发、看报价、排周期、验收交付都会更稳。"
          />
          <div className="grid gap-3">
            {[
              "这个系统第一版到底要解决哪一个核心业务问题？",
              "哪些功能必须首期做，哪些功能可以等业务跑通后再加？",
              "业务规则、结算规则、退款规则和异常情况是否已经写清楚？",
              "预算、周期、运营成本和后续维护压力是否匹配当前阶段？",
            ].map((item) => (
              <Card key={item} className="border-l-4 border-l-emerald-800">
                <p className="text-base font-semibold leading-7 text-slate-900">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </SoftSection>

      <SoftSection>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionIntro eyebrow="Services" title="服务方向" />
          <ContactButton label="先简单聊聊" />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title}>
              <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </SoftSection>

      <section className="bg-slate-950 text-white">
        <SoftSection>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionIntro
              eyebrow="Project Notes"
              title="案例不是炫技，而是看项目怎么拆。"
              description="从客户痛点、业务流程、核心功能和项目价值出发，看看常见业务系统在开发前应该怎么梳理。"
              tone="dark"
            />
            <Button href="/cases" variant="secondary">
              看看项目案例
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {cases.slice(0, 2).map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">{item.industry}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>
        </SoftSection>
      </section>

      <SoftSection>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Writing"
            title="写给准备做软件项目的人"
            description="围绕需求沟通、开发方案判断、AI应用落地和企业数字化，整理一些开发前值得想清楚的问题。"
          />
          <Button href="/articles" variant="secondary">
            阅读文章
          </Button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.title}>
              <p className="text-xs font-bold text-emerald-800">{article.category}</p>
              <h3 className="mt-3 text-lg font-semibold leading-8 text-slate-950">{article.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{article.description}</p>
            </Card>
          ))}
        </div>
      </SoftSection>

      <ContactCta
        title="有项目想法，但还没想清楚？"
        description="可以先发我业务背景、想解决的问题和当前卡点。我会帮你一起判断项目是否值得做、先做哪一部分、预算周期怎么考虑。"
      />
    </PageShell>
  );
}

function HeroNote() {
  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/72 p-5 shadow-xl shadow-slate-900/8 backdrop-blur sm:p-6">
      <p className="text-sm font-semibold text-slate-950">一次沟通，先回答三个问题</p>
      <div className="mt-5 space-y-3">
        {["这个项目到底解决什么业务问题？", "第一版应该先做哪些功能？", "预算、周期和风险是否匹配？"].map((item) => (
          <div key={item} className="rounded-2xl border border-stone-200 bg-[#fbfaf7] p-4 text-sm font-medium leading-6 text-slate-700">
            {item}
          </div>
        ))}
      </div>
      <p className="mt-5 text-xs leading-6 text-slate-500">
        适合开发前、报价前、需求越聊越乱时先做一次方向校准。
      </p>
    </div>
  );
}
