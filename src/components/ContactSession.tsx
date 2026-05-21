import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Copy, ExternalLink, Mail, ArrowRight, MousePointerClick } from "lucide-react";

export default function ContactSession() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$10,000 - $20,000",
    details: "",
    projectType: "Design Token Architecture"
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText("hello@ethanchen.design");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const budgets = ["< $10,000", "$10,000 - $20,000", "$20,000 - $50,000", "$50,000+"];
  const projectTypes = [
    "Design Token Architecture",
    "Mobile App Design (iOS/Android)",
    "High-Density Dashboard System",
    "Design-led Frontend Partnership"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Contact Form Submission */}
      <div className="lg:col-span-7 bg-white rounded-xl border border-[#1A1A1A]/10 p-6 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="space-y-1.5">
                <h4 className="font-serif italic text-xl text-neutral-900">
                  Initiate Project Assembly
                </h4>
                <p className="text-xs text-neutral-400 font-light">
                  Let's align values and co-design standard interfaces. Fill out your requirements below:
                </p>
              </div>

              {/* Grid 2 Column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-medium text-neutral-500 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Marcus Aurelius"
                    className="w-full px-4 py-2 rounded-md border border-[#1A1A1A]/10 focus:border-[#1A1A1A]/45 focus:ring-1 focus:ring-neutral-900 transition-all text-sm outline-none bg-[#F9F9F7]/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-medium text-neutral-500 uppercase tracking-wider">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="e.g. marcus@colosseum.com"
                    className="w-full px-4 py-2 rounded-md border border-[#1A1A1A]/10 focus:border-[#1A1A1A]/45 focus:ring-1 focus:ring-neutral-900 transition-all text-sm outline-none bg-[#F9F9F7]/50"
                  />
                </div>
              </div>

              {/* Project Type Selector */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-medium text-neutral-500 block uppercase tracking-wider">
                  Project Engagement Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                      className={`px-4 py-2.5 rounded-lg text-xs font-semibold border text-left transition-all ${
                        formData.projectType === type
                          ? "bg-neutral-900 border-neutral-900 text-white shadow-sm"
                          : "bg-[#F9F9F7] border-[#1A1A1A]/10 text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-medium text-neutral-500 block uppercase tracking-wider">
                  Project Budget / Scope
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                      className={`py-2 px-1 rounded-lg text-xs font-semibold border transition-all ${
                        formData.budget === b
                          ? "bg-neutral-900 border-[#1A1A1A] text-white shadow-sm"
                          : "bg-[#F9F9F7] border-[#1A1A1A]/10 text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-medium text-neutral-500 block uppercase tracking-wider">
                  Project Scope details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData((prev) => ({ ...prev, details: e.target.value }))}
                  placeholder="Describe your design challenges or feature bottlenecks..."
                  className="w-full px-4 py-2.5 rounded-lg border border-[#1A1A1A]/10 focus:border-[#1A1A1A]/45 focus:ring-1 focus:ring-neutral-900 transition-all text-sm outline-none bg-[#F9F9F7]/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-100 shadow-sm cursor-pointer"
              >
                Assemble Proposal <Send className="w-4 h-4" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20 }}
              className="flex flex-col items-center justify-center py-12 text-center h-full space-y-4"
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-500 bg-emerald-50 rounded-full p-2" />
              <div className="space-y-1.5">
                <h4 className="font-serif italic text-2xl text-neutral-900">
                  Proposal Transmitted Successfully!
                </h4>
                <p className="text-xs text-neutral-450 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-neutral-850">{formData.name}</span>. I have received your request regarding{" "}
                  <span className="font-semibold text-neutral-850">{formData.projectType}</span> and will answer within 12 hours.
                </p>
              </div>

              <div className="bg-[#F9F9F7] rounded-xl p-4 border border-[#1A1A1A]/10 text-left max-w-sm w-full font-mono text-xs space-y-1 text-neutral-600">
                <div>Type: {formData.projectType}</div>
                <div>Budget Threshold: {formData.budget}</div>
                <div>Inquiry Token: ETHAN_CONTACT_RCVD_2026</div>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-lg transition-all"
              >
                Send Another Inquire
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Direct Communication Channels */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-6">
        {/* Quick Email Copy */}
        <div className="bg-white rounded-xl border border-[#1A1A1A]/10 p-6 flex-1 flex flex-col justify-between shadow-sm">
          <div className="space-y-3">
            <div className="p-2.5 bg-[#EBEBE8] border border-[#1A1A1A]/5 rounded-xl w-fit text-neutral-950">
              <Mail className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-serif italic text-lg text-neutral-900">
                Direct Inquiries
              </h4>
              <p className="text-xs text-neutral-400 font-light text-wrap">
                Prefer direct messaging or instant email channels? Reach out 24/7.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-2 mt-4 sm:mt-0">
            <div className="flex items-center justify-between p-3 bg-[#F9F9F7] rounded-lg border border-[#1A1A1A]/10 font-mono text-xs text-neutral-850 relative group overflow-hidden gap-1">
              <span className="truncate">hello@ethanchen.design</span>
              <button
                onClick={handleCopyEmail}
                className="p-1 px-2 bg-neutral-900 text-white hover:bg-neutral-800 rounded text-[10px] font-sans flex items-center gap-1 transition-all shrink-0"
              >
                {copiedEmail ? "Copied" : <><Copy className="w-3.5 h-3.5" /> Copy</>}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Social Ports Links */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 flex-1 flex flex-col justify-between text-[#F9F9F7] shadow-xl relative overflow-hidden">
          {/* Subtle watermark */}
          <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-[#F9F9F7]/20 uppercase tracking-widest pointer-events-none">
            Digital Portals
          </div>

          <div className="space-y-1.5 z-10">
            <h4 className="font-serif italic text-lg text-[#F9F9F7]/95">
              Sync My Live Spaces
            </h4>
            <p className="text-xs text-[#F9F9F7]/40 font-light leading-relaxed">
              Find my visual works, case study templates, open source contribution assets, or articles:
            </p>
          </div>

          {/* Social connections list */}
          <div className="space-y-2 mt-6 z-10">
            {[
              { label: "Follow on Figma Community", value: "figma.com/@ethan_design", color: "hover:bg-neutral-800 hover:border-white/25 text-neutral-300" },
              { label: "Follow on Github", value: "github.com/ethan-chen-design", color: "hover:bg-neutral-800 hover:border-white/25 text-neutral-300" },
              { label: "Sync on LinkedIn", value: "linkedin.com/in/ethanproduct", color: "hover:bg-neutral-800 hover:border-white/25 text-neutral-300" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={`https://${social.value}`}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/5 font-mono text-[11px] transition-all duration-300 ${social.color}`}
              >
                <div>
                  <div className="text-[#F9F9F7]/40 text-[9px] font-sans lowercase mb-0.5">{social.label}</div>
                  <div>{social.value}</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
