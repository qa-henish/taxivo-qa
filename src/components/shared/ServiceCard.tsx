import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Card } from "@/components/ui/Card";
import { Service } from "@/types/service";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group flex h-full flex-col">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-semibold text-ink-900">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Card>
  );
}
