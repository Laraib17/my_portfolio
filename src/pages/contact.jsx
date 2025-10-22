import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import EscapeText from "../components/Escape_Text";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus({
          type: "success",
          message: "Message sent! I'll get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        const json = await res.json();
        setStatus({
          type: "error",
          message: json?.error || "Failed to send message.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error — try again later." });
    }
    setLoading(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-5xl mx-auto px-6 py-12 lg:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6 relative h-40">
          <EscapeText />
          <p className="text-muted-foreground max-w-xl mt-20">
            I’m currently open to new projects and collaborations. Send a
            message and I’ll reply as soon as possible. Prefer email? Use the
            quick links below.
          </p>
        </div>
        <div>
          <div className="bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="block w-full border border-zinc-300 dark:border-zinc-700 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="block w-full border border-zinc-300 dark:border-zinc-700 rounded-md p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  className="block w-full border border-zinc-300 dark:border-zinc-700 rounded-md p-2"
                  rows="4"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-md p-2"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
