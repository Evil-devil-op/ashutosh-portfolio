export type SkillGroup = {
  number: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    number: "02",
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    number: "03",
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    number: "04",
    title: "Tools & Foundations",
    items: ["Git", "GitHub", "VS Code", "npm", "Python", "Java", "C", "C++"],
  },
];
