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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl min-w-0 items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 flex-1 items-center gap-3 pr-2">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 text-sm font-semibold tracking-[-0.08em] text-white shadow-lg shadow-slate-950/15 sm:h-12 sm:w-12">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.75),transparent_34%)]" />
            <span className="relative">MT</span>
          </span>
          <span className="min-w-0">
            <span className="block break-words text-lg font-semibold tracking-[0.06em] text-slate-950 transition group-hover:text-emerald-900 sm:text-2xl">
              明途信息
            </span>
            <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.18em] text-emerald-900/70 sm:text-xs">
              Project Clarity Studio
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-1 text-sm text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="ml-1 px-4 py-2">
            先聊聊
          </Button>
        </nav>

        <details className="group lg:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-900 hover:text-emerald-900 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">打开菜单</span>
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-4 rounded-full bg-current" />
              <span className="h-0.5 w-4 rounded-full bg-current" />
              <span className="h-0.5 w-4 rounded-full bg-current" />
            </div>
          </summary>
          <div className="absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 sm:left-6 sm:right-6">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-2 w-full">
                先聊聊
              </Button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div className="min-w-0">
          <p className="text-lg font-semibold text-white">
            先把问题说清楚，开发才不会越做越重。
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            这里是个人经验型网站，记录我对软件项目、小程序、AI 应用和企业数字化落地的观察。
            适合在开发前，用一次沟通降低判断成本。
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
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden bg-[#f7f7f3] text-slate-900">
      <SiteHeader />
      <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
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
    primary: "bg-emerald-900 text-white shadow-sm hover:bg-emerald-800",
    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:border-emerald-900 hover:text-emerald-900",
    ghost: "bg-transparent text-slate-700 hover:bg-white hover:text-slate-950",
  };

  return (
    <Link
      href={href}
      className={`inline-flex max-w-full items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      <span className="break-words">{children}</span>
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
    <div className="max-w-3xl min-w-0">
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
        className={`mt-3 break-words text-2xl font-semibold leading-tight tracking-tight sm:text-4xl ${
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
    <div
      className={`min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/4 sm:p-6 ${className}`}
    >
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
    <section className="overflow-x-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl min-w-0 gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-20">
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-900/80">
            {eyebrow}
          </p>
          <h1 className="mt-5 break-words text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            {description}
          </p>
          {children ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>
          ) : null}
        </div>
        {aside ? <div className="min-w-0 lg:justify-self-end">{aside}</div> : null}
      </div>
    </section>
  );
}

export function SoftSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto w-full max-w-6xl min-w-0 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 ${className}`}>
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
      <div className="overflow-hidden rounded-2xl border border-emerald-900/20 bg-white text-slate-900 shadow-sm">
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1.25fr_0.75fr] md:items-center lg:p-10">
          <div className="min-w-0">
            <p className="break-words text-2xl font-semibold sm:text-3xl">{title}</p>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">{description}</p>
          </div>
          <div className="md:text-right">
            <Button href="/contact">找我聊聊项目想法</Button>
          </div>
        </div>
      </div>
    </SoftSection>
  );
}
