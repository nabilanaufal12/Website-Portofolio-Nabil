"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 w-full py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Availability & Pill Tag */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-accent text-black font-bold text-xs uppercase tracking-wider shadow-sm">
                Creative Robotics & Dev
              </span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs text-text-muted">
                <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span>Available for opportunities</span>
              </div>
            </div>

            {/* Title with yellow quote — Poster editorial style */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mb-6"
            >
              <span className="text-accent text-7xl sm:text-8xl md:text-9xl font-black font-sans leading-none absolute -top-8 -left-5 select-none opacity-90">
                &rdquo;
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-text leading-[0.95] uppercase font-sans">
                PORTO<br />
                <span className="text-text">FOLO.</span>
              </h1>
              <p className="mt-3 text-base md:text-lg font-bold text-accent tracking-wide uppercase">
                Nabil — Informatics Engineering Student & ASV Lead Programmer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-text-muted leading-relaxed mb-6 max-w-lg text-base md:text-lg"
            >
              Merging robust full-stack web development with autonomous robotics
              and computer vision to build future-ready solutions.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l-4 border-accent pl-4 py-1 mb-8 bg-surface/40 rounded-r-lg"
            >
              <p className="text-sm text-text font-medium italic leading-relaxed">
                &quot;Done is better than perfect, but keep improving.&quot;
              </p>
            </motion.blockquote>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-black font-bold text-sm hover:bg-accent/80 transition-colors duration-300 shadow-md"
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface border-2 border-primary text-text font-bold text-sm hover:bg-surface-alt transition-all duration-300 shadow-sm"
              >
                <Mail size={16} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — Profile Photo with Yellow Backdrop Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Yellow backdrop block from the reference poster */}
            <div className="absolute -top-3 -right-3 w-72 h-80 sm:w-80 sm:h-96 md:w-[320px] md:h-[400px] bg-accent rounded-[2.5rem] rotate-3" />

            {/* Photo container */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-[320px] md:h-[400px] rounded-[2rem] overflow-hidden border-2 border-primary bg-surface shadow-2xl">
              <Image
                src="/profil-nabil-kki.jpg"
                alt="Foto profil Nabil — KKI ASV Lead Programmer"
                fill
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badge — Semester */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-3 bottom-6 bg-accent text-black font-bold border-2 border-primary rounded-2xl px-4 py-2.5 shadow-lg"
            >
              <p className="text-[10px] uppercase tracking-wider text-black/70">Semester</p>
              <p className="text-lg font-black leading-tight">5th</p>
            </motion.div>

            {/* Floating badge — Role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-4 top-10 bg-primary text-white border border-border rounded-2xl px-4 py-2.5 shadow-lg"
            >
              <p className="text-[10px] uppercase tracking-wider text-white/70">National ASV</p>
              <p className="text-xs font-bold leading-tight">Lead Programmer</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted hover:text-accent-warm transition-colors duration-300"
        aria-label="Scroll down to about section"
      >
        <span className="text-xs tracking-wider">Scroll</span>
        <ChevronDown size={18} />
      </motion.button>
    </section>
  );
}
