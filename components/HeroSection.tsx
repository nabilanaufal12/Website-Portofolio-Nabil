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
            {/* Availability badge */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-text-muted text-sm">
                Available for opportunities
              </span>
            </div>

            {/* Greeting + Name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-text-muted text-lg mb-2">Hi there, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-text mb-4 tracking-tight leading-[1.1]">
                Nabil
                <span className="text-accent-warm">.</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-primary mb-4"
            >
              Web Developer & Robotics Programmer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-text-muted leading-relaxed mb-8 max-w-lg text-base md:text-lg"
            >
              Merging robust web development with automation and computer vision
              to build future-ready solutions.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-l-2 border-accent-warm/50 pl-4 py-1 mb-10"
            >
              <p className="text-sm text-text-muted italic leading-relaxed">
                &quot;Done is better than perfect, but keep improving.&quot;
              </p>
            </motion.blockquote>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-black font-semibold text-sm hover:bg-accent/80 transition-colors duration-300 shadow-sm"
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
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-text font-semibold text-sm hover:border-primary/40 hover:bg-surface-alt transition-all duration-300"
              >
                <Mail size={16} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Soft decorative ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 blur-sm" />

            {/* Photo container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden border-4 border-accent shadow-lg shadow-accent/20">
              <Image
                src="/profil.jpg"
                alt="Foto profil Nabil — Informatics Engineering student"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating badge — Semester */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -right-2 top-1/4 bg-surface border border-border rounded-2xl px-4 py-3 shadow-md"
            >
              <p className="text-xs text-text-muted mb-0.5">Semester</p>
              <p className="text-xl font-bold font-serif text-accent-warm">5th</p>
            </motion.div>

            {/* Floating badge — Role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -left-4 bottom-1/4 bg-surface border border-border rounded-2xl px-4 py-3 shadow-md"
            >
              <p className="text-xs text-text-muted mb-0.5">Role</p>
              <p className="text-sm font-bold text-accent">Lead Programmer</p>
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
