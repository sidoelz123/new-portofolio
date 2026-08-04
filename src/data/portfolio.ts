import { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Ihza Maulana Zakiya',
  shortName: 'I.M. ZAKIYA',
  handle: 'ihzamaulana',
  role: 'Fullstack Developer',
  headline: 'FULLSTACK DEVELOPER',
  subHeadline: 'ARCHITECTING HIGH-PERFORMANCE WEB SYSTEMS, KINETIC INTERFACES & SCALABLE INFRASTRUCTURE',
  location: 'GLOBAL / REMOTE',
  status: 'AVAILABLE FOR ARCHITECTURE & DEV',
  email: 'ihzamaulanaz.77@gmail.com',
  bio: 'Creative Fullstack Developer specializing in high-performance web systems, real-time architectures, kinetic user interfaces, and robust cloud infrastructure. Bridging extreme visual craftsmanship with hardcore backend engineering.',
  stats: [
    { label: 'YEARS EXP.', value: '06+' },
    { label: 'PROJECTS LAUNCHED', value: '48+' },
    { label: 'UPTIME RATE', value: '99.98%' },
    { label: 'LATENCY BENCHMARK', value: '< 18ms' }
  ],
  socials: [
    { label: 'GITHUB', url: 'https://github.com', handle: '@ihzamaulana' },
    { label: 'LINKEDIN', url: 'https://linkedin.com', handle: 'ihzamaulanaz' },
    { label: 'TWITTER / X', url: 'https://x.com', handle: '@ihzamaulana' },
    { label: 'DISCORD', url: 'https://discord.com', handle: 'ihzazakiya#0001' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'aether-os',
    number: '01',
    title: 'Aether OS',
    subtitle: 'WebGL Interactive Operating System',
    category: 'WebGL / Interactive Engine',
    year: '2025',
    description: 'A browser-native spatial computing OS utilizing Three.js, WebGL shaders, and real-time audio reactivity with sub-frame render loops.',
    extendedDescription: 'Aether OS redefines digital spatial environments inside the browser. Built on custom WebGL fragment shaders, GPU instancing, and a custom multi-threaded Web Worker architecture, it renders 100,000+ interactive particles at a locked 120 FPS. Features integrated dynamic memory allocation, audio-reactive node nodes, and custom UI windowing primitives.',
    tags: ['Three.js', 'WebGL / Shaders', 'TypeScript', 'Web Workers', 'Audio API', 'Tailwind v4'],
    metrics: [
      { label: 'PARTICLE COUNT', value: '120,000+' },
      { label: 'TARGET FRAME RATE', value: '120 FPS' },
      { label: 'INITIAL BUNDLE', value: '42 KB' }
    ],
    architecture: [
      'Custom WebGL Render Pipeline & Custom Deferred Shading',
      'Offscreen Canvas & Dedicated Worker Physics Thread',
      'Spatial Quadtree Collision Engine with Dynamic Bounds',
      'Zero-Dependency Custom State Management Bus'
    ],
    demoUrl: 'https://example.com/aether-os',
    githubUrl: 'https://github.com/ihzamaulana/aether-os',
    imageSeed: 'aether-os-sys-3d',
    accentColor: '#70020F'
  },
  {
    id: 'vanguard-fintech',
    number: '02',
    title: 'Vanguard',
    subtitle: 'Next-Gen Fintech Engine & Algo Engine',
    category: 'Fintech / Real-Time Data',
    year: '2025',
    description: 'Ultra-low latency algorithmic trading & financial ledger platform processing over 50,000 transactions/sec with WebSocket pipelines.',
    extendedDescription: 'Vanguard was built to withstand massive market volatility spikes. Utilizing a Node.js microservices cluster paired with Redis Pub/Sub, WebSockets, and D3 canvas rendering, Vanguard streams tick-by-tick orderbook updates directly to clients with under 15ms end-to-end latency.',
    tags: ['Next.js / Express', 'WebSockets', 'Redis', 'D3.js Data Vis', 'PostgreSQL', 'Docker'],
    metrics: [
      { label: 'THROUGHPUT', value: '50,000 TPS' },
      { label: 'END-TO-END LATENCY', value: '14.2 ms' },
      { label: 'DATA INTEGRITY', value: '100% ACID' }
    ],
    architecture: [
      'Distributed Redis Pub/Sub Event Backbone',
      'D3 Canvas Layer for Real-Time Order Book Visualization',
      'Optimistic Concurrency Control for Multi-Thread Ledger Balance',
      'Automated Circuit Breakers & Failover Routing'
    ],
    demoUrl: 'https://example.com/vanguard',
    githubUrl: 'https://github.com/ihzamaulana/vanguard',
    imageSeed: 'vanguard-fintech-data',
    accentColor: '#70020F'
  },
  {
    id: 'monolith-brand',
    number: '03',
    title: 'Monolith',
    subtitle: 'Digital Brand Experience & Kinetic Platform',
    category: 'Brand Experience / Kinetic Web',
    year: '2024',
    description: 'An immersive digital flagship experience for an architectural luxury brand combining brutalist kinetic typography with physics scroll.',
    extendedDescription: 'Monolith pushes typographic expression to its physical limits. Engineered with Framer Motion, custom scroll velocity clamping, matrix transforms, and WebGPU image distortion filters, the site transforms brutalist minimalism into a hypnotic, tactile experience.',
    tags: ['React', 'Motion', 'Kinetic Typography', 'WebGPU', 'Node.js', 'Tailwind CSS'],
    metrics: [
      { label: 'CONVERSION INCREASE', value: '+340%' },
      { label: 'AVG DWELL TIME', value: '4m 12s' },
      { label: 'LIGHTHOUSE SCORE', value: '100 / 100' }
    ],
    architecture: [
      'Inertia-clamped Scroll Velocity Hook Engine',
      'DOM Matrix Transform Optimization for 60fps Mobile Performance',
      'Server-Driven CMS with Incremental Static Regeneration',
      'Custom Variable Font Axis Animation Controllers'
    ],
    demoUrl: 'https://example.com/monolith',
    githubUrl: 'https://github.com/ihzamaulana/monolith',
    imageSeed: 'monolith-architecture-branding',
    accentColor: '#70020F'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'FRONTEND ARCHITECTURE',
    code: 'FE_01',
    skills: [
      { name: 'TypeScript / Modern JS', level: 98, tag: 'CORE' },
      { name: 'React 19 / Next.js', level: 95, tag: 'CORE' },
      { name: 'Motion / Framer Motion', level: 96, tag: 'KINETIC' },
      { name: 'Three.js / WebGL Shaders', level: 88, tag: '3D GRAPHICS' },
      { name: 'Tailwind CSS v4 & CSS Modules', level: 99, tag: 'STYLING' },
      { name: 'Canvas API & D3.js', level: 90, tag: 'DATA VIS' }
    ]
  },
  {
    title: 'BACKEND ENGINES & APIS',
    code: 'BE_02',
    skills: [
      { name: 'Node.js / Express / Bun', level: 96, tag: 'RUNTIME' },
      { name: 'REST & GraphQL APIs', level: 94, tag: 'NETWORKING' },
      { name: 'WebSockets & Server-Sent Events', level: 92, tag: 'REALTIME' },
      { name: 'PostgreSQL / Cloud SQL / Drizzle', level: 90, tag: 'DATABASE' },
      { name: 'Redis Caching & Pub/Sub', level: 88, tag: 'IN-MEMORY' },
      { name: 'Firebase / Firestore & Auth', level: 91, tag: 'CLOUD BE' }
    ]
  },
  {
    title: 'DEVOPS, CLOUD & PERFORMANCE',
    code: 'OPS_03',
    skills: [
      { name: 'Docker / Containerization', level: 89, tag: 'CONTAINERS' },
      { name: 'Cloud Run / GCP Infrastructure', level: 87, tag: 'CLOUD' },
      { name: 'CI/CD Pipelines & GitHub Actions', level: 91, tag: 'AUTOMATION' },
      { name: 'Web Vitals & Performance Tuning', level: 98, tag: 'OPTIMIZATION' },
      { name: 'Git & Monorepo Architecture', level: 95, tag: 'TOOLING' },
      { name: 'System Security & OAuth 2.0', level: 90, tag: 'SECURITY' }
    ]
  }
];

export const BOOT_LOGS = [
  'BIOS REVISION 2026.08.03-ALPHA',
  'CPU: ANTIGRAVITY QUANTUM CORE @ 4.80GHz',
  'MEMORY TEST: 65536MB OK',
  'INITIALIZING GPU SHADER MATRIX...',
  'MOUNTING BRUTALIST UI ENGINE (v4.1.14)...',
  'LOADING KINETIC SKEW DISTORTION VECTORS...',
  'VERIFYING IDENTITY: IHZA MAULANA ZAKIYA',
  'ROLE CONFIRMED: FULLSTACK DEVELOPER',
  'ESTABLISHING WEBSOCKET CONNECTION TO TELEMETRY NODE...',
  'APPLYING DEEP OXBLOOD ACCENT SHADERS (#70020F)...',
  'SYSTEM INTEGRITY: 100% PERFECT',
  'BOOT SEQUENCE COMPLETE. REVEALING SYSTEM INTERFACE.'
];
