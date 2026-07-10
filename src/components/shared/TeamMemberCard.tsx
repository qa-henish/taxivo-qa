import Image from "next/image";
import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { TeamMember } from "@/types/team";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="flex h-full flex-col items-center text-center">
      {member.imageUrl ? (
        <Image
          src={member.imageUrl}
          alt={member.imageAlt ?? `Portrait of ${member.name}`}
          width={80}
          height={80}
          className="h-20 w-20 rounded-full object-cover ring-2 ring-white"
        />
      ) : (
        <Avatar initials={member.initials} seed={member.name} size="lg" />
      )}
      <h3 className="mt-4 font-heading text-lg font-semibold text-ink-900">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-600">{member.role}</p>
      {member.credentials && (
        <p className="mt-1 text-xs uppercase tracking-wide text-ink-400">{member.credentials.join(" · ")}</p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{member.bio}</p>
    </Card>
  );
}
