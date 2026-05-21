import { motion } from "motion/react";
import { X, Award, CheckCircle2, AlertTriangle, ArrowRight, ArrowDown } from "lucide-react";
import { ProjectCase } from "../types";

interface ProjectDetailProps {
  project: ProjectCase;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-md p-0 sm:p-4"
    >
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ x: "100%", opacity: 0.9 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0.9 }}
        transition={{ type: "spring", damping: 30, stiffness: 220 }}
        className="relative w-full max-w-4xl h-full sm:h-[95vh] bg-[#F9F9F7] sm:rounded-xl border border-[#1A1A1A]/10 shadow-2xl flex flex-col overflow-hidden z-10"
      >
        {/* Navigation / Header bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#1A1A1A]/10 bg-[#F9F9F7]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A1A1A]/60">
              Interactive Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto">
          {/* Cover Hero section */}
          <div className="relative px-6 py-16 sm:px-12 bg-[#1A1A1A] text-white">
            {/* Minimal absolute accent */}
            <div className="absolute top-4 right-6 font-mono text-[10px] uppercase tracking-widest opacity-45">
              Client: {project.client} &bull; {project.year}
            </div>

            <div className="max-w-2xl relative z-10">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono font-medium border border-white/10">
                {project.category}
              </span>
              <h1 className="font-serif italic font-light text-3xl sm:text-5xl tracking-tight mt-4 mb-3 text-white">
                {project.title}
              </h1>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Background design elements */}
            <div className="absolute inset-0 bg-radial-gradient(from_top,_transparent_60%,_rgba(0,0,0,0.45)) mix-blend-multiply opacity-50" />
          </div>

          <div className="px-6 py-8 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left side: Metadata & Metrics */}
            <div className="lg:col-span-4 space-y-6">
              {/* Role & Client Specs */}
              <div className="p-5 rounded-lg border border-[#1A1A1A]/10 bg-[#FFFFFF] space-y-3.5">
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  Project Engagement
                </h4>
                <div>
                  <div className="text-[10px] text-neutral-400 font-mono uppercase">My Role</div>
                  <div className="text-sm font-semibold text-neutral-800 font-serif italic">{project.role}</div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-mono uppercase">Delivery Period</div>
                  <div className="text-sm font-semibold text-neutral-800">{project.year}</div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-mono uppercase">Client Partner</div>
                  <div className="text-sm font-semibold text-neutral-800 font-serif italic">{project.client}</div>
                </div>
              </div>

              {/* Hard Metrics */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-neutral-450 pl-1">
                  Validated Metrics
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-4 bg-white border border-[#1A1A1A]/10 text-neutral-900 rounded-lg">
                      <div className="text-2xl font-serif italic font-semibold text-neutral-900">
                        {metric.value}
                      </div>
                      <div className="text-xs text-neutral-500 font-light leading-snug mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <h4 className="font-mono text-[10px] uppercase tracking-wider text-neutral-450 pl-1">
                  Design Tools & Frameworks
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#EBEBE8] hover:bg-neutral-200 text-neutral-700 text-[11px] font-mono rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Detailed narrative */}
            <div className="lg:col-span-8 space-y-8">
              {/* Context */}
              <section className="space-y-3">
                <h3 className="font-serif italic text-xl text-neutral-900 pb-1 border-b border-[#1A1A1A]/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                  Context & Product Strategy
                </h3>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/85 leading-relaxed font-light">
                  {project.detailedDescription}
                </p>
              </section>

              {/* Challenges & Solutions */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Challenge */}
                <div className="p-5 border border-amber-200/50 bg-[#FFFFFF] rounded-lg space-y-3">
                  <div className="flex items-center gap-1.5 text-amber-700 font-mono text-[10px] uppercase tracking-widest font-semibold">
                    <AlertTriangle className="w-4 h-4 text-amber-500" /> Hard Challenge
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-600 list-disc pl-4 font-light">
                    {project.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="p-5 border border-emerald-200/50 bg-[#FFFFFF] rounded-lg space-y-3">
                  <div className="flex items-center gap-1.5 text-emerald-800 font-mono text-[10px] uppercase tracking-widest font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Design Resolution
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-600 list-disc pl-4 font-light">
                    {project.solutions.map((sol, i) => (
                      <li key={i}>{sol}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* High-res aesthetic rendering */}
              <div className="rounded-lg overflow-hidden bg-white border border-[#1A1A1A]/10 relative group aspect-[16/10]">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} detailed wireframe`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                  <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-200">
                    High-Fidelity Wireframes
                  </span>
                  <p className="text-xs font-light text-neutral-200 mt-1">
                    Isometric mockups displaying standard screen interactions.
                  </p>
                </div>
              </div>

              {/* Chronological Process Flow */}
              <section className="space-y-4">
                <h3 className="font-serif italic text-xl text-neutral-900 pb-1 border-b border-[#1A1A1A]/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                  Product Design Chronology
                </h3>
                <div className="relative border-l border-[#1A1A1A]/10 pl-4 ml-2 space-y-6">
                  {project.process.map((step, i) => (
                    <div key={i} className="relative">
                      {/* Chrono dot */}
                      <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full border border-[#1A1A1A] bg-[#F9F9F7]" />
                      <div className="text-[10px] font-mono font-semibold text-neutral-500 tracking-wider uppercase">
                        {step.phase}
                      </div>
                      <p className="text-xs text-neutral-500 font-light mt-1">
                        {step.details}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer actions tab */}
        <div className="px-6 py-4 border-t border-[#1A1A1A]/10 bg-white flex items-center justify-between">
          <span className="text-xs text-neutral-400 font-mono">
            Crafted securely with code &bull; 2026
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-1 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-all hover:translate-x-0.5 active:translate-x-0 cursor-pointer"
          >
            Return to Work <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
