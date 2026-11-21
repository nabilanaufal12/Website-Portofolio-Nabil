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
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent-warm rounded-full" />
            <span className="text-accent-warm text-sm font-medium tracking-wide">
              Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text tracking-tight">
            Technical Stack
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
            Technologies and tools I work with daily.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-surface-alt border border-border">
                    <Icon size={18} className="text-accent-warm" />
                  </div>
                  <h3 className="font-semibold text-sm text-text">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-surface-alt border border-border text-xs font-medium text-text-muted hover:border-accent/40 hover:text-text transition-colors duration-300 cursor-default"
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