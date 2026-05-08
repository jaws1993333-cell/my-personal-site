import type { Metadata } from "next";
import { getArticlesByNewest, getArticlesByPopular } from "@/app/data/articles";
import { ArticleList } from "@/app/articles/articles-list";
import {
  Button,
  Card,
  ContactButton,
  ContactCta,
  Hero,
  PageShell,
  SectionIntro,
  SoftSection,
} from "@/app/components/ui";
import { absoluteUrl } from "@/app/data/seo";

export const metadata: Metadata = {
  title: "文章",
  description:
    "阅读软件项目延期、小程序开发准备、开发方案判断、AI 应用落地和企业数字化相关文章，帮助开发前做出更稳妥的判断。",
  alternates: {
    canonical: absoluteUrl("/articles"),
  },
  openGraph: {
    title: "文章 | 软件项目开发前的判断与梳理",
    description: "写给准备做软件项目的人，分享需求沟通、方案判断和项目落地经验。",
    url: absoluteUrl("/articles"),
    type: "website",
  },
};

export default function ArticlesPage() {
  const latestArticles = getArticlesByNewest();
  const popularArticles = getArticlesByPopular();

  return (
    <PageShell>
      <Hero
        eyebrow="项目判断文章"
        title="写给准备做软件项目的人。"
        description="这里整理一些开发前值得想清楚的问题，帮助你更稳妥地判断需求、方案、预算、周期和项目风险。"
        aside={<ArticleAside />}
      >
        <ContactButton label="发我你的需求" />
      </Hero>

      <SoftSection>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionIntro
            eyebrow="Latest Notes"
            title="文章列表"
            description="如果你正在准备做小程序、软件定制、AI 应用或企业系统，可以先从这些问题开始判断。"
          />
          <Button href="/contact" variant="secondary">
            有问题想让我写？
          </Button>
        </div>
        <div className="mt-8">
          <ArticleList latestArticles={latestArticles} popularArticles={popularArticles} />
        </div>
      </SoftSection>

      <ContactCta
        title="文章里的问题，可能正好也是你的项目现状。"
        description="如果你正在判断小程序、软件定制、AI 应用或企业系统该不该做，可以先找我聊聊项目想法。"
      />
    </PageShell>
  );
}

function ArticleAside() {
  return (
    <Card className="bg-white/76">
      <p className="text-sm font-semibold text-slate-950">适合先了解的话题</p>
      <div className="mt-4 min-w-0 space-y-3 text-sm leading-7 text-slate-600">
        <p>需求沟通怎么做更清楚</p>
        <p>软件项目为什么容易延期</p>
        <p>AI 应用是否真的适合当前业务</p>
        <p>企业系统该选型还是定制</p>
      </div>
    </Card>
  );
}
