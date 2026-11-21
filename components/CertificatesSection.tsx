"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageSlot: string;
  url?: string;
  category: "competition" | "organization";
}

const categories = ["All", "Competitions & Awards", "Leadership & Organization"] as const;
type Category = (typeof categories)[number];

const certificates: Certificate[] = [
  {
    title: "Kontes Kapal Indonesia (KKI) 2026 — Finalis Nasional ASV",
    issuer: "BPTI / Kemendikbudristek & Polbeng",
    date: "Sep 2026",
    imageSlot: "/sertifikat-kki26-finalis-asv.png",
    url: "/sertifikat-kki26-finalis-asv.png",
    category: "competition",
  },
  {
    title: "Astra Honda Motor Best Student (AHMBS) — 2nd Place Regional",
    issuer: "PT Astra Honda Motor",
    date: "2025",
    imageSlot: "/sertifikat-ahmbs-juara2.jpeg",
    url: "/sertifikat-ahmbs-juara2.jpeg",
    category: "competition",
  },
  {
    title: "Astra Honda Motor Best Student — National Grand Finalist",
    issuer: "PT Astra Honda Motor",
    date: "2025",
    imageSlot: "/sertifikat-ahmbs-grandfinalis.jpeg",
    url: "/sertifikat-ahmbs-grandfinalis.jpeg",
    category: "competition",
  },
  {
    title: "Kontes Kapal Indonesia (KKI) 2025 — Tim Navantara ASV",
    issuer: "Universitas Maritim Raja Ali Haji (UMRAH)",
    date: "2025",
    imageSlot: "/sertifikat-kki25-asv.jpg",
    url: "/sertifikat-kki25-asv.jpg",
    category: "competition",
  },
  {
    title: "Revitalisasi Rumah Pintar (RUMPI) Tahap 1 — Sekretaris Pelaksana",
    issuer: "Bank Indonesia & GenBI Kepri Komsat UMRAH",
    date: "Sep 2026",
    imageSlot: "/sertifikat-genbi-rumpi-sekretaris.png",
    url: "/sertifikat-genbi-rumpi-sekretaris.png",
    category: "organization",
  },
  {
    title: "GEMA Chapter 1 (UMRAH X STAIN SAR) — Koordinator Humas",
    issuer: "Bank Indonesia & GenBI Kepri Komsat UMRAH",
    date: "Sep 2026",
    imageSlot: "/sertifikat-genbi-gema-humas.png",
    url: "/sertifikat-genbi-gema-humas.png",
    category: "organization",
  },
  {
    title: "Hari Keakraban (HAKRAB) GenBI 2026 — Koordinator Humas",
    issuer: "Bank Indonesia & GenBI Kepri Komsat UMRAH",
    date: "Jul 2026",
    imageSlot: "/sertifikat-genbi-hakrab.png",
    url: "/sertifikat-genbi-hakrab.png",
    category: "organization",
  },
  {
    title: "Kuliah Umum SDGs & Literasi Kebanksentralan — Anggota Humas",
    issuer: "Bank Indonesia & GenBI Kepri Komsat UMRAH",
    date: "Sep 2026",
    imageSlot: "/sertifikat-genbi-kuliah-umum.png",
    url: "/sertifikat-genbi-kuliah-umum.png",
    category: "organization",
  },
  {
    title: "Video Profil GenBI Kepri Komsat UMRAH — Anggota Humas",
    issuer: "Bank Indonesia & GenBI Kepri Komsat UMRAH",
    date: "Okt 2026",
    imageSlot: "/sertifikat-genbi-video-profil-humas.png",
    url: "/sertifikat-genbi-video-profil-humas.png",
    category: "organization",
  },
  {
    title: "GENCAST (GenBI Podcast) 2026 Ep 2 — Anggota Sarpras",
    issuer: "Bank Indonesia & GenBI Kepri Komsat UMRAH",
    date: "Okt 2026",
    imageSlot: "/sertifikat-genbi-gencast-sarpras.png",
    url: "/sertifikat-genbi-gencast-sarpras.png",
    category: "organization",
  },
];

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredCertificates = certificates.filter((cert) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Competitions & Awards") return cert.category === "competition";
    if (activeCategory === "Leadership & Organization") return cert.category === "organization";
    return true;
  });

  return (
    <section id="certificates" className="py-28 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent-warm rounded-full" />
            <span className="text-accent-warm text-sm font-medium tracking-wide">
              Certificates
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-text tracking-tight">
                Credentials & Achievements
              </h2>
              <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
                National competition honors, academic awards, and leadership certifications.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-surface border border-border text-text-muted hover:border-primary/40 hover:text-text"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="card group flex flex-col overflow-hidden"
              >
                {/* Image slot */}
                <div className="relative aspect-[4/3] bg-surface-alt overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-accent-warm/10 border border-accent-warm/20 backdrop-blur-sm">
                    <Award size={14} className="text-accent-warm" />
                  </div>

                  {/* Image or placeholder */}
                  {cert.imageSlot && !cert.imageSlot.startsWith("[") ? (
                    <Image
                      src={cert.imageSlot}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    <h3 className="text-base font-serif font-bold text-text mb-1 group-hover:text-accent-warm transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-medium text-accent">
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
                        View Full
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
