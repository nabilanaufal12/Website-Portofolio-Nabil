"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Send,
  Download,
  Mail,
  MessageSquare,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    handle: "nabilanaufal12",
    icon: Github,
    url: "https://github.com/nabilanaufal12",
    color: "#ffffff",
  },
  {
    name: "LinkedIn",
    handle: "Nabil Naufal",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/nabil-naufal-681004372/",
    color: "#0077b5",
  },
  {
    name: "Instagram",
    handle: "nabilanaufal12",
    icon: Instagram,
    url: "https://www.instagram.com/nabilanaufal12/",
    color: "#e1306c",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to an email service (e.g. Resend / EmailJS)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
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
              05 / Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text">
            Connect With Me
          </h2>
          <p className="mt-3 text-text-muted max-w-lg">
            Have a project in mind or want to collaborate? Drop me a message
            below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={18} className="text-primary" />
                <h3 className="text-base font-bold text-text">
                  Send a Message
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-green/20 border border-green/30 flex items-center justify-center mb-4">
                    <Send size={24} className="text-green" />
                  </div>
                  <p className="text-green font-semibold">
                    Message sent successfully!
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="font-mono text-xs text-text-muted tracking-wider uppercase block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-text-muted tracking-wider uppercase block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-text-muted tracking-wider uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project..."
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <Send size={16} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right - Social links + CV */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Email direct */}
            <div className="card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                  Email
                </p>
                <p className="text-sm font-medium text-text">
                  nabilanaufal12@gmail.com
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="card p-4 flex items-center gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-bg border border-border group-hover:border-opacity-50 transition-all"
                    >
                      <Icon size={18} style={{ color: social.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text">
                        {social.name}
                      </p>
                      <p className="font-mono text-xs text-text-muted">
                        @{social.handle}
                      </p>
                    </div>
                    <span className="text-xs text-text-muted group-hover:text-primary transition-colors font-mono">
                      →
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* CV Download */}
            <motion.a
              href="/[SLOT_DOKUMEN_CV_PDF]"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 p-4 rounded-2xl border border-dashed border-border hover:border-accent/40 bg-surface text-text-muted hover:text-text transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Download size={18} className="text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Download CV</p>
                <p className="font-mono text-xs text-text-muted">
                  [SLOT_DOKUMEN_CV_PDF]
                </p>
              </div>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Nabil. Built with Next.js &amp;
            TypeScript.
          </p>
          <p className="font-mono text-xs text-text-muted">
            &quot;Done is better than perfect, but keep improving.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
