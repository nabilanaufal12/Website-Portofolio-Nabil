"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    color: "var(--primary)",
    skills: [
      { name: "Python", note: "Data Structures, Algorithms" },
      { name: "JavaScript", note: "ES2022+" },
      { name: "TypeScript", note: "Strict Mode" },
    ],
  },
  {
    category: "Frontend",
    color: "var(--accent)",
    skills: [
      { name: "Next.js", note: "App Router" },
      { name: "TailwindCSS", note: "v4" },
      { name: "Three.js", note: "WebGL / 3D" },
      { name: "Framer Motion", note: "Animations" },
    ],
  },
  {
    category: "OS & Tools",
    color: "var(--green)",
    skills: [
      { name: "Ubuntu Linux", note: "24.04 LTS" },
      { name: "Git", note: "Version Control" },
      { name: "Docker", note: "Containerization" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface-alt">
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
              04 / Skills
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Skills & Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="card p-6"
              style={{ borderColor: `${cat.color}20` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="h-1 w-6 rounded"
                  style={{ backgroundColor: cat.color }}
                />
                <h3
                  className="font-mono text-xs uppercase tracking-widest font-bold"
                  style={{ color: cat.color }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.1 + skillIndex * 0.07,
                    }}
                    className="group flex items-center justify-between p-3 rounded-xl bg-bg border border-border hover:border-opacity-50 transition-all"
                    style={
                      {
                        "--hover-border": cat.color,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        `${cat.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "";
                    }}
                  >
                    <span className="text-sm font-semibold text-text">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      {skill.note}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom belt of logos/icons strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-5 rounded-2xl border border-border bg-surface flex flex-wrap items-center justify-center gap-6"
        >
          {[
            "Next.js",
            "TypeScript",
            "Python",
            "Three.js",
            "Tailwind CSS",
            "Framer Motion",
            "Git",
            "Docker",
            "Ubuntu",
          ].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-text-muted hover:text-text transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
