"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageSlot: string;
  url?: string;
}

const certificates: Certificate[] = [
  {
    title: "Kontes Kapal Indonesia (KKI) 2025 — ASV",
    issuer: "Universitas Maritim Raja Ali Haji (UMRAH)",
    date: "2025",
    imageSlot: "/sertifikat-kki25-asv.jpg",
    url: "/sertifikat-kki25-asv.jpg",
  },
  {
    title: "Astra Honda Motor Best Student (AHMBS) — 2nd Place Regional",
    issuer: "PT Astra Honda Motor",
    date: "2025",
    imageSlot: "/sertifikat-ahmbs-juara2.jpeg",
    url: "/sertifikat-ahmbs-juara2.jpeg",
  },
  {
    title: "Astra Honda Motor Best Student — National Grand Finalist",
    issuer: "PT Astra Honda Motor",
    date: "2025",
    imageSlot: "/sertifikat-ahmbs-grandfinalis.jpeg",
    url: "/sertifikat-ahmbs-grandfinalis.jpeg",
  },
  {
    title: "Sertifikat KKI — Kompetisi Kapal Indonesia",
    issuer: "BPTI / Kemendikbudristek",
    date: "2025",
    imageSlot: "/sertifikat-kki.png",
    url: "/sertifikat-kki.png",
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-28 md:py-32 px-6 md:px-8">
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
              Certificates
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text tracking-tight">
            Credentials & Achievements
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
            A showcase of completed courses, certifications, and recognized achievements.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="card group flex flex-col overflow-hidden"
            >
              {/* Image slot */}
              <div className="relative aspect-[4/3] bg-surface-alt overflow-hidden">
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-accent-warm/10 border border-accent-warm/20">
                  <Award size={14} className="text-accent-warm" />
                </div>

                {/* Image or placeholder */}
                {cert.imageSlot && !cert.imageSlot.startsWith("[") ? (
                  <Image
                    src={cert.imageSlot}
                    alt={cert.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-border/30 flex items-center justify-center group-hover:bg-border/50 transition-colors duration-300">
                      <ImageIcon size={22} className="text-text-muted/40 group-hover:text-text-muted/60 transition-colors duration-300" />
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <div>
                  <h3 className="text-lg font-serif font-bold text-text mb-1 group-hover:text-accent-warm transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {cert.issuer}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="text-xs text-text-muted font-medium">
                    {cert.date}
                  </span>

                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent-warm transition-colors duration-300"
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
