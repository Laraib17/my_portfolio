import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import EscapeText from "../components/Escape_Text";
import { useMutation } from "@tanstack/react-query";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mutation = useMutation({
    mutationFn: async (formData) => {
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

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
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
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </div>

              {mutation.isError && (
                <p className="text-red-500 text-sm mt-2">
                  {mutation.error.message}
                </p>
              )}
              {mutation.isSuccess && (
                <p className="text-green-600 text-sm mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 space-x-6">
        {getdata('https://jsonplaceholder.typicode.com/todos/1')}
      </div>
    </motion.section>
  );
}
