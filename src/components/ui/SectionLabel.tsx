import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[var(--accent-cyan)] text-xs uppercase tracking-[0.25em] font-medium mb-3",
        className
      )}
    >
      {text}
    </p>
  );
}
