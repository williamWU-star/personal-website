import { ProjectCase, CareerTimeline, SkillCategory, Testimonial } from "./types";

// Import local premium assets generated in previous steps
import avatarImage from "./assets/images/designer_avatar_1779332132503.png";
import heroImage from "./assets/images/hero_background_1779332152759.png";

export const DESIGNER_INFO = {
  name: "Ethan Chen",
  zhName: "陳奕廷",
  title: "Principal Product Designer / Design Engineer",
  zhTitle: "資深產品設計師 / 設計工程師",
  location: "Taipei, Taiwan",
  avatar: avatarImage,
  heroBg: heroImage,
  tagline: "Bridging the gap between user psychology, robust design systems, and frontend architecture.",
  zhTagline: "連結使用者心理學、嚴謹的設計系統與前端開發架構，打造極致的使用體驗。",
  aboutMe: "I am a Product Designer with a background in Human-Computer Interaction and Computer Science. For over 8 years, I have helped design-led product teams structure scalable design tokens, build elegant interactive user interfaces, and deliver user experiences that feel intuitive, human, and modern.",
  zhAboutMe: "我是個擁有「人機互動」與「電腦科學」背景的產品設計師。在過去 8 年的職業生涯中，我協助以設計為導向的產品團隊建立可擴展的設計標記（Design Tokens）、打造優雅的高互動介面，並交付充滿直覺與溫度、既符合使用者心理又具現代感的數位產品。",
  metrics: [
    { label: "Years Experience", zhLabel: "硬核設計經驗", value: "8+" },
    { label: "Shipped Products", zhLabel: "成功落地產品", value: "24" },
    { label: "Design Patents", zhLabel: "設計亮點專利", value: "3" },
    { label: "Client Satisfaction", zhLabel: "合作夥伴信賴度", value: "100%" }
  ]
};

export const PROJECTS: ProjectCase[] = [
  {
    id: "aura",
    title: "Aura Space",
    category: "Mental Wellness & Spatial Audio App",
    year: "2025",
    client: "Aura Labs Inc.",
    role: "Lead Product Designer & UX Researcher",
    description: "An immersive mental-wellness application utilizing biometric feedback and spatial audio environments to help knowledge workers disconnect.",
    detailedDescription: "Aura Space reimagines digital wellness. Instead of standard lists and rigid trackers, it utilizes circular generative visualizers tracking breathing cycles, paired with spatial interactive soundscapes. The design focuses heavily on fluid bezier-animations and dynamic layout elements to soothe the user's focus.",
    imageUrl: "https://picsum.photos/seed/aura/1200/800", // Fallback beautiful gradient or picsum
    colorTheme: "from-indigo-900 via-purple-900 to-pink-950",
    accentColor: "#6366f1",
    metrics: [
      { label: "User Daily Active Retention", value: "+42%" },
      { label: "Stress Metric Reduction", value: "35%" },
      { label: "App Store Feature Duration", value: "3 Wks" }
    ],
    tags: ["iOS Native", "Spatial Audio", "Haptic Experience", "Generative Art", "Human Interface Guidelines"],
    challenges: [
      "Integrating bio-metric feedback lines without creating an alarming or clinical dashboard aesthetics.",
      "Ensuring responsive layout scaling across all iPad and Apple Watch form factors."
    ],
    solutions: [
      "Designed a fluid 'water ripple' pulse indicator that softly breathes instead of hard-to-read charts.",
      "Developed a design token library to automate responsive padding rules and font tracking scales."
    ],
    process: [
      { phase: "01. Ideation", details: "Conducted user research with 15 remote digital nomads to understand stress triggers." },
      { phase: "02. Wireframing", details: "Molded circular gesture controls for sound-mixing volume settings, avoiding bulky sliders." },
      { phase: "03. Prototyping", details: "Coded interactive high-fidelity micro-interactions inside Framer Motion to mimic real liquid flow." },
      { phase: "04. Usability Lab", details: "Tested eye-tracking patterns to eliminate gaze distraction on ambient screens." }
    ]
  },
  {
    id: "chronos",
    title: "Chronos Planner",
    category: "High-Density Developer Dashboard & Focus Engine",
    year: "2024",
    client: "Sycron Corp.",
    role: "Founding Designer",
    description: "An ultra-optimized time planner optimized for engineers featuring dense grids, keyboard-only shortcuts, and custom IDE themes.",
    detailedDescription: "Chronos is engineered for builders. Moving away from typical colorful calendars, Chronos introduces a command-palette-driven terminal interface merged with visual block calendars. Every margin, cell padding, and border radius is optimized for maximum density and clean readability during long coding phases.",
    imageUrl: "https://picsum.photos/seed/chronos/1200/800",
    colorTheme: "from-slate-900 via-zinc-900 to-neutral-950",
    accentColor: "#10b981",
    metrics: [
      { label: "Time Tracking Accuracy", value: "+68%" },
      { label: "Daily Active/Monthly Active Ratio", value: "0.78" },
      { label: "Average Setup Speed", value: "< 2 Min" }
    ],
    tags: ["Web Architecture", "Keyboard Navigation", "Design Tokens", "Dark Mode UI", "Performance Tweaks"],
    challenges: [
      "Rendering huge data blocks with zero latency on legacy web layouts.",
      "Structuring visual density so that multiple overlays do not overwhelm the engineer."
    ],
    solutions: [
      "Optimized standard CSS files into atomic utility rules, enabling instant canvas redraw cycles.",
      "Implemented a nested keyboard navigation tree where keys 'J', 'K', 'L' allow natural grid cursor hops."
    ],
    process: [
      { phase: "01. Engineering Audit", details: "Interviewed 30 Senior Engineers to observe calendar frustration and shortcut behaviors." },
      { phase: "02. Layout Grid Refinement", details: "Settled on an 8px grid with explicit 4px sub-intervals, keeping visual lines hairline crisp." },
      { phase: "03. Shortcut System Design", details: "Created dynamic overlay diagrams mapping common IDE keybind logic directly to UI tabs." },
      { phase: "04. Beta Delivery", details: "Rolled out visual customization parameters for typography scaling from 12px to 18px levels." }
    ]
  },
  {
    id: "prism",
    title: "Prism Token Library",
    category: "Developer-Design Cooperation Suite",
    year: "2024",
    client: "Anthesis Open Source",
    role: "Principal Product Designer",
    description: "An open-source developer dashboard mapping complex design variables into customizable React components asynchronously.",
    detailedDescription: "Designed to solve the age-old designer-to-developer transition. Prism visualizes design tokens (colors, durations, layouts, themes) and maps them cleanly into production code, allowing real-time inspection, visual tuning, and automated Github branch generation with one click.",
    imageUrl: "https://picsum.photos/seed/prism/1200/800",
    colorTheme: "from-zinc-900 via-neutral-900 to-stone-950",
    accentColor: "#f59e0b",
    metrics: [
      { label: "Handoff Time Reduction", value: "75%" },
      { label: "Github PR Auto-Completions", value: "12,000+" },
      { label: "NPM Weekly Downloads", value: "45K" }
    ],
    tags: ["Developer Tooling", "Figma API", "Github Integrations", "System Synchronization", "Open Source Design"],
    challenges: [
      "Managing nested design systems that vary wildly across multi-tenant client sites.",
      "Presenting interactive CSS preview codes natively inside an elegant user interface."
    ],
    solutions: [
      "Coded a polymorphic schema parsing nested system structures with an elegant tree navigator sidebar.",
      "Designed clean interactive code snippet components with one-click copy and custom highlight filters."
    ],
    process: [
      { phase: "01. Architecture Audit", details: "Mapped the design tokens of 5 major design libraries for structural overlap." },
      { phase: "02. Figma Parsing Engine", details: "Worked with engineers to parse Figma JSON node structures directly via drag-and-drop actions." },
      { phase: "03. Component Canvas Mockup", details: "Created interactive sandboxes where buttons morph shape instantly on slider drag events." },
      { phase: "04. Open-Source Release", details: "Formulated a documentation portal explaining structural custom themes." }
    ]
  }
];

export const TIMELINE: CareerTimeline[] = [
  {
    id: "exp-1",
    year: "2023 - Present",
    role: "Principal Product Designer",
    company: "Aura Labs Inc.",
    location: "Taipei, Taiwan",
    description: "Leading visual design, design architecture, and frontend integrations. Restructured global design system tokens, reducing team handoff bottlenecks by 40%.",
    tags: ["Design Engineering", "Figma Token Config", "Micro-Interactivity", "React Architecture"]
  },
  {
    id: "exp-2",
    year: "2021 - 2023",
    role: "Senior UI/UX & Interaction Designer",
    company: "Sycron Corp.",
    location: "San Jose, CA (Remote)",
    description: "Pioneered product architecture for high-density SaaS charts. Optimized dashboard loading speed and UI visual pathways for million-record graphs.",
    tags: ["Data Visualizer Dashboards", "User Psychology Lab", "Responsive Scaling Engine"]
  },
  {
    id: "exp-3",
    year: "2018 - 2021",
    role: "Digital Product Designer",
    company: "Spark Media Group",
    location: "Taipei, Taiwan",
    description: "Crafted interactive websites, content catalogs, and web portals. Championed accessible UI compliance (WCAG 2.1 AA benchmarks) across public utilities.",
    tags: ["WCAG Accessibility Guidelines", "Interactive UI Mocking", "Fluid CSS Art"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Design Craft (設計專業能力)",
    skills: [
      { name: "Visual UI Hierarchy (視覺介面層次與美感)", proficiency: 98 },
      { name: "Scalable Design System (可擴展設計系統)", proficiency: 95 },
      { name: "Interactive Prototyping (高互動原型設計)", proficiency: 92 },
      { name: "User Research & Cognitive Psychology (使用者研究與認知心理)", proficiency: 88 },
      { name: "Information Architecture (資訊架構邏輯)", proficiency: 90 }
    ]
  },
  {
    category: "Engineering Integration (開發整合能力)",
    skills: [
      { name: "React & TypeScript (前端響應式開發)", proficiency: 85 },
      { name: "Tailwind CSS & CSS Artistry (極致樣式控制)", proficiency: 95 },
      { name: "Framer Motion Interactive Animation (動態特效設計)", proficiency: 90 },
      { name: "Git Version Control / CI (版本控制流程整合)", proficiency: 80 }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    content: "Ethan possesses a rare superpower — he possesses the refined eyes of an editorial visual designer and the clean execution brain of a senior system engineer. Working with him is incredibly smooth; our handoff time literally vanished.",
    author: "Nate Robinson",
    role: "VP of Engineering",
    company: "Sycron Corp.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: "t-2",
    content: "He transformed our messy, bloated UI components into a state-of-the-art token system. Our developers can easily write standard buttons knowing exactly which shadow, border, or glow value matches the master code. Simply outstanding craft.",
    author: "Jessica Liao",
    role: "Director of Product",
    company: "Aura Labs Inc.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
  }
];
