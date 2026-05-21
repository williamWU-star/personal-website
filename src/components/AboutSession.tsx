import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, MapPin, Code, Star, Heart, Award, Sparkles, Quote } from "lucide-react";
import { DESIGNER_INFO, TIMELINE, SKILL_CATEGORIES, TESTIMONIALS } from "../data";

export default function AboutSession() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="space-y-16">
      {/* Intro Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-xl border border-[#1A1A1A]/10 p-8 sm:p-12 relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1A1A1A]/5 rounded-full filter blur-3xl -z-10 opacity-60" />

        {/* Left: Beautiful big avatar image */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative w-56 h-56 rounded-xl overflow-hidden border border-[#1A1A1A]/20 shadow-md group">
            <img
              src={DESIGNER_INFO.avatar}
              alt="Ethan Chen Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Minimal absolute locator badge */}
            <div className="absolute bottom-3 left-3 bg-[#F9F9F7]/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border border-[#1A1A1A]/10 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-500" />
              {DESIGNER_INFO.location}
            </div>
          </div>
          <h3 className="font-serif italic text-2xl text-neutral-900 mt-4 text-center">
            {DESIGNER_INFO.name} <span className="text-neutral-400 font-light text-sm">({DESIGNER_INFO.zhName})</span>
          </h3>
          <p className="text-xs text-neutral-450 text-center mt-1 uppercase tracking-widest font-mono">
            {DESIGNER_INFO.title}
          </p>
        </div>

        {/* Right: Detailed bio */}
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EBEBE8] rounded-full text-[10px] font-mono text-neutral-600 border border-[#1A1A1A]/5">
            <Sparkles className="w-3.5 h-3.5 text-neutral-800" /> Full-Stack Creative Philosophy
          </div>

          <h4 className="font-serif italic text-2xl sm:text-3xl text-neutral-900 leading-tight">
            "Design isn't just look and feel. Design is how standard specifications become elegant code."
          </h4>

          <div className="space-y-4 text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
            <p>{DESIGNER_INFO.aboutMe}</p>
            <p>{DESIGNER_INFO.zhAboutMe}</p>
          </div>

          {/* Core numbers showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#1A1A1A]/10">
            {DESIGNER_INFO.metrics.map((m, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-serif italic font-semibold text-neutral-900">
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-xs text-neutral-400 font-mono tracking-wide mt-0.5">
                  {m.label}
                </div>
                <div className="text-[9px] text-neutral-400 font-mono scale-95 origin-center sm:origin-left opacity-70">
                  {m.zhLabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Showcase */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="font-serif italic text-2xl text-neutral-900">
            My Creative & Code Spec (核心能力矩陣)
          </h3>
          <p className="text-xs text-neutral-400 font-light">
            My skill set bridges aesthetic mastery of human interface design with optimized production code integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#1A1A1A]/10 p-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-3 mb-4 flex items-center gap-2">
                {i === 0 ? <Award className="w-4 h-4 text-neutral-900" /> : <Code className="w-4 h-4 text-neutral-900" />}
                {cat.category}
              </h4>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={si} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-neutral-700">
                      <span>{skill.name}</span>
                      <span className="font-mono text-neutral-400">{skill.proficiency}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-[#EBEBE8] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-neutral-900 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience / Timeline Section */}
      <div className="space-y-6">
        <h3 className="font-serif italic text-2xl text-neutral-900 text-center">
          Career Archive (職業歷程)
        </h3>

        <div className="relative border-l border-[#1A1A1A]/10 pl-6 ml-4 max-w-3xl mx-auto space-y-10">
          {TIMELINE.map((exp, i) => (
            <div key={exp.id} className="relative group">
              {/* Chronological Bullet Ring */}
              <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border border-[#1A1A1A] bg-white group-hover:bg-[#1A1A1A] transition-colors duration-300 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] group-hover:bg-white transition-all duration-300" />
              </span>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-mono font-semibold text-neutral-400">
                    {exp.year}
                  </span>
                  <div className="inline-flex items-center gap-1.5 bg-[#EBEBE8] border border-[#1A1A1A]/5 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-neutral-600 w-fit">
                    <Briefcase className="w-3 h-3 text-neutral-500" /> {exp.location}
                  </div>
                </div>

                <h4 className="font-serif text-lg font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                  {exp.role} &mdash; <span className="font-sans font-light text-xs text-neutral-500">{exp.company}</span>
                </h4>

                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                  {exp.description}
                </p>

                {/* Sub Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {exp.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="px-2 py-0.5 bg-white border border-[#1A1A1A]/10 font-mono text-[9px] text-neutral-500 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="bg-[#1A1A1A] text-[#F9F9F7] rounded-xl p-8 sm:p-12 overflow-hidden relative border border-[#1A1A1A] shadow-lg">
        <div className="absolute top-4 left-6 flex items-center gap-1">
          <Quote className="w-12 h-12 text-[#F9F9F7]/10 rotate-180 absolute -top-4 -left-2 -z-10 opacity-30 pointer-events-none" />
          <span className="font-mono text-[10px] uppercase text-[#F9F9F7]/40 tracking-widest">
            Peer Consensus / 信賴證言
          </span>
        </div>

        <div className="relative min-h-[180px] mt-6 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <p className="font-serif italic text-lg sm:text-2xl text-[#F9F9F7]/90 leading-relaxed font-light max-w-3xl">
                &ldquo;{TESTIMONIALS[activeTestimonial].content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4">
                <img
                  src={TESTIMONIALS[activeTestimonial].avatarUrl}
                  alt={TESTIMONIALS[activeTestimonial].author}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-white/15"
                />
                <div>
                  <div className="font-serif italic text-base text-white">
                    {TESTIMONIALS[activeTestimonial].author}
                  </div>
                  <div className="text-[10px] font-mono uppercase text-[#F9F9F7]/50 mt-0.5 tracking-wider">
                    {TESTIMONIALS[activeTestimonial].role} &bull; {TESTIMONIALS[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons */}
          <div className="flex items-center gap-2 mt-6 justify-end">
            {TESTIMONIALS.map((t, index) => (
              <button
                key={t.id}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  activeTestimonial === index ? "bg-[#F9F9F7] w-5" : "bg-neutral-700 hover:bg-neutral-500"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
