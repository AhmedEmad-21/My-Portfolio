import {
  Code,
  Server,
  Database,
  Paintbrush,
  Type,
  GitBranch,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Link2Icon,
  Layers,
  Braces,
  Zap,
  RefreshCw,
  Cloud,
  Component,
  Users,
  Settings2,
  Activity,
  Accessibility,
  MonitorSmartphone,
  Spline,
  BookOpen,
  Layout,
  BarChart2,
  FileText,
  Phone,
} from "lucide-react";

export const fetchData = [
  { label: "User", value: "aj7@garuda" },
  { label: "OS", value: "Garuda Linux Broadwing x86_64" },
  { label: "Host", value: "ASUS TUF Gaming F15 FX506HF" },
  { label: "Kernel", value: "6.14.2-zen1-1-zen" },
  { label: "Packages", value: "1519 (pacman)" },
  { label: "Shell", value: "zsh 5.9" },
  { label: "CPU", value: "i5-11400H (12) @ 4.50GHz" },
  { label: "GPU", value: "Intel UHD + RTX 2050" },
  { label: "Memory", value: "15725MiB" },
  { label: "Peak Uptime", value: "13 hour's" },
];

export const skillsSections = [
  {
    title: "Back-End Development",
    icon: Server,
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "NestJS", icon: Server },
      { name: "RESTful APIs", icon: Cloud },
      { name: "Microservices", icon: Component },
      { name: "JWT Authentication", icon: Settings2 },
      { name: "Middleware", icon: Layers },
      { name: "Security (Helmet, Rate Limiting)", icon: Activity },
    ],
  },
  {
    title: "Databases & Data Modeling",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "MongoDB Atlas", icon: Cloud },
      { name: "PostgreSQL", icon: Database },
      { name: "SQL Server", icon: Database },
      { name: "Mongoose", icon: Database },
      { name: "Data Modeling (ERD)", icon: BarChart2 },
    ],
  },
  {
    title: "Architecture & Design Patterns",
    icon: Layers,
    skills: [
      { name: "Layered Architecture", icon: Layers },
      { name: "MVC Pattern", icon: Settings2 },
      { name: "Design Patterns", icon: Braces },
      { name: "Authentication & Authorization", icon: Activity },
    ],
  },
  {
    title: "Front-End Basics",
    icon: Layout,
    skills: [
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Braces },
      { name: "Bootstrap", icon: Layers },
      { name: "Tailwind CSS", icon: Paintbrush },
      { name: "JavaScript", icon: Code },
      { name: "TypeScript", icon: Type },
      { name: "React.js (Components, Hooks)", icon: Component },
      { name: "Next.js", icon: Link2Icon },
    ],
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "Vercel Deployment", icon: Cloud },
      { name: "AJV Validation", icon: Activity },
      { name: "Multer", icon: FileText },
    ],
  },
];

export const facts = [
  "Back-End Engineer",
  "Node.js Developer",
  "Full-Stack Developer",
  "Giza, Egypt",
  "Continuous Learner",
  "Open-Source Contributor",
];

export const timeline = [
  { year: "2019", detail: "Started exploring electronics & tech." },
  { year: "2020", detail: "Discovered coding & web development." },
  { year: "2021", detail: "Built a few small projects." },
  { year: "2023", detail: "Learned more about web development." },
  { year: "2025", detail: "Learning New things and Improving my skills..." },
];

export const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+20 1015815854",
    href: "tel:+201015815854",
    color: "text-green-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ahmedand3509@gmail.com",
    href: "mailto:ahmedand3509@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/AhmedEmad-21",
    href: "https://github.com/AhmedEmad-21",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ahmed-emad21",
    href: "https://linkedin.com/in/ahmed-emad21",
    color: "text-blue-600",
  },
];

export const projectData = [
  {
    name: "Clinic Management System",
    description: "Full-featured Back-End Management System for a psychological clinic. Features include client booking without registration, secure doctor dashboard, automatic appointment scheduling (online/offline), and complete CRUD operations for managing branches, client files, and session status.",
    tech: ["Node.js", "Express.js", "Layered Architecture", "MongoDB Atlas", "Mongoose", "JWT", "Helmet", "Multer", "AJV"],
    live: "https://clinic-system-hazel.vercel.app/",
    zoom: 0.75,
  },
  {
    name: "ASMA Kitchens",
    description: "Modern, performant portfolio website for a kitchen design company. Built from the ground up with a professional stack focusing on clean code, responsiveness, and utilizing the Next.js App Router.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ESLint", "React Hooks"],
    live: "https://asma-kitchens.vercel.app/",
    github: "https://github.com/AhmedEmad-21/ASMA-Project",
  },
  {
    name: "My Portfolio",
    description: "Modern, responsive personal portfolio website showcasing projects, skills, and contact information in a clean and interactive way.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    live: "https://ahmed-emad.vercel.app/",
    github: "https://github.com/AhmedEmad-21/My-Portfolio-main",
  },
  {
    name: "Bilingual Search Engine",
    description: "Search engine capable of indexing and searching over 150,000 websites. Supports multi-keyword queries in both Arabic and English with a ranking algorithm for relevant results.",
    tech: ["Web Scraping", "Inverted Indexing", "PageRank Algorithm", "Database Management"],
    github: "https://github.com/AhmedEmad-21/Search-Engine",
    src: "/assets/search-engine-demo.png",
    linkedin: "https://www.linkedin.com/posts/ahmed-emad21_searchengine-webscraping-informationretrieval-activity-7327823476583469056-lGW-?utm_source=social_share_send&utm_medium=android_app",
  },
  {
    name: "Stopwatch",
    description: "Stopwatch that tracks time down to milliseconds.Ability to pause, reset, and log lap times.",
    tech: ["HTML", "CSS", "Javascript"],
    live: "https://ahmedemad-21.github.io/Stopwatch-Timer-Application/",
    github: "https://github.com/AhmedEmad-21/Stopwatch-Timer-Application",

  },
  {
    name: "Random Password Application",
    description: "Ability to create different strong passwords.",
    tech: ["HTML", "CSS", "Javascript"],
    live: "https://ahmedemad-21.github.io/Random-Password-Application/",
    github: "https://github.com/AhmedEmad-21/Random-Password-Application",

  },
  {
    name: "Dynamic To Do List Application",
    description: "The To-Do List app allows users to: Add and delete tasks , Mark tasks as complete and Persist tasks using Local Storage, so even if the page is refreshed or closed, tasks remain saved.",
    tech: ["HTML", "CSS", "Javascript"],
    live: "https://ahmedemad-21.github.io/Dynamic-To-Do-List-Application/",
    github: "https://github.com/AhmedEmad-21/Dynamic-To-Do-List-Application",

  },
];
