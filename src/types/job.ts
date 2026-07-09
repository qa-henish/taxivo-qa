export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship";
  description: string;
  responsibilities: string[];
  requirements: string[];
}
