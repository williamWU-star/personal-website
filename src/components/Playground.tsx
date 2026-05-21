import { useState } from "react";
import { motion } from "motion/react";
import { Sliders, Eye, Sparkles, Check, RefreshCw, Layers } from "lucide-react";

interface CardSpecs {
  borderRadius: number;
  borderThickness: number;
  padding: number;
  shadowBlur: number;
  theme: "minimal" | "solar" | "emerald" | "cyberpunk";
  alignment: "left" | "center" | "right";
}

export default function Playground() {
  // Playground state
  const [specs, setSpecs] = useState<CardSpecs>({
    borderRadius: 16,
    borderThickness: 1,
    padding: 24,
    shadowBlur: 20,
    theme: "minimal",
    alignment: "left",
  });

  // Eye-test state
  const [score, setScore] = useState(0);
  const [testResult, setTestResult] = useState<"idle" | "success" | "fail">("idle");
  const [testLevel, setTestLevel] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState<"A" | "B">("A"); // Dynamic alignment target

  // Generate an interesting new random eye-test
  function handleNextEyeTest() {
    setTestResult("idle");
    const target = Math.random() > 0.5 ? "A" : "B";
    setCorrectAnswer(target);
    setTestLevel((prev) => prev + 1);
  }

  function handleAnswer(choice: "A" | "B") {
    if (choice === correctAnswer) {
      setScore((prev) => prev + 10);
      setTestResult("success");
    } else {
      setTestResult("fail");
    }
  }

  // Theme styles lookup
  const themes = {
    minimal: {
      bg: "bg-white",
      border: "border-[#1A1A1A]/15",
      accent: "bg-neutral-900 text-white",
      text: "text-neutral-900 font-serif italic",
      pill: "bg-[#EBEBE8] text-neutral-600 border border-neutral-300/30",
      glow: "rgba(0,0,0,0.05)",
    },
    solar: {
      bg: "bg-[#FAF7F0]",
      border: "border-amber-900/15",
      accent: "bg-amber-800 text-white",
      text: "text-amber-950 font-serif italic",
      pill: "bg-amber-100/60 text-amber-800",
      glow: "rgba(146,64,14,0.06)",
    },
    emerald: {
      bg: "bg-[#F4F7F5]",
      border: "border-emerald-950/15",
      accent: "bg-emerald-800 text-white",
      text: "text-emerald-950 font-serif italic",
      pill: "bg-emerald-100/60 text-emerald-800",
      glow: "rgba(6,78,59,0.05)",
    },
    cyberpunk: {
      bg: "bg-zinc-950",
      border: "border-neutral-800",
      accent: "bg-white text-black",
      text: "text-white font-mono",
      pill: "bg-zinc-900 text-neutral-400 border border-neutral-800/80",
      glow: "rgba(255,255,255,0.08)",
    },
  };

  const selectedTheme = themes[specs.theme];

  // Code specs string
  const tailwindClasses = `glass-panel shadow-xl ${
    specs.theme === "cyberpunk"
      ? "bg-zinc-950 border-neutral-800"
      : specs.theme === "solar"
      ? "bg-[#FAF7F0] border-amber-900/15"
      : specs.theme === "emerald"
      ? "bg-[#F4F7F5] border-emerald-950/15"
      : "bg-white border-[#1A1A1A]/15"
  } rounded-[${specs.borderRadius}px] border-[${specs.borderThickness}px] p-[${
    specs.padding
  }px] text-${specs.alignment}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Playground Controls Panel */}
      <div className="lg:col-span-12 xl:col-span-5 bg-white rounded-xl border border-[#1A1A1A]/10 p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6 border-b border-[#1A1A1A]/10 pb-4">
          <Sliders className="w-5 h-5 text-neutral-800" />
          <h3 className="font-serif italic text-lg text-neutral-900">
            Interactive Token Modeler
          </h3>
        </div>

        {/* Preset Selector */}
        <div className="mb-6">
          <label className="block text-[10px] font-mono font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            Theme System Preset
          </label>
          <div className="grid grid-cols-4 gap-2">
            {(["minimal", "solar", "emerald", "cyberpunk"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSpecs((prev) => ({ ...prev, theme: t }))}
                className={`py-2 text-xs font-semibold rounded-lg capitalize border transition-all cursor-pointer ${
                  specs.theme === t
                    ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                    : "bg-[#F9F9F7] hover:bg-neutral-100 text-neutral-600 border-[#1A1A1A]/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-5">
          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium text-neutral-600">
              <span className="font-serif italic">Corner Radius: <span className="font-mono font-semibold text-neutral-900">{specs.borderRadius}px</span></span>
              <span className="text-neutral-400 font-mono text-[10px]">border-radius</span>
            </div>
            <input
              type="range"
              min="0"
              max="32"
              value={specs.borderRadius}
              onChange={(e) =>
                setSpecs((prev) => ({ ...prev, borderRadius: parseInt(e.target.value) }))
              }
              className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium text-neutral-600">
              <span className="font-serif italic">Border Thickness: <span className="font-mono font-semibold text-neutral-900">{specs.borderThickness}px</span></span>
              <span className="text-neutral-400 font-mono text-[10px]">border-width</span>
            </div>
            <input
              type="range"
              min="0"
              max="4"
              value={specs.borderThickness}
              onChange={(e) =>
                setSpecs((prev) => ({ ...prev, borderThickness: parseInt(e.target.value) }))
              }
              className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium text-neutral-600">
              <span className="font-serif italic">Container Padding: <span className="font-mono font-semibold text-neutral-900">{specs.padding}px</span></span>
              <span className="text-neutral-400 font-mono text-[10px]">padding</span>
            </div>
            <input
              type="range"
              min="12"
              max="48"
              value={specs.padding}
              onChange={(e) =>
                setSpecs((prev) => ({ ...prev, padding: parseInt(e.target.value) }))
              }
              className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium text-neutral-600">
              <span className="font-serif italic">Shadow Softness: <span className="font-mono font-semibold text-neutral-900">{specs.shadowBlur}px</span></span>
              <span className="text-neutral-400 font-mono text-[10px]">box-shadow blur</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={specs.shadowBlur}
              onChange={(e) =>
                setSpecs((prev) => ({ ...prev, shadowBlur: parseInt(e.target.value) }))
              }
              className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
            />
          </div>

          {/* Text Alignment */}
          <div>
            <label className="block text-[10px] font-mono font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              Content Alignment
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["left", "center", "right"] as const).map((align) => (
                <button
                  key={align}
                  onClick={() => setSpecs((prev) => ({ ...prev, alignment: align }))}
                  className={`py-1.5 text-xs font-semibold rounded-lg capitalize border transition-all cursor-pointer ${
                    specs.alignment === align
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                      : "bg-[#F9F9F7] hover:bg-neutral-100 text-neutral-600 border-[#1A1A1A]/10"
                  }`}
                >
                  {align}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Visual & Code Specs */}
      <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6 w-full">
        {/* The Live Card Stage */}
        <div className="relative rounded-xl border border-[#1A1A1A]/10 bg-[radial-gradient(#d3d2ce_1.2px,transparent_1.2px)] [background-size:16px_16px] bg-[#FAF9F5] p-6 sm:p-12 min-h-[360px] flex items-center justify-center overflow-hidden">
          <div className="absolute top-4 left-4 flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-wider text-[#1A1A1A]/50 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
            <span>Interactive Stage</span>
          </div>

          <motion.div
            layout
            style={{
              borderRadius: `${specs.borderRadius}px`,
              borderWidth: `${specs.borderThickness}px`,
              padding: `${specs.padding}px`,
              boxShadow: `0 10px ${specs.shadowBlur}px ${selectedTheme.glow}`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`w-full max-w-sm ${selectedTheme.bg} ${selectedTheme.border} transition-colors duration-350 relative`}
          >
            {/* Minimal designer watermark */}
            <div className="absolute top-2.5 right-3 pointer-events-none opacity-20 font-mono text-[8.5px] uppercase tracking-widest text-[#1A1A1A]">
              ETHAN CHEN LABS
            </div>

            <div
              className={`flex flex-col h-full justify-between gap-4 ${
                specs.alignment === "left"
                  ? "text-left items-start"
                  : specs.alignment === "center"
                  ? "text-center items-center"
                  : "text-right items-end"
              }`}
            >
              <div className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${selectedTheme.pill}`}>
                Design System v1.4
              </div>

              <div>
                <h4 className={`font-serif italic text-xl leading-snug mb-2 ${selectedTheme.text}`}>
                  Designing With Code
                </h4>
                <p className="text-xs text-neutral-500 max-w-xs leading-relaxed font-light">
                  Real designers don't just draw blocks—they program modular architectures, establishing fluid spacing ratios.
                </p>
              </div>

              <button className={`px-4 py-2 text-xs font-semibold rounded-md transition-all hover:scale-[1.03] active:scale-95 cursor-pointer ${selectedTheme.accent}`}>
                Simulate Assembly
              </button>
            </div>
          </motion.div>
        </div>

        {/* Live Code Specs */}
        <div className="bg-[#1A1A1A] rounded-xl p-5 font-mono text-xs text-[#F9F9F7]/95 relative border border-neutral-900 shadow-lg">
          <div className="flex justify-between items-center mb-3 text-[9px] text-white/40 uppercase tracking-widest border-b border-white/5 pb-2">
            <span>Calculated Output Specifications</span>
            <span className="text-emerald-400">Active Synced</span>
          </div>
          <div className="space-y-2 overflow-x-auto select-all">
            <div className="text-neutral-500">// React Dynamic Style Hook</div>
            <code className="text-amber-200 block">
              {`<motion.div style={{
  borderRadius: "${specs.borderRadius}px",
  borderWidth: "${specs.borderThickness}px",
  padding: "${specs.padding}px",
  boxShadow: "0 10px ${specs.shadowBlur}px ${selectedTheme.glow}"
}} className="...className" />`}
            </code>

            <div className="text-neutral-500 mt-3">// Equivalent Tailwind Utility Tokens</div>
            <code className="text-cyan-300 block leading-relaxed break-all">
              {`className="${tailwindClasses}"`}
            </code>
          </div>
        </div>

        {/* Bonus: Eye-Test Interaction Section */}
        <div className="bg-white rounded-xl border border-[#1A1A1A]/10 p-5 mt-2 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-neutral-900 animate-pulse" />
              <div>
                <h4 className="font-serif italic text-base text-neutral-900">
                  Designer's Eye-Test Challenge
                </h4>
                <p className="text-[11px] text-neutral-400">
                  Spot the visual flaw. Do you have the sharp alignment eyes of a product designer?
                </p>
              </div>
            </div>
            <div className="bg-[#FAF9F5] border border-[#1A1A1A]/10 text-neutral-700 px-2.5 py-1 rounded-md text-xs font-bold font-mono">
              Score: {score}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Box A */}
            <div
              onClick={() => {
                if (testResult === "idle") handleAnswer("A");
              }}
              className={`p-4 border rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${
                testResult !== "idle"
                  ? correctAnswer === "A"
                    ? "border-emerald-500 bg-emerald-50/20"
                    : "border-neutral-105 opacity-50"
                  : "border-neutral-200 hover:border-neutral-900 hover:bg-[#FAF9F5]"
              }`}
            >
              <div className="text-[10px] text-neutral-400 mb-3 font-mono tracking-wider">VARIANT A</div>
              <div className="w-full flex flex-col gap-2 p-2 bg-[#FAF9F5] border border-neutral-200/50 rounded-lg">
                <div className={`w-8 h-8 rounded-full bg-neutral-900 transition-all ${correctAnswer === "A" ? "ml-4" : "ml-5"}`} />
                <div className="w-full h-1.5 bg-neutral-200 rounded" />
                <div className="w-2/3 h-1.5 bg-neutral-200 rounded" />
              </div>
              <span className="text-[10px] text-neutral-400 mt-2">
                {correctAnswer === "A" ? "Aligned on exact 8px grid" : "Slightly shifted by 2px"}
              </span>
            </div>

            {/* Box B */}
            <div
              onClick={() => {
                if (testResult === "idle") handleAnswer("B");
              }}
              className={`p-4 border rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${
                testResult !== "idle"
                  ? correctAnswer === "B"
                    ? "border-emerald-500 bg-emerald-50/20"
                    : "border-neutral-105 opacity-50"
                  : "border-neutral-200 hover:border-neutral-900 hover:bg-[#FAF9F5]"
              }`}
            >
              <div className="text-[10px] text-neutral-400 mb-3 font-mono tracking-wider">VARIANT B</div>
              <div className="w-full flex flex-col gap-2 p-2 bg-[#FAF9F5] border border-neutral-200/50 rounded-lg">
                <div className={`w-8 h-8 rounded-full bg-neutral-900 transition-all ${correctAnswer === "B" ? "ml-4" : "ml-5"}`} />
                <div className="w-full h-1.5 bg-neutral-200 rounded" />
                <div className="w-2/3 h-1.5 bg-neutral-200 rounded" />
              </div>
              <span className="text-[10px] text-neutral-400 mt-2">
                {correctAnswer === "B" ? "Aligned on exact 8px grid" : "Slightly shifted by 2px"}
              </span>
            </div>
          </div>

          {/* Eye Test Results Area */}
          {testResult !== "idle" && (
            <div className="mt-4 flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-200/50 animate-fadeIn">
              <div className="flex items-center gap-2">
                {testResult === "success" ? (
                  <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                    <Check className="w-4 h-4 text-emerald-600" /> Perfect alignment. Your eyes are sharp!
                  </div>
                ) : (
                  <div className="text-red-500 text-xs font-semibold">
                    Missed! The grid lines do not lie.
                  </div>
                )}
              </div>
              <button
                onClick={handleNextEyeTest}
                className="flex items-center gap-1 px-3 py-1 bg-neutral-900 hover:bg-neutral-800 text-white rounded text-xs font-medium cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Next Challenge (Lv. {testLevel + 1})
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
