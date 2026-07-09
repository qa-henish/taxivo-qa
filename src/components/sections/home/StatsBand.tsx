import { Container } from "@/components/ui/Container";
import { StatCounter } from "@/components/ui/StatCounter";
import { companyStats } from "@/lib/data/stats";

export function StatsBand() {
  return (
    <section className="bg-brand-900 py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {companyStats.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
