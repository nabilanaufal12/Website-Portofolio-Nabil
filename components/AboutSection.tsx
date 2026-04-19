"use client";

import { motion } from "framer-motion";
import { User, Monitor, Cpu, MapPin } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Monitor,
    label: "Primary OS",
    value: "Ubuntu 24.04 LTS",
    color: "var(--primary)",
  },
  {
    icon: Cpu,
    label: "Focus Areas",
    value: "Web Dev & Robotics",
    color: "var(--accent)",
  },
  {
    icon: MapPin,
    label: "University",
    value: "UMRAH — Semester 4",
    color: "var(--green)",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeIn} className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono text-primary text-xs tracking-widest uppercase">
              01 / About
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text tracking-tight">Who I Am</h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
            Background, focus, and what drives me to build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image slot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md rounded-2xl overflow-hidden border border-border bg-surface">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/70 z-10" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/70 z-10" />

              {/* Profile Image */}
              <Image
                src="/profil.jpg"
                alt="Foto Profil Profesional Nabil"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/5 blur-xl pointer-events-none" />
          </motion.div>

          {/* Right - Text */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-text-muted leading-relaxed text-base">
                I&apos;m <span className="text-text font-semibold">Nabil</span>,
                a 4th-semester Informatics Engineering student at{" "}
                <span className="text-primary font-semibold">
                  Universitas Maritim Raja Ali Haji (UMRAH)
                </span>
                , maintaining a highly competitive academic standing with a 3.85
                GPA.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.2 }}>
              <p className="text-text-muted leading-relaxed text-base">
                Currently serving as the{" "}
                <span className="text-text font-medium">
                  Head of the Programmer Division at UKM Robotika
                </span>
                . My work sits at the intersection of software development,
                intelligent robotics systems, and multimedia design, leading
                technical trainings and delegating tasks for my team.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.3 }}>
              <p className="text-text-muted leading-relaxed text-base">
                I run{" "}
                <span className="font-mono text-green text-sm">
                  Ubuntu 24.04 LTS
                </span>{" "}
                as my daily development environment — reflecting my commitment
                to working closer to the metal, optimizing workflows, and
                embracing the open-source ecosystem.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="card p-4 flex flex-col gap-2"
                    style={{
                      borderColor: `${item.color}20`,
                    }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                    <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-text">
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
