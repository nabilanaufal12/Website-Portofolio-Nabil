"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  FileText,
  Cpu,
  Radio,
  MapPin,
  ImageIcon,
  Star,
  Award,
} from "lucide-react";
import Image from "next/image";

const responsibilities2026 = [
  {
    icon: Users,
    text: "Memimpin roadmap R&D Divisi Pemrograman UKM Robotika UMRAH untuk periode 2026.",
  },
  {
    icon: FileText,
    text: "Mengelola dokumentasi teknis dan memastikan keberlangsungan pengetahuan antar generasi tim.",
  },
  {
    icon: Cpu,
    text: "Mengembangkan logika otomasi dan perangkat lunak embedded untuk platform robotika.",
  },
  {
    icon: Radio,
    text: "Mengintegrasikan sensor GNSS/RTK untuk riset navigasi otonom ASV Navantara.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeIn} className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-primary" />
            <span className="font-mono text-primary text-xs tracking-widest uppercase">
              02 / Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Experience &amp; Achievements
          </h2>
        </motion.div>

        {/* Timeline — vertical on left, cards on right */}
        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent hidden md:block" />

          {/* ── Entry 1: Ketua Divisi 2026 (current) ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex gap-6 pb-12"
          >
            {/* Dot */}
            <div className="hidden md:flex shrink-0 items-start pt-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 z-10">
                <Trophy size={18} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-5">
              {/* Role card */}
              <div className="card p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-lg font-bold text-text">
                        Ketua Divisi Programmer
                      </h3>
                      <span className="font-mono text-[10px] text-green bg-green/10 border border-green/20 rounded-full px-2 py-0.5">
                        Active
                      </span>
                    </div>
                    <p className="text-accent font-semibold text-sm">
                      UKM Robotika UMRAH
                    </p>
                    <div className="flex items-center gap-1 text-text-muted text-xs mt-1">
                      <MapPin size={12} />
                      <span>2025 – 2026</span>
                    </div>
                  </div>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  Memimpin Divisi Programmer untuk mengembangkan kembali sistem{" "}
                  <span className="text-text font-medium">ASV Navantara</span>{" "}
                  pada kompetisi{" "}
                  <span className="text-primary font-medium">
                    Kontes Kapal Indonesia (KKI) 2026
                  </span>
                  , membangun di atas fondasi yang telah berhasil meraih Juara
                  Harapan 1 di tahun sebelumnya.
                </p>

                {/* Responsibilities */}
                <div className="flex flex-col gap-2.5">
                  <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                    Key Responsibilities
                  </p>
                  {responsibilities2026.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className="mt-0.5 w-6 h-6 rounded-lg bg-surface border border-border flex items-center justify-center shrink-0">
                          <Icon size={12} className="text-primary" />
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {item.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Target badge */}
              <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 to-primary/10 p-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-xl pointer-events-none" />
                <div className="relative z-10">
                  <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2">
                    Target 2026
                  </p>
                  <h4 className="text-text font-bold text-base mb-1">
                    KKI 2026 — National Unmanned Fast Boat Contest
                  </h4>
                  <p className="text-text-muted text-sm">
                    Mengembangkan ASV Navantara dengan autopilot dan computer
                    vision yang lebih advanced untuk melampaui pencapaian
                    sebelumnya di tingkat nasional.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Entry 2: Anggota &amp; Programmer ASV 2025 (past) ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex gap-6 pb-12"
          >
            {/* Dot */}
            <div className="hidden md:flex shrink-0 items-start pt-1">
              <div className="w-10 h-10 rounded-full bg-surface border-2 border-accent/60 flex items-center justify-center z-10">
                <Star size={16} className="text-accent" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-5">
              {/* Role card */}
              <div className="card p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-lg font-bold text-text">
                        Anggota — Programmer ASV
                      </h3>
                      <span className="font-mono text-[10px] text-text-muted bg-border border border-border rounded-full px-2 py-0.5">
                        2025
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-sm">
                      UKM Robotika UMRAH
                    </p>
                    <div className="flex items-center gap-1 text-text-muted text-xs mt-1">
                      <MapPin size={12} />
                      <span>2024 – 2025</span>
                    </div>
                  </div>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Bergabung sebagai anggota aktif dan berkontribusi sebagai{" "}
                  <span className="text-text font-medium">
                    Programmer untuk ASV Navantara
                  </span>{" "}
                  pada kompetisi{" "}
                  <span className="text-primary font-medium">
                    Kontes Kapal Indonesia (KKI) 2025
                  </span>
                  . Bertanggung jawab atas pengembangan sistem navigasi otonom
                  dan integrasi sensor.
                </p>
              </div>

              {/* Achievement — Juara Harapan 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-[#f59e0b]/40 bg-gradient-to-r from-[#f59e0b]/10 via-[#fbbf24]/5 to-transparent p-5"
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#f59e0b]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b]/30 to-[#fbbf24]/10 border border-[#f59e0b]/30 flex items-center justify-center shrink-0">
                    <Award size={24} className="text-[#f59e0b]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-[#f59e0b] tracking-widest uppercase mb-1">
                      Achievement — KKI 2025
                    </p>
                    <h4 className="text-text font-bold text-base mb-1">
                      🏆 Juara Harapan 1
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      ASV Navantara meraih{" "}
                      <span className="text-[#f59e0b] font-semibold">
                        Juara Harapan 1
                      </span>{" "}
                      pada Kontes Kapal Indonesia (KKI) 2025 kategori Kapal
                      Cepat Tak Berawak (KCTB), kompetisi autonomi kapal
                      tingkat nasional.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["ASV Navantara", "KKI 2025", "Autonomous Navigation", "Computer Vision"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] text-[#f59e0b]/80 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Stats grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:ml-16 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { label: "Current Role", value: "Kadiv Programmer", accent: "var(--primary)" },
              { label: "Best Achievement", value: "Juara Harapan 1", accent: "#f59e0b" },
              { label: "Competition", value: "KKI 2025 & 2026", accent: "var(--accent)" },
              { label: "Project", value: "ASV Navantara", accent: "var(--green)" },
            ].map((s) => (
              <div
                key={s.label}
                className="card p-4"
                style={{ borderColor: `${s.accent}25` }}
              >
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
                  {s.label}
                </p>
                <p className="font-bold text-sm" style={{ color: s.accent }}>
                  {s.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* ── Image slot ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:ml-16 mt-8"
          >
            <div className="aspect-[16/7] rounded-2xl border border-border bg-surface overflow-hidden relative">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/70 z-10" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent/70 z-10" />

              {/* Experience Image */}
              <Image 
                src="/robotika1.jpeg" 
                alt="Dokumentasi Kegiatan UKM Robotika UMRAH" 
                fill 
                className="object-cover object-center"
              />

              {/* Scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
