import { MapPin, Briefcase, Clock3 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JobOpening } from "@/types/job";

export function JobCard({ job }: { job: JobOpening }) {
  return (
    <Card>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-lg font-semibold text-ink-900 dark:text-white">{job.title}</h3>
            <Badge variant="brand">{job.department}</Badge>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-ink-500 dark:text-ink-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              {job.type}
            </span>
          </div>
        </div>
        <Button href={`/careers#${job.id}`} variant="secondary" size="sm" className="shrink-0">
          <Briefcase className="h-4 w-4" />
          View Role
        </Button>
      </div>
    </Card>
  );
}
