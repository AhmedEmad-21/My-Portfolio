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
    title: "Front-End Development",
    icon: Layout,
    skills: [
      { name: "HTML", icon: Code },
      { name: "CSS", icon: Braces },
      { name: "Bootstrap", icon: Layers },
      { name: "Tailwind CSS", icon: Paintbrush },
      { name: "JavaScript (ES6+)", icon: Code },
      { name: "TypeScript", icon: Type },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Github },
      { name: "DOM Manipulation", icon: Braces },
      { name: "Event Handling", icon: Zap },
      { name: "Async/Await", icon: RefreshCw },
      { name: "Fetch API", icon: Cloud },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Component,
    skills: [
      { name: "React.js (Components, Hooks)", icon: Component },
      { name: "Next.js (SSR, SSG, ISR, API Routes)", icon: Link2Icon },
      { name: "Node.js", icon: Server },
    ],
  },
  {
    title: "State Management",
    icon: Settings2,
    skills: [
      { name: "Context API", icon: Users },
      { name: "Redux", icon: RefreshCw },
      { name: "Redux Toolkit", icon: Settings2 },
    ],
  },
  {
    title: "Advanced Web Development",
    icon: BarChart2,
    skills: [
      { name: "Performance Optimization", icon: Activity },
      { name: "Web Accessibility", icon: Accessibility },
      { name: "Responsive Design", icon: MonitorSmartphone },
      { name: "Styled Components", icon: Braces },
    ],
  },
];

export const facts = [
  "Student",
  "Passion for tech",
  "Learner",
  "Aspiring Full Stack Developer",
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
    name: "ASMA Project",
    description: "Delivered a modern, performant portfolio website for a kitchen design company (ASMA Kitchens).",
    tech: ["NextJS", "React(Hooks)", "TypeScript", "TailwindCSS", "ESlint"],
    live: "https://asma-project.vercel.app/",
    github: "https://github.com/AhmedEmad-21/ASMA-Project",
    // src: "/assets/asma-demo.png",
    // linkedin: "https://www.linkedin.com/in/example/",
  },
  {
    name: "Search Engine",
    description: "Co-developed a search engine capable of indexing and searching over 150,000 websites. The engine supports multi-keyword queries in both Arabic and English and uses a ranking algorithm to deliver relevant results.",
    tech: ["NextJS", "React(Hooks)", "TypeScript", "Fetche API"],
    github: "https://github.com/AhmedEmad-21/Search-Engine",
    src: "/assets/search-engine-demo.png", 
    linkedin: "https://www.linkedin.com/posts/ahmed-emad21_searchengine-webscraping-informationretrieval-activity-7327823476583469056-lGW-?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEpb55QBltbGjFTxnr5RJPwUsVgUaC-FiI0&utm_campaign=whatsapp",
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
