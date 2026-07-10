export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  credentials?: string[];
  imageUrl?: string;
  imageAlt?: string;
}
