export const site = {
  name: "Ashutosh Anand",
  firstName: "Ashutosh",
  lastName: "Anand",
  role: "Full Stack Web Developer",
  location: "Bidupur, Bihar",
  phone: "9955061745",
  phoneHref: "tel:9955061745",
  email: "ashutoshanandmathura@gmail.com",
  emailHref: "mailto:ashutoshanandmathura@gmail.com",
  github: "https://github.com/Ashutosh-Anand-1-Web",
  linkedin: "https://linkedin.com/in/ashutosh-anand-b72040327",
  generalCvPath: "/resume/Ashutosh_Anand_Genral_CV.pdf",
  specializedCvPath: "/resume/Ashutosh_Anand_FullStack_Resume_2.pdf",
  resumePath: "/resume/Ashutosh_Anand_FullStack_Resume_2.pdf",
  tagline:
    "Building full-stack web applications with modern frontend, backend and database technologies.",
  seoTitle: "Ashutosh Anand | Full Stack Web Developer",
  seoDescription:
    "Full Stack Web Developer specializing in React, Node.js, Express.js, REST APIs and modern database technologies.",
  avatarImage: "/images/avatar-glow.jpg",
  heroImage: "/images/headshot-hero.jpg",
  aboutImage: "/images/portrait-editorial.jpg",
  workspaceImage: "/images/workspace-dev.jpg",
} as const;

export const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
] as const;
