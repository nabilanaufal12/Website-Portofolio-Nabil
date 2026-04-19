"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ARSULA - Museum Augmented Reality",
    description:
      "Collaborated as the core IT team to design 3D models and develop the 'ARSULA' Augmented Reality application for Museum Sultan Sulaiman Badrul Alamsyah, bringing historical artifacts to life.",
    tags: [
      { label: "Augmented Reality" },
      { label: "3D Modeling" },
      { label: "UI/UX" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_ARSULA]",
    type: "web" as const,
  },
  {
    title: "Kontes Kapal Indonesia (KKI) 2025 ASV",
    description:
      "Led the programming division to achieve Juara Harapan 1 at the National level. Developed the backend logic and automation for the Autonomous Surface Vehicle (ASV).",
    tags: [
      { label: "Python" },
      { label: "Robotics" },
      { label: "Computer Vision / YOLO" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_KKI_2025]",
    type: "research" as const,
  },
  {
    title: "IoT Flood Early Warning Simulation",
    description:
      "Designed a programmatic logic and sensor wiring simulation for a flood early warning system. This was developed as a structured coursework project for the 'Internet Untuk Semua' class.",
    tags: [
      { label: "IoT" },
      { label: "Microcontroller" },
      { label: "System Design" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_IOT_SIMULASI]",
    type: "research" as const,
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
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
              04 / Projects
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-text tracking-tight">
                Featured Work
              </h2>
              <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
                Highlighted projects across web, robotics, and intelligent systems.
              </p>
            </div>
            <a
              href="https://github.com/nabilanaufal12"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted hover:text-primary transition-colors flex items-center gap-1 shrink-0"
            >
              View all on GitHub →
            </a>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
