export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  pain: string;
  solution: string;
  features: string[];
  value: string;
  fit: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "home-massage-o2o-system",
    title: "上门按摩 O2O 系统",
    industry: "本地生活 / 预约服务",
    pain: "客户需要把技师入驻、用户预约、订单分配和服务评价串起来，但早期需求容易只停留在页面想象上。",
    solution:
      "这类系统需要先梳理用户端、技师端、平台端的核心流程，再确认预约、派单、结算和风控规则。",
    features: ["服务项目展示", "技师管理", "预约下单", "订单调度", "评价与售后"],
    value: "让业务方在开发前看清运营链路，减少后期因为规则不清导致的返工。",
    fit: "适合本地生活、上门服务、预约制服务类项目咨询。",
  },
  {
    slug: "distribution-mall-mini-program",
    title: "分销商城小程序",
    industry: "私域电商 / 分销零售",
    pain: "客户希望通过小程序做商品销售和渠道裂变，但分销层级、佣金、售后和财务口径容易混在一起。",
    solution:
      "这类项目通常要先拆清交易链路，再把会员、分销、商品、订单和结算规则分阶段落地。",
    features: ["商品管理", "会员体系", "分销关系", "佣金结算", "订单与售后"],
    value: "帮助客户先控制商业规则复杂度，再逐步验证渠道增长效果。",
    fit: "适合零售、私域电商、渠道分销和社群销售项目咨询。",
  },
  {
    slug: "store-membership-marketing-system",
    title: "门店会员营销系统",
    industry: "连锁门店 / 会员营销",
    pain: "门店有会员和消费数据，但缺少统一管理工具，营销活动往往依赖人工记录和临时表格。",
    solution:
      "这类项目会重点梳理会员等级、储值、积分、优惠券、核销和门店权限，先保证日常经营能跑通。",
    features: ["会员档案", "积分储值", "优惠券活动", "门店核销", "经营数据看板"],
    value: "让门店从零散运营转向可记录、可追踪、可复盘的数字化管理。",
    fit: "适合连锁门店、社区门店、服务型门店和会员制业务咨询。",
  },
  {
    slug: "ai-customer-service-system",
    title: "AI 智能客服系统",
    industry: "AI 应用 / 客服提效",
    pain: "企业希望用AI降低客服压力，但常见问题库、人工转接、知识更新和准确率边界需要提前设计。",
    solution:
      "我参与过的相关项目会从客服场景和知识来源开始，先定义AI负责什么、不负责什么，再设计接入和运营机制。",
    features: ["知识库整理", "多轮问答", "人工转接", "会话记录", "效果评估"],
    value: "让AI应用先服务具体业务问题，而不是为了追热点做一个难维护的演示系统。",
    fit: "适合客服咨询量大、资料分散、希望用AI提升响应效率的企业咨询。",
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}
