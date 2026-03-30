"use client";

import { cn } from "@/lib/utils";

interface TagPillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function TagPill({ label, selected = false, onClick }: TagPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm uppercase tracking-wider border transition-all cursor-pointer",
        selected
          ? "bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)] text-[var(--accent-cyan)]"
          : "bg-transparent border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)]/50"
      )}
    >
      {label}
    </button>
  );
}
