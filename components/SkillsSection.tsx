"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    title: "Web Development",
    icon: Layout,
    skills: ["Laravel 11", "Next.js / React", "TypeScript", "Tailwind CSS", "MySQL", "PHP", "Blade"],
  },
  {
    title: "Robotics & AI",
    icon: Cpu,
    skills: ["ROS 2 (Humble / Jazzy)", "Python", "YOLOv11", "TensorRT", "OpenCV", "Pure Pursuit", "Gazebo Sim"],
  },
  {
    title: "Embedded & Mobile",
    icon: Layers,
    skills: ["ESP32 / Arduino", "Flutter / Dart", "GNSS / GPS", "IMU", "LoRa / Serial / UART", "PWM Actuators"],
  },
  {
    title: "Tools & Environments",
    icon: Terminal,
    skills: ["Ubuntu 24.04 LTS", "Git / GitHub", "Docker", "NVIDIA Jetson Orin Nano", "Zabbix", "VS Code"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 md:py-32 px-6 md:px-8 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
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
              Expertise
            </span>
          </div>
          <div className="relative">
            <span className="text-accent text-6xl md:text-7xl font-black font-sans leading-none absolute -top-6 -left-4 select-none opacity-90">
              &rdquo;
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-text uppercase font-sans">
              TECH ARSENAL.
            </h2>
          </div>
          <p className="mt-3 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
            Technologies and tools I work with daily across robotics, web, and embedded systems.
          </p>
        </motion.div>

        {/* Skills Grid — Poster Cards with Yellow Squircle Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card p-6 flex flex-col gap-4 border-2 border-border hover:border-accent bg-surface transition-all duration-300"
              >
                {/* Yellow Squircle Icon Box like reference poster */}
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-md">
                  <Icon size={26} className="text-black" />
                </div>

                <div>
                  <h3 className="font-black text-base text-text uppercase tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full bg-surface-alt border border-border text-[11px] font-bold text-text-muted hover:border-accent hover:text-text hover:bg-accent/10 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}