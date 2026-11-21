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
  },
  {
    name: "LinkedIn",
    handle: "Nabil Naufal",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/nabil-naufal-681004372/",
  },
  {
    name: "Instagram",
    handle: "nabilanaufal12",
    icon: Instagram,
    url: "https://www.instagram.com/nabilanaufal12/",
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
    const mailtoUrl = `mailto:nabilxmia@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 md:py-32 px-6 md:px-8 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent-warm rounded-full" />
            <span className="text-accent-warm text-sm font-medium tracking-wide">
              Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text tracking-tight">
            Connect With Me
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-lg leading-relaxed">
            Have a project in mind or want to collaborate? Drop me a message
            below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="card p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={18} className="text-accent-warm" />
                <h3 className="text-base font-semibold text-text">
                  Send a Message
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-green/15 border border-green/25 flex items-center justify-center mb-4">
                    <Send size={22} className="text-green" />
                  </div>
                  <p className="text-green font-semibold">
                    Message sent successfully!
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="text-sm text-text-muted font-medium block mb-2">
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
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent-warm/50 focus:ring-1 focus:ring-accent-warm/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-text-muted font-medium block mb-2">
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
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent-warm/50 focus:ring-1 focus:ring-accent-warm/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-text-muted font-medium block mb-2">
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
                      className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent-warm/50 focus:ring-1 focus:ring-accent-warm/20 transition-all duration-300 resize-none"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover transition-colors duration-300"
                  >
                    <Send size={16} />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right — Social links + CV */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Email direct */}
            <a
              href="mailto:nabilxmia@gmail.com"
              className="card p-5 flex items-center gap-4 hover:border-accent-warm/40 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-warm/10 border border-accent-warm/20 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-accent-warm" />
              </div>
              <div>
                <p className="text-xs text-text-muted font-medium mb-0.5">
                  Email
                </p>
                <p className="text-sm font-semibold text-text">
                  nabilxmia@gmail.com
                </p>
              </div>
            </a>

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
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 3 }}
                    className="card p-4 flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-surface-alt border border-border group-hover:border-accent/30 transition-all duration-300">
                      <Icon size={18} className="text-text-muted group-hover:text-accent-warm transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-text">
                        {social.name}
                      </p>
                      <p className="text-xs text-text-muted">
                        @{social.handle}
                      </p>
                    </div>
                    <span className="text-sm text-text-muted group-hover:text-accent-warm transition-colors duration-300">
                      →
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* CV Download / Request */}
            <motion.a
              href="mailto:nabilxmia@gmail.com?subject=Request%20CV%20-%20Nabil"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between p-4 rounded-2xl border border-dashed border-border hover:border-accent-warm/40 bg-surface text-text-muted hover:text-text transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-warm/10 border border-accent-warm/20 flex items-center justify-center">
                  <Download size={18} className="text-accent-warm" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-text">Curriculum Vitae (CV)</p>
                  <p className="text-xs text-text-muted">
                    Available upon request &bull; Click to email
                  </p>
                </div>
              </div>
              <span className="text-xs text-accent-warm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-2">
                Request &rarr;
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Nabil. Built with Next.js &amp;
            TypeScript.
          </p>
          <p className="text-xs text-text-muted italic">
            &quot;Done is better than perfect, but keep improving.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
