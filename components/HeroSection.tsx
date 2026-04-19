"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Code2 } from "lucide-react";





function TypewriterText({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentTextIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(current.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <span className="text-primary font-mono">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function HeroSection() {
  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden dot-grid"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono text-primary text-xs tracking-widest uppercase">
                Available for opportunities
              </span>
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                Hi there, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Nabil</span>.
              </h1>
            </motion.div>

            <p className="text-lg text-text-muted mb-3 font-medium">
              Informatics Engineering Student
            </p>

            <div className="text-xl md:text-2xl font-semibold text-text mb-6 h-8">
              <TypewriterText
                texts={[
                  "Web Developer",
                  "Robotics Programmer",
                  "ASV Researcher",
                  "Open Source Enthusiast",
                ]}
              />
            </div>

            <p className="text-text-muted leading-relaxed mb-8 max-w-lg">
              Merging robust web development with automation and computer vision
              to build future-ready solutions.
            </p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <p className="font-mono text-xs text-text-muted mt-8 mb-8 italic border-l-2 border-primary/30 pl-4 py-1">
                &quot;Done is better than perfect, but keep improving.&quot;
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:opacity-90 transition-all glow-cyan"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text-muted font-semibold hover:border-primary/40 hover:text-text hover:bg-surface-alt transition-all"
              >
                <Code2 size={16} />
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right - 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[420px] lg:h-[500px]"
        >
          {/* Slot label */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 font-mono text-xs text-primary/60 tracking-wider border border-primary/20 rounded px-3 py-1 bg-bg/80">
            [SLOT_GAMBAR_3D_ASV_BOAT_MODEL]
          </div>

          <div className="absolute inset-0 rounded-2xl border border-border overflow-hidden bg-bg">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-lg z-10" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/60 rounded-tr-lg z-10" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent/60 rounded-bl-lg z-10" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/60 rounded-br-lg z-10" />

            <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center backdrop-blur-sm bg-bg/50">
              <div className="w-48 h-48 mb-6 rounded-full border border-primary/30 flex items-center justify-center overflow-hidden glow-cyan animate-pulse bg-surface">
                 <img src="/ASV_NAVANTARA2.obj" alt="ASV Model Graphic" className="hidden" /> {/* Keep reference if user adds a real image later */}
                 <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex flex-col items-center justify-center">
                    <Code2 size={48} className="text-primary mb-2 opacity-80" />
                    <span className="font-mono text-xs text-primary font-bold tracking-widest uppercase">ASV SYS</span>
                 </div>
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
                 ASV Navantara
              </h3>
              <p className="text-sm text-text-muted font-mono max-w-xs">
                 Autonomous Surface Vehicle 
                 <br />
                 System Visualization
              </p>
            </div>
          </div>

          {/* Stats badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 top-1/3 bg-surface border border-border rounded-xl p-3 shadow-xl"
          >
            <p className="font-mono text-xs text-text-muted">Semester</p>
            <p className="text-2xl font-bold text-primary">4th</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -left-4 bottom-1/3 bg-surface border border-border rounded-xl p-3 shadow-xl"
          >
            <p className="font-mono text-xs text-text-muted">Role</p>
            <p className="text-sm font-bold text-accent">Lead Programmer</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  );
}
