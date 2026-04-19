"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, Terminal, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Head of Programmer Division",
    company: "UKM Robotika UMRAH",
    period: "2025 — Present",
    description:
      "Leading the programming division, managing the R&D roadmap, and overseeing technical training for division members. Spearheading software and automation research for intelligent systems.",
    achievements: [
      "Led the team to win Juara Harapan 1 (National Level) at the Kontes Kapal Indonesia (KKI) 2025.",
      "Developed Python-based backend logic and sensor integration for the Autonomous Surface Vehicle (ASV) Navantara.",
    ],
    icon: Terminal,
  },
  {
    id: 2,
    role: "Core IT Team & 3D Modeler",
    company: "ARSULA Project (Community Service)",
    period: "2026",
    description:
      "Collaborated as a technical team member in a community service project to build an Augmented Reality (AR) application for Museum Sultan Sulaiman Badrul Alamsyah.",
    achievements: [
      "Designed and optimized 3D artifact models to be rendered within the AR environment.",
      "Managed the technical documentation for the ARSULA application to ensure a smooth project handover.",
    ],
    icon: Briefcase,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono text-primary text-xs tracking-widest uppercase">
              03 / Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text tracking-tight">
            Work & Leadership
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
            A timeline of my professional roles, leadership positions, and core technical contributions.
          </p>
        </motion.div>

        {/* Timeline Container */}
        {/* Kontras garis diperhalus agar tidak terlalu mendistraksi konten utama */}
        <div className="relative border-l-2 border-border/40 ml-4 md:ml-6 space-y-16">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Dot/Icon */}
                <div className="absolute left-[-22px] md:left-[-25px] top-0 w-11 h-11 md:w-12 md:h-12 bg-bg border-2 border-border group-hover:border-primary/50 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] group-hover:scale-110">
                  <Icon size={20} className="text-text-muted group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Content Card */}
                {/* Repetisi radius secara konsisten dan interaksi hover transparan padu */}
                <div className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl bg-surface/30 backdrop-blur-sm border border-border group-hover:border-primary/30 group-hover:bg-surface/50 transition-all duration-300 shadow-sm">

                  {/* Header Group */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 border-b border-border/50 pb-5">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-xl md:text-2xl font-bold text-text group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-base font-semibold text-accent/90 tracking-wide">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted font-mono text-sm bg-surface-alt/70 px-4 py-1.5 rounded-full border border-border shrink-0 shadow-inner">
                      <Calendar size={14} className="text-primary/70" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description Group */}
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements Group */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-2 flex flex-col gap-4 bg-surface-alt/20 p-5 rounded-xl border border-border/40">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-text uppercase tracking-widest">
                        <Award size={16} className="text-green" />
                        Key Achievements
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm md:text-base text-text-muted">
                            <ChevronRight size={18} className="text-primary/80 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
