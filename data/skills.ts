export type SkillGroup = {
  number: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "03",
    title: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    number: "04",
    title: "Languages",
    items: ["JavaScript", "C", "C++", "Python", "Java"],
  },
  {
    number: "05",
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "MongoDB Compass", "npm"],
  },
];
