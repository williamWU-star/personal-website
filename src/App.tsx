import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Layers,
  Briefcase,
  Play,
  Mail,
  User,
  ArrowUpRight,
  Globe,
  Clock,
  ExternalLink,
  ChevronRight,
  Monitor
} from "lucide-react";

// Local imports
import { DESIGNER_INFO, PROJECTS } from "./data";
import { ProjectCase } from "./types";
import AboutSession from "./components/AboutSession";
import Playground from "./components/Playground";
import ContactSession from "./components/ContactSession";
import ProjectDetail from "./components/ProjectDetail";

type TabType = "work" | "about" | "playground" | "contact";
type LangType = "zh" | "en";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("work");
  const [lang, setLang] = useState<LangType>("zh");
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);
  const [currentTime, setCurrentTime] = useState("");

  // Periodically update local Taipei / UTC time for realistic bio indicator
  useEffect(() => {
    function updateClock() {
      const now = new Date();
      // Format to Taipei time
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Taipei",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
      setCurrentTime(formatter.format(now));
    }
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Multi-language copy resources
  const content = {
    en: {
      navWork: "Selected Work",
      navAbout: "About & Resume",
      navPlay: "Spec Simulator",
      navContact: "Hire Me",
      tagline: DESIGNER_INFO.tagline,
      viewCase: "Deep Case Study",
      year: "Year",
      client: "Client",
      processPlay: "Design Token Playground",
      footerCredits: "All rights reserved. Coded & designed with pixel precision in Taipei."
    },
    zh: {
      navWork: "精選案例作品",
      navAbout: "關於我 & 履歷",
      navPlay: "設計精準度模擬器",
      navContact: "預約專案合作",
      tagline: DESIGNER_INFO.zhTagline,
      viewCase: "閱讀完整案例解析",
      year: "專案年份",
      client: "合作伙伴",
      processPlay: "設計標記與元件演算實驗室",
      footerCredits: "版權所有 &copy; 2026. 產品設計師陳奕廷在台北以代碼精密雕琢而成。"
    }
  };

  const copy = content[lang];

  // Helper trigger focusing view correctly
  function setSpecsActive(tab: TabType) {
    window.scrollTo({ top: 380, behavior: "smooth" });
    setActiveTab(tab);
  }

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] flex flex-col font-sans relative select-none selection:bg-[#1A1A1A]/10 pb-16 border-[12px] md:border-[16px] border-[#F3F2EE]">
      
      {/* Dynamic Background Mesh Grid */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.1]" />

      {/* Sticky High-Contrast Navigation Header */}
      <nav className="sticky top-0 z-40 bg-[#F9F9F7]/95 backdrop-blur-md border-b border-[#1A1A1A]/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand/Logo Element */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-display font-bold text-base leading-none">
              E
            </span>
            <div>
              <div id="brand-title" className="font-display font-medium text-sm text-neutral-900 leading-none">
                {DESIGNER_INFO.name}
              </div>
              <div className="text-[10px] text-neutral-400 font-mono mt-0.5 leading-none">
                {lang === "zh" ? "資深產品設計師" : "Principal Designer"}
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-10">
            {([
              { key: "work", label: copy.navWork },
              { key: "about", label: copy.navAbout },
              { key: "playground", label: copy.navPlay },
              { key: "contact", label: copy.navContact }
            ] as const).map((tab) => {
              return (
                <button
                  key={tab.key}
                  onClick={() => setSpecsActive(tab.key)}
                  className={`text-xs uppercase tracking-widest transition-all pb-1 cursor-pointer font-bold ${
                    activeTab === tab.key
                      ? "text-[#1A1A1A] border-b border-[#1A1A1A]"
                      : "text-[#1A1A1A] opacity-35 hover:opacity-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Time/Locale Switch */}
          <div className="flex items-center gap-3">
            {/* Live Taipei time tracker */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#EBEBE8] border border-[#1A1A1A]/10 rounded-lg text-[10px] font-mono text-neutral-600 h-8">
              <Clock className="w-3 h-3 text-neutral-400" />
              <span>Taipei: {currentTime || "00:00:00"}</span>
            </div>

            {/* Language Toggler */}
            <button
              onClick={() => setLang((prev) => (prev === "zh" ? "en" : "zh"))}
              className="px-3 h-8 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "zh" ? "EN" : "華語"}</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Strip */}
        <div className="flex md:hidden items-center justify-around border-t border-[#1A1A1A]/10 bg-[#F9F9F7]/95 px-2 py-2 overflow-x-auto gap-1">
          {([
            { key: "work", label: lang === "zh" ? "案例" : "Work", icon: Layers },
            { key: "about", label: lang === "zh" ? "關於" : "About", icon: User },
            { key: "playground", label: lang === "zh" ? "沙盒" : "Play", icon: Sparkles },
            { key: "contact", label: lang === "zh" ? "聯繫" : "Hire", icon: Mail }
          ] as const).map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setSpecsActive(tab.key)}
                className={`flex-1 py-1.5 rounded-lg flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-[#1A1A1A] text-white"
                    : "text-neutral-500 hover:bg-neutral-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Container Core */}
      <main className="max-w-5xl mx-auto px-6 w-full space-y-12 pt-8">
        
        {/* Hero Banner Section */}
        <header className="relative w-full rounded-xl overflow-hidden border border-[#1A1A1A]/10 bg-white p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center gap-8">
          
          {/* Overlay abstract background mesh details */}
          <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none -z-10 mix-blend-color-burn">
            <img
              src={DESIGNER_INFO.heroBg}
              alt="Structural wireframe backdrop"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EBEBE8] rounded-full text-[10px] font-mono text-neutral-600 border border-[#1A1A1A]/5">
              <span className="w-2 h-2 rounded-full bg-[#1A1A1A] animate-pulse" />
              Currently open for contracts, Taipei or Remote.
            </div>

            <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-5xl text-neutral-900 tracking-tight leading-[1.1]">
              {copy.tagline}
            </h1>

            <p className="text-sm text-neutral-500 leading-relaxed font-light max-w-xl">
              {lang === "zh" ? DESIGNER_INFO.zhAboutMe : DESIGNER_INFO.aboutMe}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setSpecsActive("contact")}
                className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-transform hover:scale-[1.01] active:scale-100 cursor-pointer shadow-md"
              >
                Assemble Project <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSpecsActive("playground")}
                className="px-5 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold rounded-lg border border-neutral-200 flex items-center gap-1.5 transition-all"
              >
                <Monitor className="w-4 h-4" /> Test My Grid Eyes
              </button>
            </div>
          </div>

          {/* High quality geometric visuals on Right */}
          <div className="w-full lg:w-[280px] h-[180px] rounded-xl border border-[#1A1A1A]/10 overflow-hidden relative shadow-inner group bg-[#EBEBE8] self-stretch flex items-center justify-center">
            <img
              src={DESIGNER_INFO.heroBg}
              alt="Premium technology wireframe abstraction"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover scale-102 group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            
            {/* Soft designer label overlay */}
            <div className="absolute bottom-3 left-4 text-white z-10">
              <div className="font-mono text-[9px] uppercase tracking-widest text-[#F9F9F7]">SYSTEM MESH</div>
              <div className="font-serif italic text-sm text-[#F9F9F7]">Aesthetic Architecture</div>
            </div>
          </div>
        </header>

        {/* Dynamic Nav Tabs Session Renderers with smooth animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            {/* WORK TAB LAYOUT */}
            {activeTab === "work" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/10">
                  <h2 className="font-serif italic text-2xl text-neutral-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 animate-pulse" />
                    {lang === "zh" ? "實戰落地案例解析" : "Selected Practical Archives"}
                  </h2>
                  <span className="text-xs font-mono text-neutral-400">
                    Showing {PROJECTS.length} of {PROJECTS.length} Product Studies
                  </span>
                </div>

                {/* Portfolio cases listing */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PROJECTS.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="bg-white rounded-xl border border-[#1A1A1A]/10 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#1A1A1A]/20 transition-all duration-300 group cursor-pointer relative"
                    >
                      {/* Highlight border on hover */}
                      <div
                        className="absolute inset-x-0 top-0 h-1 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"
                        style={{ backgroundColor: project.accentColor }}
                      />

                      <div className="p-4 space-y-3.5">
                        {/* Static image wrapper */}
                        <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#EBEBE8] border border-[#1A1A1A]/5 relative">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md border border-[#1A1A1A]/10 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-neutral-600">
                            {project.year}
                          </div>
                        </div>

                        {/* Text descriptions */}
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono font-medium text-neutral-400 uppercase tracking-widest">
                            {project.category}
                          </div>
                          <h3 className="font-serif text-xl font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors flex items-center justify-between">
                            {project.title}
                            <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                          </h3>
                          <p className="text-xs text-neutral-500 font-light leading-relaxed line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Footer tags list */}
                      <div className="px-4 py-3 bg-[#F9F9F7]/60 border-t border-[#1A1A1A]/5 flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-white border border-[#1A1A1A]/10 font-mono text-[9px] text-neutral-500 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ABOUT TAB LAYOUT */}
            {activeTab === "about" && <AboutSession />}

            {/* SIMULATOR TAB LAYOUT */}
            {activeTab === "playground" && <Playground />}

            {/* CONTACT TAB LAYOUT */}
            {activeTab === "contact" && <ContactSession />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Slide Case dialog */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Footer bar */}
      <footer className="max-w-5xl mx-auto px-6 mt-16 pt-8 border-t border-[#1A1A1A]/10 flex flex-col md:flex-row items-center justify-between text-neutral-400 text-xs gap-4">
        <span className="font-serif italic text-neutral-500">{copy.footerCredits}</span>
        <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
          <span>Taipei Lab Specs &bull; Craft 2026</span>
        </div>
      </footer>
    </div>
  );
}
