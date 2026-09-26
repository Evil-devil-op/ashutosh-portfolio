export type ProjectLayout = "visual-right" | "visual-left" | "compact";

export type Project = {
  number: string;
  slug: string;
  title: string;
  displayTitle: string[];
  category: string;
  date: string | null;
  technologies: string[];
  summary: string;
  overview: string;
  features: string[];
  layout: ProjectLayout;
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "fitness-diet-tracker",
    title: "Fitness & Diet Tracker",
    displayTitle: ["Fitness &", "Diet", "Tracker"],
    category: "Full Stack Web Application",
    date: "May 2026",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    summary:
      "A full-stack fitness platform combining workout tracking, nutrition analytics, AI-assisted diet insights, water tracking, and personalized recommendations.",
    overview:
      "A full-stack fitness platform combining workout tracking, nutrition analytics, AI-assisted diet insights, water tracking, and personalized recommendations. Built with Node.js, Express.js, MongoDB, Mongoose, and JWT authentication, the application supports complete workout CRUD, formula-based BMR and TDEE calculation, macro tracking, daily intake vs required analytics, and Indian-focused weekly diet planning.",
    features: [
      "Workout CRUD",
      "Nutrition and macro tracking",
      "BMR / TDEE calculation",
      "AI-assisted diet recommendations",
      "Water intake tracking",
      "Weekly nutrition analytics",
      "Indian-focused diet planning",
      "Authentication",
    ],
    layout: "visual-right",
    githubUrl: "",
    liveUrl: "",
  },
  {
    number: "02",
    slug: "anand-education-center",
    title: "Anand Education Center",
    displayTitle: ["Anand", "Education", "Center"],
    category: "Full Stack",
    date: "December 2024",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    summary:
      "Full-stack website for an educational institute, with frontend and backend built independently end to end.",
    overview:
      "Designed and developed a full-stack website for an educational institute end-to-end, independently handling both frontend and backend development. A React.js frontend presents institute information — courses, faculty, and admissions — backed by a Node.js/Express.js REST API. An authenticated admin panel supports secure content management, with MongoDB storing site data.",
    features: [
      "Institute information",
      "Courses",
      "Faculty",
      "Admissions",
      "React.js frontend",
      "Node.js / Express.js REST API",
      "Authenticated admin panel",
      "Secure content management",
      "MongoDB database",
    ],
    layout: "visual-left",
    githubUrl: "",
    liveUrl: "",
  },
  {
    number: "03",
    slug: "bmi-calculator",
    title: "BMI Calculator",
    displayTitle: ["BMI", "Calculator"],
    category: "Frontend",
    date: null,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    summary:
      "Responsive BMI calculator with instant client-side calculation and category classification from height and weight.",
    overview:
      "Built a responsive BMI calculator with a clean, intuitive interface that computes Body Mass Index from user-input height and weight, with instant client-side calculation and BMI category classification.",
    features: [
      "Height input",
      "Weight input",
      "Instant calculation",
      "BMI calculation",
      "BMI category classification",
      "Responsive interface",
    ],
    layout: "compact",
    githubUrl: "",
    liveUrl: "",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
