"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "RentalKu",
    description:
      "A modern car rental and tour package booking platform built with Next.js and Tailwind CSS, focusing on industry-standard UI/UX with seamless booking flows and real-time availability.",
    tags: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Tailwind CSS" },
      { label: "Prisma" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_RENTALKU_UI]",
    githubUrl: "https://github.com/nabilanaufal12/rentalku-nextjs",
    type: "web" as const,
  },
  {
    title: "Autonomous Surface Vehicle (ASV) Research",
    description:
      "Robotics research focusing on Python-based backend logic and GNSS/RTK sensor integration for autonomous navigation. Developed as part of UKM Robotika UMRAH's preparation for KKI 2026.",
    tags: [
      { label: "Python" },
      { label: "GNSS/RTK" },
      { label: "Computer Vision" },
      { label: "ROS2" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_ASV_TESTING]",
    isPrivate: true,
    type: "research" as const,
  },
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
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono text-primary text-xs tracking-widest uppercase">
              03 / Projects
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Featured Work
            </h2>
            <a
              href="https://github.com/nabilanaufal12"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted hover:text-primary transition-colors flex items-center gap-1"
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
