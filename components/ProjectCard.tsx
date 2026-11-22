"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Image as ImageIcon, ArrowRight, Lock } from "lucide-react";
import Image from "next/image";

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
  type?: "web" | "research" | "academic";
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="card group flex flex-col overflow-hidden"
    >
      {/* Image slot */}
      <div className="relative aspect-[16/9] bg-surface-alt overflow-hidden">
        {/* Type badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`text-xs font-bold tracking-wide px-3 py-1 rounded-full ${
              type === "research"
                ? "text-black bg-accent border border-primary/20 shadow-sm"
                : type === "academic"
                ? "text-primary bg-primary/10 border border-primary/20"
                : "text-black bg-accent border border-primary/20 shadow-sm"
            }`}
          >
            {type === "research"
              ? "Research"
              : type === "academic"
              ? "Academic"
              : "Web App"}
          </span>
        </div>

        {/* Image or placeholder */}
        {imageSlot && !imageSlot.startsWith("[") ? (
          <a
            href={githubUrl || liveUrl || "#"}
            target={githubUrl || liveUrl ? "_blank" : undefined}
            rel={githubUrl || liveUrl ? "noopener noreferrer" : undefined}
            className="block w-full h-full relative"
          >
            <Image
              src={imageSlot}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </a>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
            <div className="w-14 h-14 rounded-2xl bg-border/30 flex items-center justify-center group-hover:bg-border/50 transition-colors duration-300">
              <ImageIcon size={22} className="text-text-muted/40 group-hover:text-text-muted/60 transition-colors duration-300" />
            </div>
          </div>
        )}

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="mb-1">
          <h3 className="text-lg font-serif font-bold text-text mb-2 group-hover:text-accent-warm transition-colors duration-300">
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
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-surface-alt border border-border text-text-muted"
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-text transition-colors duration-300"
            >
              <Github size={14} />
              Source
            </a>
          )}
          {!githubUrl && isPrivate && (
            <span className="flex items-center gap-1.5 text-xs text-text-muted cursor-default select-none">
              <Lock size={13} className="text-accent/70" />
              <span className="text-accent/70 font-medium">Private Repo</span>
            </span>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent-warm transition-colors duration-300"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          <span className="ml-auto flex items-center gap-1 text-xs font-medium text-text-muted/60 group-hover:text-accent-warm transition-colors duration-300">
            View Details
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
