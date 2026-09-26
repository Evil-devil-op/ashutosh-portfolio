export type Certification = {
  number: string;
  title: string;
  issuer: string;
  date: string;
  href: string;
};

export const certifications: Certification[] = [
  {
    number: "01",
    title: "Oracle AI Database Certified Foundations Associate",
    issuer: "Oracle University",
    date: "August 2026",
    href: "/resume/dbms.pdf",
  },
  {
    number: "02",
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle University",
    date: "September 2026",
    href: "/resume/ai-essentials.pdf",
  },
];
