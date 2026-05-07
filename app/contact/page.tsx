import type { Metadata } from "next";
import Image from "next/image";
import { contact } from "@/app/data/site";
import { Button, Card, Hero, PageShell, SoftSection } from "@/app/components/ui";
import { absoluteUrl } from "@/app/data/seo";

export const metadata: Metadata = {
  title: "联系我",
  description:
    "如果你正在考虑做小程序、软件定制、AI应用、企业系统或数字化项目，可以先发我你的想法和目前遇到的问题。",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "联系我 | 先聊聊你的项目想法",
    description:
      "把你的业务背景、项目想法和当前卡点发给我，先一起判断项目是否值得做、先做哪一部分、预算周期如何考虑。",
    url: absoluteUrl("/contact"),
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="联系我"
        title="如果你有一个项目想法，可以先发我看看。"
        description="如果你正在考虑做小程序、软件定制、AI 应用、企业系统或数字化项目，可以先把你的想法、需求或目前遇到的问题发给我。"
        aside={<QrCard />}
      >
        <Button href={`tel:${contact.phone}`}>直接拨打电话</Button>
        <Button href={`mailto:${contact.email}`} variant="secondary">
          发邮件说明需求
        </Button>
      </Hero>

      <SoftSection>
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <Card className="p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-800">
              Start Simple
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
              你不需要一开始就准备完整文档。
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              我会尽量用简单清楚的方式，帮你一起判断项目是否值得做、先做哪一部分、预算和周期大概怎么考虑，以及如何减少后续开发过程中的反复和风险。
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "准备做小程序、软件定制、AI 应用或企业系统，但还没想清楚功能边界。",
                "已经在和开发团队沟通，想先判断报价、周期和方案是否合理。",
                "项目想法比较多，需要有人帮你拆成第一版可以落地的范围。",
                "担心开发过程中反复改、预算失控或上线后不好运营。",
              ].map((item) => (
                <p key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  {item}
                </p>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">联系方式</h2>
            <div className="mt-6 space-y-4">
              <ContactLine label="手机号" value={contact.phone} href={`tel:${contact.phone}`} />
              <ContactLine label="微信号" value={contact.wechat} />
              <ContactLine label="邮箱" value={contact.email} href={`mailto:${contact.email}`} />
            </div>
            <div className="mt-7 rounded-[1.5rem] bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-950">可以先这样发我</p>
              <p className="mt-3 text-sm leading-7 text-emerald-950/80">
                “我是做什么业务的，想做什么系统，目前最担心什么，希望什么时候启动。”
              </p>
            </div>
          </Card>
        </div>
      </SoftSection>
    </PageShell>
  );
}

function QrCard() {
  return (
    <Card className="bg-white/78">
      <div className="grid gap-5 sm:grid-cols-[10rem_1fr] sm:items-center lg:grid-cols-1">
        <div className="w-fit rounded-[1.5rem] bg-white p-3 shadow-sm shadow-slate-900/8">
          <Image
            src="/wechat-qr.png"
            alt="微信二维码"
            width={180}
            height={180}
            className="h-40 w-40 rounded-2xl object-cover sm:h-44 sm:w-44"
            priority
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950">微信扫码联系</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            微信号：<span className="font-semibold text-slate-950">{contact.wechat}</span>
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            适合先发一段项目背景，我看到后再帮你一起拆问题。
          </p>
        </div>
      </div>
    </Card>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-emerald-800"
      >
        {content}
      </a>
    );
  }

  return <div className="rounded-2xl border border-slate-200 bg-white p-4">{content}</div>;
}
