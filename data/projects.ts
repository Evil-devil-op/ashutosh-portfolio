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
  // TODO: Add actual repository URL
  githubUrl: string;
  // TODO: Add actual live demo URL when available
  liveUrl: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "fitness-diet-tracker",
    title: "Fitness & Diet Tracker",
    displayTitle: ["Fitness &", "Diet", "Tracker"],
    category: "Full Stack",
    date: "May 2026",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    summary:
      "Backend for a full-stack fitness and diet tracking application, with REST APIs for meal logging, workout logging, and progress tracking.",
    overview:
      "Developed the backend of a full-stack fitness and diet tracking application, building REST APIs with Node.js and Express.js to support meal logging, workout logging, and progress tracking. Formula-based logic computes calories, protein, and fiber from logged meals. User authentication (login/signup) and MongoDB persist profiles, meal logs, and workout history.",
    features: [
      "Meal logging",
      "Workout logging",
      "Progress tracking",
      "Formula-based calorie calculation",
      "Protein calculation",
      "Fiber calculation",
      "User authentication",
      "Login / signup",
      "MongoDB persistence",
      "User profiles",
      "Meal logs",
      "Workout history",
    ],
    layout: "visual-right",
    githubUrl: "", // TODO: Add actual repository URL
    liveUrl: "", // TODO: Add actual live demo URL when available
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
    githubUrl: "", // TODO: Add actual repository URL
    liveUrl: "", // TODO: Add actual live demo URL when available
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
    githubUrl: "", // TODO: Add actual repository URL
    liveUrl: "", // TODO: Add actual live demo URL when available
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
