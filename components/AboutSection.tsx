"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, MapPin } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Monitor,
    label: "Primary OS",
    value: "Ubuntu 24.04 LTS",
  },
  {
    icon: Cpu,
    label: "Focus Areas",
    value: "Web Dev & Robotics",
  },
  {
    icon: MapPin,
    label: "University",
    value: "UMRAH — Semester 5",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeIn} className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-accent text-black font-bold text-xs uppercase tracking-wider">
              About Me
            </span>
          </div>
          <div className="relative">
            <span className="text-accent text-6xl md:text-7xl font-black font-sans leading-none absolute -top-6 -left-4 select-none opacity-90">
              &rdquo;
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text uppercase font-sans">
              HELLO.
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols) — Photo & Let's Work Together Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Photo with yellow background block */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full bg-accent rounded-3xl -rotate-2" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-primary bg-surface shadow-xl">
                <Image
                  src="/profil-nabil-kki.jpg"
                  alt="Foto Profil Nabil"
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Let's Work Together Card — Style like reference poster */}
            <div className="p-6 rounded-2xl bg-accent text-black border-2 border-primary shadow-lg flex flex-col gap-3">
              <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
                Let&apos;s Work Together :
              </h3>
              <div className="flex flex-col gap-2 text-xs font-semibold">
                <a
                  href="mailto:nabilxmia@gmail.com"
                  className="flex items-center gap-2 text-black hover:underline"
                >
                  ✉️ <span>nabilxmia@gmail.com</span>
                </a>
                <a
                  href="https://github.com/nabilanaufal12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black hover:underline"
                >
                  🐙 <span>github.com/nabilanaufal12</span>
                </a>
                <div className="flex items-center gap-2 text-black/80">
                  📍 <span>Tanjungpinang, Kepulauan Riau</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 cols) — Bio & Structured Editorial Blocks */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div {...fadeIn} transition={{ duration: 0.7, delay: 0.1 }}>
              <p className="text-text leading-relaxed text-base md:text-lg font-medium">
                I&apos;m <span className="font-black text-black dark:text-white">Nabil</span>,
                an Informatics Engineering student at{" "}
                <span className="font-bold text-black dark:text-white underline decoration-accent decoration-2">
                  Universitas Maritim Raja Ali Haji (UMRAH)
                </span>
                . Currently in 5th semester, serving as{" "}
                <span className="font-bold text-black dark:text-white">
                  Head of Programmer Division at UKM Robotika
                </span>{" "}
                and National Autonomous Surface Vehicle (ASV) Team Lead.
              </p>
            </motion.div>

            {/* Editorial Blocks with Yellow Underlines like Reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              {/* Education Block */}
              <div>
                <h4 className="text-base font-black uppercase tracking-wider text-text pb-1 inline-block border-b-4 border-accent mb-3">
                  Education
                </h4>
                <div className="text-sm">
                  <p className="font-bold text-text">Informatics Engineering</p>
                  <p className="text-xs text-text-muted mt-0.5">Universitas Maritim Raja Ali Haji</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-surface border border-border text-[11px] font-bold text-text">
                    2023 — Present (Sem 5, GPA 3.85)
                  </span>
                </div>
              </div>

              {/* Working Experience Block */}
              <div>
                <h4 className="text-base font-black uppercase tracking-wider text-text pb-1 inline-block border-b-4 border-accent mb-3">
                  Key Roles
                </h4>
                <div className="text-sm flex flex-col gap-2">
                  <div>
                    <p className="font-bold text-text">Lead Programmer — UKM Robotika</p>
                    <p className="text-xs text-text-muted">Navantara ASV Team (KKI 2025 & 2026)</p>
                  </div>
                  <div>
                    <p className="font-bold text-text">Public Relations Coordinator</p>
                    <p className="text-xs text-text-muted">GenBI Kepri Komsat UMRAH (2026–2027)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="card p-4 flex flex-col gap-2 border-2 border-border hover:border-accent bg-surface"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Icon size={18} className="text-black dark:text-accent" />
                    </div>
                    <p className="text-[11px] text-text-muted uppercase tracking-wider font-bold">
                      {item.label}
                    </p>
                    <p className="text-xs font-black text-text">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
