import { type LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface FeatureRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureRow({ icon: Icon, title, description }: FeatureRowProps) {
  return (
    <GlassCard className="p-4">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-[var(--accent-cyan)]" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-base">{title}</h4>
          <p className="text-[var(--text-secondary)] text-sm mt-1">{description}</p>
        </div>
      </div>
    </GlassCard>
  );
}
