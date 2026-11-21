"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Navantara ASV — Autonomous Surface Vessel",
    description:
      "Full autonomous navigation and perception stack for a competition-class catamaran ASV competing in Kontes Kapal Indonesia (KKI). Implements ROS 2 navigation, YOLOv11 buoy detection via NVIDIA TensorRT on Jetson Orin Nano, rolling costmaps, Pure Pursuit path tracking, and ESP32 firmware for closed-loop propulsion control.",
    tags: [
      { label: "ROS 2" },
      { label: "Python" },
      { label: "YOLOv11 / TensorRT" },
      { label: "NVIDIA Jetson" },
      { label: "ESP32" },
    ],
    imageSlot: "/project-asv.jpg",
    githubUrl: "https://github.com/nabilanaufal12/asv_control_system-new",
    type: "research" as const,
  },
  {
    title: "Temu UMRAH — Campus Activity Platform",
    description:
      "Full-stack web platform for managing student organization events, ticket registrations, and campus activities at UMRAH. Features multi-role access control, automated QR e-tickets, event approval workflows, Google OAuth login, and certificate issuance.",
    tags: [
      { label: "Laravel 11" },
      { label: "MySQL" },
      { label: "Tailwind CSS" },
      { label: "Google OAuth" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_TEMU_UMRAH]",
    githubUrl: "https://github.com/nabilanaufal12/temu-umrah",
    type: "web" as const,
  },
  {
    title: "Smart KJA — IoT Aquaculture Monitor",
    description:
      "Mobile application for real-time telemetry monitoring of marine aquaculture (floating net cages / Keramba Jaring Apung). Integrates LoRa-based sensor nodes for water quality, temperature, and dissolved oxygen readings, with configurable alert thresholds.",
    tags: [
      { label: "Flutter / Dart" },
      { label: "IoT" },
      { label: "LoRa" },
      { label: "Sensor Telemetry" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_SMART_KJA]",
    githubUrl: "https://github.com/nabilanaufal12/smart_kja",
    type: "research" as const,
  },
  {
    title: "GeoMath WebAR — Geometry in Augmented Reality",
    description:
      "Web-based augmented reality tool that renders interactive 3D geometric shapes directly in the browser using AR.js and Three.js. Designed to help students visualize abstract geometry concepts without requiring any app installation.",
    tags: [
      { label: "WebAR" },
      { label: "AR.js" },
      { label: "Three.js" },
      { label: "JavaScript" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_GEOMATH]",
    githubUrl: "https://github.com/nabilanaufal12/GeoMath-WebAR",
    type: "web" as const,
  },
  {
    title: "Merayau Benan — Local Service Portal",
    description:
      "Multi-service ordering platform for local island commerce (food, transport, etc.) in Benan Island. Built with Vanilla JS MVC architecture, integrating Google Gemini API as an intelligent assistant and WhatsApp for seamless order delivery.",
    tags: [
      { label: "JavaScript (MVC)" },
      { label: "Gemini API" },
      { label: "WhatsApp API" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_MERAYAU]",
    githubUrl: "https://github.com/nabilanaufal12/Merayau-Benan",
    type: "web" as const,
  },
  {
    title: "IoT Flood Early Warning System",
    description:
      "Programmatic sensor simulation and hardware wiring design for a real-time flood early warning system. Implements threshold-based alert logic with microcontroller integration.",
    tags: [
      { label: "IoT" },
      { label: "Microcontroller" },
      { label: "HTML / JS" },
    ],
    imageSlot: "[SLOT_GAMBAR_PROJECT_FLOOD]",
    githubUrl: "https://github.com/nabilanaufal12/Flood-Early-Warning-System",
    type: "research" as const,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 md:py-32 px-6 md:px-8 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent-warm rounded-full" />
            <span className="text-accent-warm text-sm font-medium tracking-wide">
              Projects
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-text tracking-tight">
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
              className="text-sm text-accent-warm hover:text-accent-warm/80 transition-colors duration-300 flex items-center gap-1.5 shrink-0 font-medium"
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
