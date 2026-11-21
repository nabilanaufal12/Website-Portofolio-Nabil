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
        <motion.div {...fadeIn} className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent-warm rounded-full" />
            <span className="text-accent-warm text-sm font-medium tracking-wide">
              About
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text tracking-tight">
            Who I Am
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
            Background, focus, and what drives me to build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/profil.jpg"
                alt="Foto Profil Profesional Nabil"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-accent-warm/8 blur-2xl pointer-events-none" />
          </motion.div>

          {/* Right — Text */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeIn} transition={{ duration: 0.7, delay: 0.1 }}>
              <p className="text-text-muted leading-relaxed text-base md:text-lg">
                I&apos;m <span className="text-text font-semibold">Nabil</span>,
                a 5th-semester Informatics Engineering student at{" "}
                <span className="text-primary font-semibold">
                  Universitas Maritim Raja Ali Haji (UMRAH)
                </span>
                , maintaining a highly competitive academic standing with a 3.85
                GPA.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.7, delay: 0.2 }}>
              <p className="text-text-muted leading-relaxed text-base md:text-lg">
                Currently serving as the{" "}
                <span className="text-text font-medium">
                  Head of the Programmer Division at UKM Robotika
                </span>
                . My work sits at the intersection of software development,
                intelligent robotics systems, and multimedia design, leading
                technical trainings and delegating tasks for my team.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.7, delay: 0.3 }}>
              <p className="text-text-muted leading-relaxed text-base md:text-lg">
                I run{" "}
                <span className="text-text font-medium italic">
                  Ubuntu 24.04 LTS
                </span>{" "}
                as my daily development environment — reflecting my commitment
                to working closer to the metal, optimizing workflows, and
                embracing the open-source ecosystem.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="card p-4 flex flex-col gap-2.5"
                  >
                    <Icon size={18} className="text-accent-warm" />
                    <p className="text-xs text-text-muted uppercase tracking-wider font-medium">
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
