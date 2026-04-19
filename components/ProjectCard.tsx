"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Image as ImageIcon, ArrowRight, Lock } from "lucide-react";

interface Tag {
  label: string;
  color?: string;
}

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  tags: Tag[];
  imageSlot: string;
  githubUrl?: string;
  liveUrl?: string;
  type?: "web" | "research";
  isPrivate?: boolean;
}

export default function ProjectCard({
  index,
  title,
  description,
  tags,
  imageSlot,
  githubUrl,
  liveUrl,
  type = "web",
  isPrivate = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card group flex flex-col overflow-hidden"
    >
      {/* Image slot */}
      <div className="relative aspect-[16/9] bg-bg overflow-hidden border-b border-border">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-primary/50 z-10" />
        <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-primary/50 z-10" />

        {/* Type badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`font-mono text-[10px] tracking-wider px-2 py-1 rounded-full border ${
              type === "research"
                ? "text-accent border-accent/30 bg-accent/10"
                : "text-primary border-primary/30 bg-primary/10"
            }`}
          >
            {type === "research" ? "Research" : "Web App"}
          </span>
        </div>

        {/* Slot placeholder */}
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-dashed border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
            <ImageIcon size={24} className="text-primary/30 group-hover:text-primary/60 transition-colors" />
          </div>
          <p className="font-mono text-[11px] text-text-muted tracking-wider text-center px-6">
            {imageSlot}
          </p>
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="mb-2">
          <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary-dim dark:text-primary/90"
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-text transition-colors"
            >
              <Github size={14} />
              Source
            </a>
          )}
          {!githubUrl && isPrivate && (
            <span className="flex items-center gap-1.5 text-xs text-text-muted cursor-default select-none">
              <Lock size={13} className="text-accent/70" />
              <span className="font-mono text-accent/70">Private Repo</span>
            </span>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          <span className="ml-auto flex items-center gap-1 text-xs text-primary/60 group-hover:text-primary transition-colors">
            View Details
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
