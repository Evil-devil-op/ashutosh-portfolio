export type Certification = {
  number: string;
  title: string;
  issuer: string;
  date: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    number: "01",
    title: "DBMS",
    issuer: "Oracle",
    date: "August 2026",
    href: "/resume/dbms.pdf",
  },
  {
    number: "02",
    title: "AI Essentials",
    issuer: "Oracle",
    date: "September 2026",
    href: "/resume/ai-essentials.pdf",
  },
];
