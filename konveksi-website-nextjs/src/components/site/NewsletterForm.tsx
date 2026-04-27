"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="email@kamu.com"
        className="min-w-0 flex-1 rounded-full border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-clay focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-clay px-5 py-3 text-sm font-medium text-cream hover:bg-cream hover:text-ink transition-colors"
      >
        {done ? "Terkirim ✓" : "Kirim"}
      </button>
    </form>
  );
}
