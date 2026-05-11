export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mingtu.lzyunli.com";

export const siteName = "软件项目咨询与需求梳理";

export const defaultDescription =
  "个人经验型网站，聚焦软件项目咨询、需求沟通、小程序开发、AI应用和企业数字化系统规划，帮助开发前降低判断成本和项目风险。";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
