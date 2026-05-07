import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我" },
  { href: "/services", label: "服务" },
  { href: "/cases", label: "案例" },
  { href: "/articles", label: "文章" },
  { href: "/contact", label: "联系" },
];

type ButtonVariant = "primary" | "secondary" | "ghost";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#f8f4ec]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="group flex w-fit items-center gap-3">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 text-sm font-semibold tracking-[-0.08em] text-white shadow-lg shadow-slate-950/15">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.75),transparent_34%)]" />
            <span className="relative">MT</span>
          </span>
          <span className="min-w-0">
            <span className="block text-xl font-semibold tracking-[0.08em] text-slate-950 group-hover:text-emerald-900 sm:text-2xl">
              明途信息
            </span>
            <span className="mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.22em] text-emerald-900/70 sm:text-xs">
              Project Clarity Studio
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto pb-1 text-sm text-slate-600 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-2 transition hover:bg-white hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="ml-1 shrink-0 px-4 py-2">
            先聊聊
          </Button>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">先把问题说清楚，开发才不会越做越重。</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            这里是个人经验型网站，记录我对软件项目、小程序、AI应用和企业数字化落地的观察。适合在开发前，用一次沟通降低判断成本。
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <Button href="/contact">发我你的需求</Button>
          <p className="text-xs text-slate-500">个人品牌网站 · 需求梳理 · 项目落地判断</p>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f4ec] text-slate-900">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const styles = {
    primary:
      "bg-emerald-900 text-white shadow-sm shadow-emerald-950/10 hover:bg-emerald-800",
    secondary:
      "border border-slate-300 bg-white/85 text-slate-800 hover:border-emerald-900 hover:text-emerald-900",
    ghost: "bg-transparent text-slate-700 hover:bg-white hover:text-slate-950",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ContactButton({
  label = "找我聊聊项目想法",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <Button href="/contact" className={className}>
      {label}
    </Button>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`text-xs font-bold uppercase tracking-[0.24em] ${
            isDark ? "text-emerald-200" : "text-emerald-800"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-8 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[1.75rem] border border-stone-200/90 bg-white/82 p-5 shadow-sm shadow-slate-900/5 backdrop-blur sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function Hero({
  eyebrow,
  title,
  description,
  children,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(22,101,52,0.15),transparent_28%),radial-gradient(circle_at_90%_12%,rgba(120,53,15,0.11),transparent_30%),linear-gradient(135deg,#f8f4ec_0%,#eef4ee_48%,#fff8eb_100%)]" />
      <div className="absolute left-0 top-0 h-full w-full opacity-[0.08] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-900/80">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            {description}
          </p>
          {children ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
        </div>
        {aside ? <div className="lg:justify-self-end">{aside}</div> : null}
      </div>
    </section>
  );
}

export function SoftSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

export function ContactCta({
  title = "有项目想法，可以先简单聊聊。",
  description = "把你的业务背景、想做的系统、目前卡住的问题发给我。我们先判断项目是否值得做、第一步做什么，以及预算周期大概怎么考虑。",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <SoftSection className="pt-0">
      <div className="overflow-hidden rounded-[2rem] bg-emerald-900 text-white shadow-xl shadow-emerald-950/10">
        <div className="grid gap-6 p-7 sm:p-10 md:grid-cols-[1.25fr_0.75fr] md:items-center">
          <div>
            <p className="text-2xl font-semibold sm:text-3xl">{title}</p>
            <p className="mt-4 max-w-3xl leading-8 text-emerald-50">{description}</p>
          </div>
          <div className="md:text-right">
            <Button href="/contact" className="bg-white text-emerald-950 hover:bg-emerald-50">
              找我聊聊项目想法
            </Button>
          </div>
        </div>
      </div>
    </SoftSection>
  );
}
