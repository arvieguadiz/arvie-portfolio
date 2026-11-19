export type Screenshot = {
  src: string;
  label: string;
};

export type ProjectDetails = {
  overview: string;
  keyFeatures: string[];
  contributions: string[];
};

export type Project = {
  number: string;
  name: string;
  category: string;
  group: "Professional" | "Academic & Internship" | "Personal";
  organization?: string;
  featured?: boolean;
  description: string;
  technologies: string[];
  accent: string;
  visual:
    | "chat"
    | "moderation"
    | "bridge"
    | "management"
    | "messaging"
    | "training"
    | "thesis"
    | "web"
    | "weather"
    | "finance"
    | "tasks";
  screenshots?: Screenshot[];
};

export const projectFilters = [
  "All",
  "Professional",
  "Academic & Internship",
  "Personal",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];
