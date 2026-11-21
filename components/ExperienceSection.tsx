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
      "Leading the programming division of UKM Robotika UMRAH, managing the R&D roadmap, overseeing technical training for division members, and coordinating software and automation research for intelligent robotics systems.",
    achievements: [
      "Led autonomous navigation software development for Navantara ASV competing in Kontes Kapal Indonesia (KKI) 2026 organized by BPTI / Kemendikbudristek.",
      "Developed full ROS 2 navigation stack: Pure Pursuit path tracking, rolling 2D costmaps, buoy gate detection with YOLOv11 on NVIDIA Jetson Orin Nano.",
      "Designed and deployed ESP32 firmware for closed-loop propulsion control and inverse kinematics on the physical vessel.",
    ],
    icon: Terminal,
  },
  {
    id: 2,
    role: "Executive Committee & Public Relations",
    company: "Komunitas Generasi Baru Indonesia (GenBI) Kepri — Komsat UMRAH",
    period: "2026 — Present",
    description:
      "Active member of the Bank Indonesia scholarship recipient community (GenBI), driving social empowerment initiatives, institutional media development, and event secretariats.",
    achievements: [
      "Appointed as Sekretaris Pelaksana for 'Revitalisasi Rumah Pintar (RUMPI) Tahap 1', managing full administrative workflows, official certifications, and stakeholder communications.",
      "Served on the Public Relations & Media team for the GenBI Profile Video and committee for major student initiatives including GENCAST, Kuliah Umum, and GEMA.",
    ],
    icon: Award,
  },
  {
    id: 3,
    role: "Autonomous Systems Lead & Competition Finalist",
    company: "Kontes Kapal Indonesia (KKI) — Navantara UMRAH",
    period: "2025 — 2026",
    description:
      "Represented UMRAH in the national Kontes Kapal Indonesia organized by Balai Pengembangan Talenta Indonesia (BPTI / Kemendikbudristek). Served as lead programmer for the Autonomous Surface Vessel (ASV) team.",
    achievements: [
      "Finalis Nasional Kategori Autonomous Surface Vessel (ASV) KKI 2026 di Politeknik Negeri Bengkalis.",
      "Juara Harapan 1 Tingkat Nasional KKI 2025 dengan sistem navigasi otomatis berbasis computer vision.",
    ],
    icon: Award,
  },
  {
    id: 4,
    role: "Core IT Team & 3D Modeler",
    company: "ARSULA Project (Community Service)",
    period: "2026",
    description:
      "Contributed to a community service project developing an Augmented Reality application for Museum Sultan Sulaiman Badrul Alamsyah, bringing historical artifacts to life for museum visitors.",
    achievements: [
      "Designed and optimized 3D artifact models for real-time AR rendering.",
      "Authored technical documentation for a smooth project handover to the museum.",
    ],
    icon: Briefcase,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 md:py-32 px-6 md:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-accent text-black font-bold text-xs uppercase tracking-wider">
              Career & Leadership
            </span>
          </div>
          <div className="relative">
            <span className="text-accent text-6xl md:text-7xl font-black font-sans leading-none absolute -top-6 -left-4 select-none opacity-90">
              &rdquo;
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text uppercase font-sans">
              EXPERIENCE.
            </h2>
          </div>
          <p className="mt-3 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
            Professional roles, competition leadership, and engineering achievements.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-border ml-4 md:ml-6 space-y-14">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-20px] md:left-[-23px] top-1 w-10 h-10 bg-surface border border-border group-hover:border-accent-warm/50 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 z-10">
                  <Icon size={18} className="text-text-muted group-hover:text-accent-warm transition-colors duration-300" />
                </div>

                {/* Content Card */}
                <div className="card flex flex-col gap-5 p-6 md:p-8 group-hover:border-accent/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 border-b border-border pb-5">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-text group-hover:text-accent-warm transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-base font-medium text-accent tracking-wide">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted text-sm bg-surface-alt px-4 py-1.5 rounded-full border border-border shrink-0">
                      <Calendar size={14} className="text-accent-warm" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="flex flex-col gap-3 bg-surface-alt/50 p-5 rounded-xl border border-border">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-text">
                        <Award size={16} className="text-accent-warm" />
                        Key Achievements
                      </h4>
                      <ul className="flex flex-col gap-2.5">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm md:text-base text-text-muted">
                            <ChevronRight size={16} className="text-accent shrink-0 mt-0.5" />
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
