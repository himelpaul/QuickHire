"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In a real app this would call an API endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-sm text-emerald-400 font-medium">
        ✓ You&apos;re subscribed! We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
      />
      <button
        type="submit"
        className="bg-brand text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-brand/90 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
