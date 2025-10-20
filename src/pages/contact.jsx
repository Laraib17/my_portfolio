import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

// Named export instead of default
export function EscapeText() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const offsetX = rect.left + rect.width / 2 - mouseX;
    const offsetY = rect.top + rect.height / 2 - mouseY;

    setPosition({
      x: offsetX * 0.3,
      y: offsetY * 0.3,
    });
  };

  return (
    <h2
      ref={ref}
      className="text-4xl font-bold absolute transition-transform duration-150 cursor-pointer"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      onMouseMove={handleMouseMove}
    >
      Get in touch
    </h2>
  );
}

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
            {/* Your form remains unchanged */}
          </div>
          <div></div>
        </div>
      </div>
    </motion.section>
  );
}
