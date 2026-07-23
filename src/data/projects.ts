import {
  Music,
  Brain,
  Shield,
  Layers,
  Code2,
  Server,
  Cloud,
  type LucideIcon,
} from "lucide-react";

export interface Project {
  title: string;
  url: string;
  description: string;
  linkLabel: string;
  gradientClass: string;
  icon: LucideIcon;
}

export const projects: Project[] = [
  {
    title: "Fanwave",
    url: "https://fanwave.io",
    description:
      "Live music platform where artists get booked and fans collect show moments. Landing page and full app.",
    linkLabel: "Visit fanwave.io",
    gradientClass: "project-card__visual--fanwave",
    icon: Music,
  },
  {
    title: "BrainBud",
    url: "https://brainbud.app",
    description:
      "Browser extension and landing page that helps you reclaim independent thinking from AI autopilot.",
    linkLabel: "Visit brainbud.app",
    gradientClass: "project-card__visual--brainbud",
    icon: Brain,
  },
  {
    title: "Rocksalt",
    url: "https://github.com/rocksaltdev/rocksalt",
    description:
      "Open-source ICE reporting platform — real-time crowdsourced map built for speed, anonymity, and resilience.",
    linkLabel: "View on GitHub",
    gradientClass: "project-card__visual--rocksalt",
    icon: Shield,
  },
  {
    title: "Agile Poker",
    url: "https://v0-agile-poker-web.vercel.app",
    description:
      "Real-time planning poker for dev teams. JackBox-style rooms — no accounts, no tracking, just estimate.",
    linkLabel: "Try it live",
    gradientClass: "project-card__visual--poker",
    icon: Layers,
  },
];

export interface SkillGroup {
  label: string;
  icon: LucideIcon;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    icon: Code2,
    tags: [
      "TypeScript",
      "React",
      "Angular",
      "Tailwind CSS",
      "Mobile-First Design",
      "Chrome Extensions",
    ],
  },
  {
    label: "Backend & Data",
    icon: Server,
    tags: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Real-time Systems",
    ],
  },
  {
    label: "Tools & Delivery",
    icon: Cloud,
    tags: [
      "Git & GitHub",
      "CI/CD",
      "Vercel",
      "AWS",
      "Agile / Scrum",
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
];
