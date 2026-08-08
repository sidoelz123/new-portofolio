import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  AchievementItem,
  SystemPing,
} from "../types";

export const PERSONAL_INFO = {
  name: "Ihza Maulana Zakiya",
  shortName: "Ijaadev",
  handle: "ihzamaulana",
  currently: "Open To Work",
  role: "Software Developer",
  headline: "Software Developer",
  document_cv: "https://drive.google.com/file/d/1iF9B9wfvmFSpfpNU5B5jXMDFzeNwyxKD/view?usp=sharing",
  subHeadline:
    "ARCHITECTING HIGH-PERFORMANCE WEB SYSTEMS, KINETIC INTERFACES & SCALABLE INFRASTRUCTURE",
  location: "GLOBAL / REMOTE",
  status: "OPEN TO WORK",
  email: "ihzamaulanaz.77@gmail.com",
  bio: "Software Engineer specializing in frontend development, with over 2 years of experience building responsive, high-performing web interfaces using React.js, Vue.js, and Next.js. Experienced in integrating REST APIs from the backend team into the user interface efficiently and in a well-structured manner. Has a working understanding of DevOps practices, including Docker and CI/CD pipelines, gained through internship experience, to support efficient deployment processes. Writes structured, maintainable code, and enjoys learning new technologies within a collaborative team environment.",
  stats: [
    { label: "YEARS EXP.", value: "02+" },
    { label: "PROJECTS LAUNCHED", value: "10+" },
    { label: "UPTIME RATE", value: "99.98%" },
    { label: "LATENCY BENCHMARK", value: "< 18ms" },
  ],
  socials: [
    { label: "GITHUB", url: "https://github.com/sidoelz123", handle: "@sidoelz123" },
    { label: "LINKEDIN", url: "https://linkedin.com/in/ihzamz", handle: "@ihzamz" },
    { label: "DISCORD", url: "https://discord.com/ihzamaulanazakiya", handle: "ihzazakiya#0001" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "cahtani",
    number: "01",
    title: "Cahtani",
    subtitle: "WebGL Interactive Operating System",
    category: " / Interactive Engine",
    year: "2026",
    description:
      "A browser-native spatial computing OS utilizing Three.js, WebGL shaders, and real-time audio reactivity with sub-frame render loops.",
    extendedDescription:
      "Aether OS redefines digital spatial environments inside the browser. Built on custom WebGL fragment shaders, GPU instancing, and a custom multi-threaded Web Worker architecture, it renders 100,000+ interactive particles at a locked 120 FPS. Features integrated dynamic memory allocation, audio-reactive node nodes, and custom UI windowing primitives.",
    tags: ["Three.js", "WebGL / Shaders", "TypeScript", "Web Workers", "Audio API", "Tailwind v4"],
    metrics: [
      { label: "PARTICLE COUNT", value: "120,000+" },
      { label: "TARGET FRAME RATE", value: "120 FPS" },
      { label: "INITIAL BUNDLE", value: "42 KB" },
    ],
    architecture: [
      "Custom WebGL Render Pipeline & Custom Deferred Shading",
      "Offscreen Canvas & Dedicated Worker Physics Thread",
      "Spatial Quadtree Collision Engine with Dynamic Bounds",
      "Zero-Dependency Custom State Management Bus",
    ],
    demoUrl: "https://cahtani.vercel.app",
    githubUrl: "https://github.com/ihzamaulana/aether-os",
    imageSeed: "aether-os-sys-3d",
    accentColor: "#70020F",
  },
  {
    id: "vanguard-fintech",
    number: "02",
    title: "Vanguard",
    subtitle: "Next-Gen Fintech Engine & Algo Engine",
    category: "Fintech / Real-Time Data",
    year: "2025",
    description:
      "Ultra-low latency algorithmic trading & financial ledger platform processing over 50,000 transactions/sec with WebSocket pipelines.",
    extendedDescription:
      "Vanguard was built to withstand massive market volatility spikes. Utilizing a Node.js microservices cluster paired with Redis Pub/Sub, WebSockets, and D3 canvas rendering, Vanguard streams tick-by-tick orderbook updates directly to clients with under 15ms end-to-end latency.",
    tags: ["Next.js / Express", "WebSockets", "Redis", "D3.js Data Vis", "PostgreSQL", "Docker"],
    metrics: [
      { label: "THROUGHPUT", value: "50,000 TPS" },
      { label: "END-TO-END LATENCY", value: "14.2 ms" },
      { label: "DATA INTEGRITY", value: "100% ACID" },
    ],
    architecture: [
      "Distributed Redis Pub/Sub Event Backbone",
      "D3 Canvas Layer for Real-Time Order Book Visualization",
      "Optimistic Concurrency Control for Multi-Thread Ledger Balance",
      "Automated Circuit Breakers & Failover Routing",
    ],
    demoUrl: "https://example.com/vanguard",
    githubUrl: "https://github.com/ihzamaulana/vanguard",
    imageSeed: "vanguard-fintech-data",
    accentColor: "#70020F",
  },
  {
    id: "monolith-brand",
    number: "03",
    title: "Monolith",
    subtitle: "Digital Brand Experience & Kinetic Platform",
    category: "Brand Experience / Kinetic Web",
    year: "2024",
    description:
      "An immersive digital flagship experience for an architectural luxury brand combining brutalist kinetic typography with physics scroll.",
    extendedDescription:
      "Monolith pushes typographic expression to its physical limits. Engineered with Framer Motion, custom scroll velocity clamping, matrix transforms, and WebGPU image distortion filters, the site transforms brutalist minimalism into a hypnotic, tactile experience.",
    tags: ["React", "Motion", "Kinetic Typography", "WebGPU", "Node.js", "Tailwind CSS"],
    metrics: [
      { label: "CONVERSION INCREASE", value: "+340%" },
      { label: "AVG DWELL TIME", value: "4m 12s" },
      { label: "LIGHTHOUSE SCORE", value: "100 / 100" },
    ],
    architecture: [
      "Inertia-clamped Scroll Velocity Hook Engine",
      "DOM Matrix Transform Optimization for 60fps Mobile Performance",
      "Server-Driven CMS with Incremental Static Regeneration",
      "Custom Variable Font Axis Animation Controllers",
    ],
    demoUrl: "https://example.com/monolith",
    githubUrl: "https://github.com/ihzamaulana/monolith",
    imageSeed: "monolith-architecture-branding",
    accentColor: "#70020F",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "FRONTEND ARCHITECTURE",
    code: "FE_01",
    skills: [
      { name: "TypeScript / Modern JS", level: 80, tag: "CORE" },
      { name: "React 19 / Next.js", level: 85, tag: "CORE" },
      { name: "Vuejs", level: 80, tag: "CORE" },
      { name: "Tailwind CSS v4 & CSS Modules", level: 95, tag: "STYLING" },
      { name: "Motion / Framer Motion", level: 70, tag: "KINETIC" },
      { name: "Three.js / WebGL Shaders", level: 80, tag: "3D GRAPHICS" },
    ],
  },
  {
    title: "BACKEND ENGINES & APIS",
    code: "BE_02",
    skills: [
      { name: "Node.js / Express / Bun", level: 85, tag: "RUNTIME" },
      { name: "Golang / GIN", level: 80, tag: "CORE" },
      { name: "REST & GraphQL APIs", level: 80, tag: "NETWORKING" },
      { name: "WebSockets & Server-Sent Events", level: 92, tag: "REALTIME" },
      { name: "PostgreSQL / Cloud SQL / Drizzle", level: 90, tag: "DATABASE" },
      { name: "Redis Caching & Pub/Sub", level: 88, tag: "IN-MEMORY" },
      { name: "Supabase", level: 80, tag: "CLOUD BE" },
    ],
  },
  {
    title: "DEVOPS, CLOUD & PERFORMANCE",
    code: "OPS_03",
    skills: [
      { name: "Docker / Containerization", level: 89, tag: "CONTAINERS" },
      { name: "Terraform / GCP Infrastructure", level: 70, tag: "CLOUD" },
      { name: "CI/CD Pipelines & GitHub Actions", level: 91, tag: "AUTOMATION" },
      { name: "Web Vitals & Performance Tuning", level: 98, tag: "OPTIMIZATION" },
      { name: "Git & Monorepo Architecture", level: 95, tag: "TOOLING" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    employment_type: "Full-time (remote)",
    company: "PT Okta Prima Mulya",
    period: "May 2025 – April 2026",
    description: [
      "Continued development of an existing e-commerce platform, covering both the customer website and back office system, using React.js, Next.js, and Tailwind CSS.",
      "Fixed bugs and adjusted layouts to be responsive across devices (cross-browser & mobile responsive) on both sides of the application.",
      "Integrated REST APIs from the backend team into both the customer website and back office system efficiently and in a well-structured manner.",
      "Built reusable pages and components to speed up new feature development and maintain visual consistency across the product.",
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Web Developer",
    employment_type: "Intern (remote)",
    company: "PT Bima Digital Indonesia",
    period: "January 2025 – June 2025",
    description: [
      "Worked on real frontend web development projects as part of a certified internship program.",
      "Applied clean code practices and modular component architecture in application development.",
      "Collaborated within a team and presented development results to mentors and the evaluation team.",
    ],
  },
  {
    id: "exp-3",
    role: "Project Based Intern: Frontend Developer",
    employment_type: "Intern (remote)",
    company: "Core Initiative Studio X Rakamin Academy",
    period: "January 2024",
    description: [
      "Worked on real industry-based frontend project case studies as part of a collaborative internship program.",
      "Applied HTML, CSS, modern JavaScript, and frontend frameworks in developing web features.",
      "Presented project results to mentors and the program evaluation team.",
    ],
  },
  {
    id: "exp-4",
    role: "Devops Engineer",
    employment_type: "Intern (onsite)",
    company: "Sekawan Media",
    period: "Agustus 2023 - Desember 2023",
    description: [
      "Built and configured CI/CD pipelines to automate the application's build, testing, and deployment processes.",
      "Containerized applications using Docker to ensure consistency between development and production environments.",
      "Assisted in monitoring application availability and performance, and supported deployment processes to the server.",
    ],
  },
  {
    id: "exp-5",
    role: "Production Operator",
    employment_type: "Full-time (onsite)",
    company: "PT Suryaraya Rubberindo Industries",
    period: "January 2019 - July 2020",
    description: [
      "Operated and monitored motorcycle tire curing machines safely in accordance with SOP and workplace safety (K3) standards.",
      "Performed thorough visual quality control to identify and minimize defective (rejected) products.",
      "Maintained a high work pace and fast production rhythm to meet the company's daily output targets.",
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: "D4 Teknik Informatika",
    institution: "Politeknik Harapan Bersama",
    period: "2020 – 2024",
  },
  {
    id: "edu-2",
    degree: "Teknik Kendaraan Ringan",
    institution: "SMK Negeri 1 Tonjong",
    period: "2015 – 2018",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Certified Golang Backend Development",
    issuer: "Sanbercode",
    year: "2024",
    link: "https://drive.google.com/file/d/1qQmCwyAjHL0b_CGygLdepqk0IhdwguXr/view?usp=sharing",
  },
  {
    id: "ach-2",
    title: "2nd Place Winner, CSS Battle Competition - IT Days 2023",
    issuer: "Universitas Kristen Indonesia Toraja",
    year: "2023",
    link: "https://drive.google.com/file/d/18TVHFBo4VPj2surxsNyF15f1lZrf5pfa/view?usp=sharing",
  },
  {
    id: "ach-3",
    title: "Certified Belajar Dasar - Dasar Devops",
    issuer: "Dicoding",
    year: "2023",
    link: "https://drive.google.com/file/d/1VXjYdIv2oST9xNjoX8N_neRDD9y2wsyJ/view?usp=sharing",
  },
  {
    id: "ach-4",
    title: "Certified Belajar Jaringan Komputer untuk Pemula",
    issuer: "Dicoding",
    year: "2023",
    link: "https://drive.google.com/file/d/1hw4oU8bUayrTgR4URXznNyupniHZ368k/view?usp=sharing",
  },
  {
    id: "ach-5",
    title: "Certified Frontend Web Development - MSIB",
    issuer: "Skillvul",
    year: "2022",
    link: "https://drive.google.com/file/d/1fOKSF28uFI68mwA4Ui1pVFvvzdLLccYM/view?usp=sharing",
  },
  {
    id: "ach-6",
    title: "Certificate of Completion Danone - Kampus Merdeka 2022: Product Innovation Challenge",
    issuer: "Skillvul",
    year: "2022",
    link: "https://drive.google.com/file/d/1nCYd83hYvp4paN11psksNh7_GCKciB_j/view?usp=sharing",
  },
  {
    id: "ach-7",
    title: "Certificate of Completion Javascript Dasar",
    issuer: "Skillvul",
    year: "2022",
    link: "https://drive.google.com/file/d/1tiKRdO-R51m7x5Jc8X7wFWtJ-O-skxC5/view?usp=sharing",
  },
  {
    id: "ach-8",
    title: "Certificate of Completion CSS Dasar",
    issuer: "Skillvul",
    year: "2022",
    link: "https://drive.google.com/file/d/1220WwoqJvFgM8qpwcqB6w-zPHK2vUOe1/view?usp=sharing",
  },
  {
    id: "ach-9",
    title: "Certificate of Completion HTML Dasar",
    issuer: "Skillvul",
    year: "2022",
    link: "https://drive.google.com/file/d/1wzB0QQT2GTlBrKMbe6KxwkMK4kEPkttZ/view?usp=sharing",
  },
  {
    id: "ach-10",
    title: "Certificate of Completion Web Development Pemula",
    issuer: "Skillvul",
    year: "2022",
    link: "https://drive.google.com/file/d/133paf2-4PL61Cd1ajCX-yqbHU733Vy25/view?usp=sharing",
  },
  {
    id: "ach-11",
    title: "Certificate of Completion UI/UX Design Mastery",
    issuer: "Skillvul",
    year: "2022",
    link: "https://drive.google.com/file/d/1-ISp5xO61nj0mK-HS8V56N5nKA02hFDL/view?usp=sharing",
  },
];

export const BOOT_LOGS = [
  "BIOS REVISION 2026.08.03-ALPHA",
  "CPU: ANTIGRAVITY QUANTUM CORE @ 4.80GHz",
  "MEMORY TEST: 65536MB OK",
  "INITIALIZING GPU SHADER MATRIX...",
  "MOUNTING BRUTALIST UI ENGINE (v4.1.14)...",
  "LOADING KINETIC SKEW DISTORTION VECTORS...",
  "VERIFYING IDENTITY: IHZA MAULANA ZAKIYA",
  "ROLE CONFIRMED: FULLSTACK DEVELOPER",
  "ESTABLISHING WEBSOCKET CONNECTION TO TELEMETRY NODE...",
  "APPLYING DEEP OXBLOOD ACCENT SHADERS (#70020F)...",
  "SYSTEM INTEGRITY: 100% PERFECT",
  "BOOT SEQUENCE COMPLETE. REVEALING SYSTEM INTERFACE.",
];

export const SYSTEM_PING: SystemPing = {
  host: "ijaadev.cloud",
  bytes: 64,
  seq: 1,
  ttl: 58,
  latency: "12.4 ms",
  status: "100% OPERATIONAL",
};
