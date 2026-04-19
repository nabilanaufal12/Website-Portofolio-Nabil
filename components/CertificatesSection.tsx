"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Image as ImageIcon } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageSlot: string;
  url?: string;
}

const certificates: Certificate[] = [
  {
    title: "Web Development Bootcamp",
    issuer: "Tech Academy",
    date: "Aug 2024",
    imageSlot: "[SLOT_GAMBAR_SERTIFIKAT_WEB_DEV]",
    url: "#",
  },
  {
    title: "Robotics & Automation Basics",
    issuer: "Engineering Institute",
    date: "Dec 2024",
    imageSlot: "[SLOT_GAMBAR_SERTIFIKAT_ROBOTICS]",
  },
  {
    title: "Advanced Data Structures & Algorithms",
    issuer: "University Platform",
    date: "Jan 2025",
    imageSlot: "[SLOT_GAMBAR_SERTIFIKAT_DSA]",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 px-6 bg-surface-alt">
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
              04 / Certificates
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Credentials & Achievements
            </h2>
          </div>
          <p className="mt-3 text-text-muted max-w-lg">
            A showcase of completed courses, certifications, and recognized achievements.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card group flex flex-col overflow-hidden"
            >
              {/* Image slot */}
              <div className="relative aspect-[4/3] bg-bg overflow-hidden border-b border-border">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/50 z-10" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary/50 z-10" />

                {/* Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center justify-center w-8 h-8 rounded-full border border-primary/30 bg-primary/10">
                  <Award size={14} className="text-primary" />
                </div>

                {/* Slot placeholder */}
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-dashed border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <ImageIcon size={24} className="text-primary/30 group-hover:text-primary/60 transition-colors" />
                  </div>
                  <p className="font-mono text-[11px] text-text-muted tracking-wider text-center px-6">
                    {cert.imageSlot}
                  </p>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {cert.issuer}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="font-mono text-xs text-text-muted">
                    {cert.date}
                  </span>
                  
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
