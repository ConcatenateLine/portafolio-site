import { t } from "./translateUtils";

export interface Project {
  id?: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  quote: string;
  technologies: string[];
  link: string;
  repository: string;
  slug: string;
  screenshots: string[];
}

// Function to get all projects
export function getAllProjects(): Project[] {
  // This should be replaced with actual project data
  // For now, returning an array with one sample project
  return Array.from({ length: 7 }).map((_, index) => ({
    id: index,
    slug: t(`projects.${index}.slug`),
    title: t(`projects.${index}.title`) || "Project 1",
    subtitle: t(`projects.${index}.subtitle`) || "A brief description",
    description:
      t(`projects.${index}.description`) || "Detailed project description",
    image: t(`projects.${index}.image`) || "/images/project1.jpg",
    quote: t(`projects.${index}.quote`) || "A quote about the project",
    technologies: t(`projects.${index}.technologies`) as unknown as string[],
    link: t(`projects.${index}.link`) || "#",
    repository: t(`projects.${index}.repository`) || "#",
    screenshots: t(`projects.${index}.screenshots`) as unknown as string[],
  }));
}
