import React, { useState } from "react";
import { motion } from "framer-motion";


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
      // Placeholder: replace the fetch URL with your real endpoint (Netlify, Vercel serverless, FormSpree, your backend)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        const json = await res.json();
        setStatus({ type: "error", message: json?.error || "Failed to send message." });
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
        {/* Left: Intro / Contact details */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Get in touch</h2>
          <p className="text-muted-foreground max-w-xl">
            I’m currently open to new projects and collaborations. Send a message and I’ll reply as soon as
            possible. Prefer email? Use the quick links below.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 8.5L12 13l9-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Email</div>
                <a href="mailto:yourname@example.com" className="text-sm text-primary-600 hover:underline">yourname@example.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.91l-5-3.64 5.91-.99L12 2z" stroke="currentColor" strokeWidth="0.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Location</div>
                <div className="text-sm text-muted-foreground">Your City, Country</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 10a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Social</div>
                <div className="flex gap-3 mt-2">
                  <a href="#" aria-label="GitHub" className="text-sm hover:underline">GitHub</a>
                  <a href="#" aria-label="LinkedIn" className="text-sm hover:underline">LinkedIn</a>
                  <a href="#" aria-label="Twitter" className="text-sm hover:underline">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a href="/resume.pdf" className="inline-block text-sm font-medium underline">Download resume</a>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                required
                className="mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                placeholder="Tell me about your project or question..."
              />
            </div>

            <div className="flex items-center justify-between gap-4">

              <div>
                {status && (
                  <div className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                    {status.message}
                  </div>
                )}
              </div>
            </div>
          </form>

          {/* Simple map embed (optional): uncomment and replace src with your preferred map if you want a map on the contact page */}
          {/* <div className="mt-6 rounded-lg overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              className="w-full h-44"
              loading="lazy"
            />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
}
