"use client";

import { useState } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="animate-reveal-up flex items-center justify-center gap-3 bg-primary/10 border border-primary/30 p-5 rounded-xl max-w-md mx-auto">
        <div className="bg-primary/20 p-2 rounded-full">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <span className="font-semibold text-white">You&apos;re on the list! 🎉</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 bg-dark-light border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-[#94A3B8] text-white shadow-inner"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-primary to-secondary hover:brightness-110 active:scale-[0.98] transition-all text-white font-bold px-8 py-4 rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_4px_24px_0_rgba(0,217,255,0.4)] relative overflow-hidden group"
      >
        <div className="absolute inset-0 w-full h-full gradient-radial from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative">Notify Me</span>
      </button>
    </form>
  );
}
