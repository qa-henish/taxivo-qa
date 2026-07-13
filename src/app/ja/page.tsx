import type { Metadata } from "next";
import { Landmark, Receipt, Building2, ShieldCheck, LineChart, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "日本のお客様へ",
  description:
    "Taxivoはインドでビジネスを展開する日本企業様向けに、税務申告、GST登録、会社設立、監査、財務アドバイザリーをサポートする公認会計士事務所です。",
};

const services = [
  {
    icon: Receipt,
    title: "所得税申告",
    description: "個人事業主から法人まで、正確かつ期限内の所得税申告をサポートします。",
  },
  {
    icon: Landmark,
    title: "GST登録・申告",
    description: "GST（物品サービス税）の新規登録から月次・年次申告まで一括対応します。",
  },
  {
    icon: Building2,
    title: "会社設立",
    description: "インドでの現地法人・支店の設立手続きを、書類準備から登記完了まで支援します。",
  },
  {
    icon: ShieldCheck,
    title: "監査・保証業務",
    description: "インドの会計基準に準拠した法定監査・内部監査サービスを提供します。",
  },
  {
    icon: LineChart,
    title: "財務アドバイザリー",
    description: "資金計画、税務戦略、経営分析など、経営判断を支える財務アドバイスを行います。",
  },
  {
    icon: Users,
    title: "給与計算・記帳代行",
    description: "毎月の記帳業務や給与計算をアウトソーシングし、コア業務に集中いただけます。",
  },
];

export default function JapanesePage() {
  return (
    <>
      <PageHero
        eyebrow="日本語対応"
        title="インド進出企業様のための会計・税務サポート"
        description={`${siteConfig.name}は、インドでビジネスを展開される日本企業様・個人のお客様向けに、日本語でのご相談に対応する公認会計士事務所です。`}
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "日本語" }]}
      />

      <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-ink-900 md:text-3xl dark:text-white">
            インドでの会計・税務を、安心してお任せください
          </h2>
          <p className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">
            インドの税制や会計制度は複雑で、頻繁に改正が行われます。{siteConfig.name}
            は現地の規制に精通した専門チームが、日本企業様のインド進出から日々の運営まで一貫してサポートいたします。
            日本語でのご相談窓口をご用意しておりますので、言語の壁を気にせずお問い合わせいただけます。
          </p>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 md:py-24 dark:bg-ink-800/40">
        <Container>
          <h2 className="text-center font-heading text-2xl font-bold text-ink-900 md:text-3xl dark:text-white">
            主なサービス内容
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-100 dark:bg-ink-800 dark:ring-ink-700 dark:shadow-none">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-ink-900 dark:text-brand-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
        <Container className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-ink-900 md:text-3xl dark:text-white">お問い合わせ</h2>
          <p className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">
            サービス内容やお見積りについてご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-600 dark:text-ink-300">
            <li>
              メール:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline dark:text-brand-400">
                {siteConfig.email}
              </a>
            </li>
            <li>
              電話:{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-brand-600 hover:underline dark:text-brand-400">
                {siteConfig.phone}
              </a>
            </li>
            <li>所在地: {siteConfig.address}</li>
          </ul>
        </Container>
      </section>

      <CTASection
        title="無料相談のご予約はこちら"
        description="インド進出やインド国内での会計・税務でお困りの際は、まずはお気軽にご相談ください。"
        primaryLabel="無料相談を予約する"
        primaryHref="/contact"
        secondaryLabel="料金プランを見る"
        secondaryHref="/pricing"
      />
    </>
  );
}
