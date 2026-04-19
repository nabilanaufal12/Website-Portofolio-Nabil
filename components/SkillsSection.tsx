"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Layers, 
  Terminal, 
  Layout, 
  Box 
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "HTML/CSS"],
    color: "var(--primary)",
  },
  {
    title: "Robotics & AI",
    icon: Cpu,
    skills: ["Python", "YOLO Framework", "Computer Vision", "Autonomous Systems", "Microcontrollers"],
    color: "var(--accent)",
  },
  {
    title: "System & Design",
    icon: Layers,
    skills: ["UI/UX Design (Figma)", "3D Modeling", "System Analysis", "IoT Simulation"],
    color: "var(--green)",
  },
  {
    title: "Tools & Environment",
    icon: Terminal,
    skills: ["Ubuntu 24.04 LTS", "Git / GitHub", "Docker", "VS Code"],
    color: "var(--primary)",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
              02 / Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Technical Stack
          </h2>
        </motion.div>

        {/* Skills Grid */}
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
                className="card p-6 flex flex-col gap-4 border-l-2"
                style={{ borderLeftColor: category.color }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface-alt">
                    <Icon size={20} style={{ color: category.color }} />
                  </div>
                  <h3 className="font-bold text-sm text-text">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-surface-alt border border-border text-[11px] font-mono text-text-muted hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* OS Focus Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-4 rounded-xl border border-dashed border-border bg-surface/30 flex items-center justify-center gap-3"
        >
          <Box size={16} className="text-primary" />
          <p className="text-xs font-mono text-text-muted">
            Environment: Optimized for <span className="text-primary">Ubuntu 24.04 LTS</span> development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}