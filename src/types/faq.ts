export type FaqCategory = "general" | "services" | "pricing" | "compliance";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}
