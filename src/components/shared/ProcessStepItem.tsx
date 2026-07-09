import { Icon } from "@/components/ui/Icon";

export function ProcessStepItem({
  step,
  title,
  description,
  icon,
  isLast,
}: {
  step: number;
  title: string;
  description: string;
  icon?: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-500 font-heading text-base font-bold text-white">
          {icon ? <Icon name={icon} className="h-5 w-5" /> : step}
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-brand-100" aria-hidden="true" />}
      </div>
      <div className="pb-10">
        <h3 className="font-heading text-lg font-semibold text-ink-900">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{description}</p>
      </div>
    </div>
  );
}
