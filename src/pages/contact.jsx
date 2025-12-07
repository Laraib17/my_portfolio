import React, { useState } from "react";
import { motion } from "framer-motion";
import EscapeText from "../components/Escape_Text";
import { useMutation } from "@tanstack/react-query";
import { Github, Linkedin, Twitter, Mail, Loader2, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mutation = useMutation({
    mutationFn: async (formData) => {
      // Simulate API call for now if no backend is ready, or keep existing
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.error || "Failed to send message");
      }
      return res.json();
    },
    onSuccess: () => {
      setForm({ name: "", email: "", message: "" });
    },
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Laraib17", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  const inputClasses =
    "block w-full bg-transparent border-b-2 border-zinc-300 dark:border-zinc-700 py-2 px-1 focus:outline-none transition-colors duration-300";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-6 py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Text & Socials */}
        <div className="space-y-8 relative">
          <div className="h-32 relative">
            <EscapeText />
          </div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed"
          >
            I’m currently open to new projects and collaborations. Whether you
            have a question or just want to say hi, I’ll try my best to get back
            to you!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex gap-6 pt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5, color: "#3b82f6" }}
                whileTap={{ scale: 0.9 }}
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={28} strokeWidth={1.5} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Name"
                    className={inputClasses}
                    whileFocus={{ borderBottomColor: "#042f75ff" }}
                    required
                  />
                </div>

                <div className="relative">
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email"
                    className={inputClasses}
                    whileFocus={{ borderBottomColor: "#3b82f6" }}
                    required
                  />
                </div>

                <div className="relative">
                  <motion.textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Message"
                    rows="4"
                    className={`${inputClasses} resize-none`}
                    whileFocus={{ borderBottomColor: "#3b82f6" }}
                    required
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={mutation.isPending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {mutation.isError && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-center"
                >
                  {mutation.error.message}
                </motion.p>
              )}
              {mutation.isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-sm text-center font-medium"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
