import { Project, SkillCategory, NavLink } from "./types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A real-time analytics platform with interactive charts, user management, and subscription billing integration.",
    longDescription:
      "Built a full-stack SaaS analytics dashboard that provides businesses with real-time insights into their key metrics. The platform features interactive charts powered by Recharts, a comprehensive user management system with role-based access control, and seamless Stripe subscription billing. The backend uses Next.js API routes with Prisma ORM and PostgreSQL for data persistence.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Recharts"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYHL1GuhqnBXEZ_o1PabJcauavDxidfb0WQ&s",
    liveUrl: "https://example.com/saas-dashboard",
    githubUrl: "https://github.com/example/saas-dashboard",
    featured: true,
    year: "2024",
    screenshots: [
      "/images/saas-dashboard-overview-screen.jpg",
      "/images/saas-dashboard-analytics-screen.jpg",
    ],
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "An AI-powered writing assistant that generates blog posts, social media copy, and marketing content using GPT-4.",
    longDescription:
      "Developed an AI-powered content generation platform that leverages OpenAI's GPT-4 API to help marketers and content creators produce high-quality written content at scale. Features include custom tone/style settings, content templates, a rich text editor, and a history dashboard. Built with Next.js App Router, Tailwind CSS, and Vercel AI SDK for streaming responses.",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK", "Tailwind CSS", "TypeScript"],
    image: "https://www.figma.com/community/thumbnail?resource_id=1381606779001948175&resource_type=plugin",
    liveUrl: "https://example.com/ai-writer",
    githubUrl: "https://github.com/example/ai-writer",
    featured: true,
    year: "2024",
    screenshots: [
      "/images/ai-writer-editor-screen.jpg",
      "/images/ai-writer-templates-screen.jpg",
    ],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce storefront with product catalog, cart, checkout, and order management built on Next.js.",
    longDescription:
      "Engineered a performant e-commerce platform featuring a dynamic product catalog with advanced filtering, a persistent shopping cart, Stripe-powered checkout, and a full order management system. The storefront uses Next.js static generation for product pages, ensuring blazing-fast load times. Includes an admin panel for inventory management and order fulfillment.",
    tags: ["Next.js", "Stripe", "Sanity CMS", "Tailwind CSS", "TypeScript"],
    image: "https://miro.medium.com/v2/resize:fit:1400/1*rDN1RbUDmaoNHiKfXSURog.png",
    liveUrl: "https://example.com/shop",
    githubUrl: "https://github.com/example/ecommerce",
    featured: true,
    year: "2023",
    screenshots: [
      "/images/ecommerce-product-listing-screen.jpg",
      "/images/ecommerce-checkout-screen.jpg",
    ],
  },
  {
    slug: "devops-monitor",
    title: "DevOps Monitoring Tool",
    description:
      "A lightweight infrastructure monitoring dashboard that tracks server health, uptime, and deployment pipelines.",
    longDescription:
      "Created a DevOps monitoring tool that aggregates metrics from multiple cloud providers (AWS, GCP, Azure) into a unified dashboard. Features include real-time server health monitoring, uptime tracking with alerting, deployment pipeline visualization, and log aggregation. Built with a Node.js backend, WebSockets for live updates, and a React frontend.",
    tags: ["React", "Node.js", "WebSockets", "Docker", "AWS", "TypeScript"],
    image: "https://images.ctfassets.net/vfkpgemp7ek3/3409471238/2275f96a215aaaa00f55e7ece9adff37/top-social-networking-apps-ww-may-2019.jpg",
    githubUrl: "https://github.com/example/devops-monitor",
    featured: false,
    year: "2023",
    screenshots: ["/images/devops-monitor-metrics-screen.jpg"],
  },
  {
    slug: "social-app",
    title: "Social Networking App",
    description:
      "A full-stack social platform with real-time messaging, posts, follows, and notifications.",
    longDescription:
      "Built a feature-rich social networking application with real-time messaging powered by Socket.io, a post feed with likes and comments, a follow/follower system, and push notifications. The app uses Next.js for the frontend, Express.js for the API, MongoDB for data storage, and Redis for caching and session management.",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis", "Express", "TypeScript"],
    image: "https://res.cloudinary.com/rangle/image/upload/v1659111845/rangle.io/blogs/the-six-pieces-of-a-design-system/30.png",
    githubUrl: "https://github.com/example/social-app",
    featured: false,
    year: "2023",
    screenshots: ["/images/social-app-feed-screen.jpg"],
  },
  {
    slug: "design-system",
    title: "Component Design System",
    description:
      "A comprehensive React component library with 50+ accessible, themeable UI components and Storybook documentation.",
    longDescription:
      "Designed and built a production-ready React component library featuring 50+ accessible UI components following WAI-ARIA guidelines. The library includes a robust theming system, dark mode support, and comprehensive Storybook documentation with interactive examples. Published to npm and used across multiple internal projects.",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "Tailwind CSS"],
    image: "https://miro.medium.com/v2/resize:fit:2000/0*uPoEwf1ACjDk0BDF.png",
    liveUrl: "https://example.com/design-system",
    githubUrl: "https://github.com/example/design-system",
    featured: false,
    year: "2022",
    screenshots: ["/images/design-system-components-screen.jpg"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", level: 5 },
      { name: "Next.js", icon: "▲", level: 5 },
      { name: "TypeScript", icon: "🔷", level: 5 },
      { name: "Tailwind CSS", icon: "🎨", level: 5 },
      { name: "Framer Motion", icon: "🎭", level: 4 },
      { name: "Vue.js", icon: "💚", level: 3 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢", level: 5 },
      { name: "PostgreSQL", icon: "🐘", level: 4 },
      { name: "MongoDB", icon: "🍃", level: 4 },
      { name: "Prisma", icon: "◆", level: 4 },
      { name: "GraphQL", icon: "◉", level: 3 },
      { name: "Redis", icon: "🔴", level: 3 },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Git & GitHub", icon: "🐙", level: 5 },
      { name: "Docker", icon: "🐳", level: 4 },
      { name: "AWS", icon: "☁️", level: 3 },
      { name: "Vercel", icon: "▲", level: 5 },
      { name: "Figma", icon: "🎨", level: 4 },
      { name: "CI/CD", icon: "🔄", level: 4 },
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/alexmorgan",
  linkedin: "https://linkedin.com/in/alexmorgan",
  twitter: "https://twitter.com/alexmorgan",
  email: "hello@alexmorgan.dev",
};

export const personalInfo = {
  name: "Alex Morgan",
  title: "Full-Stack Developer",
  tagline: "I build fast, beautiful, and scalable web applications.",
  bio: "Hey! I'm Alex, a full-stack developer with 5+ years of experience crafting digital products that people love. I specialize in React and Next.js ecosystems, building everything from SaaS platforms to e-commerce solutions. When I'm not coding, you'll find me contributing to open source, writing technical articles, or exploring the mountains.",
  location: "San Francisco, CA",
  available: true,
  resumeUrl: "/resume.pdf",
};
