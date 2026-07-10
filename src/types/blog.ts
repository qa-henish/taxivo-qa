export interface BlogAuthor {
  name: string;
  role: string;
  initials: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: BlogAuthor;
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  coverImageUrl: string;
  coverImageAlt: string;
}
