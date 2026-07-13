import { Icon } from "@/components/ui/Icon";
import { Card } from "@/components/ui/Card";
import { Industry } from "@/types/industry";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Card className="flex h-full flex-col">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-white">
        <Icon name={industry.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-semibold text-ink-900 dark:text-white">{industry.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{industry.description}</p>
    </Card>
  );
}
