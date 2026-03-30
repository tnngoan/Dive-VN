import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "backdrop-blur-xl bg-[var(--bg-glass)] border border-[var(--bg-glass-border)] rounded-2xl",
          hover &&
            "transition-all duration-300 hover:border-[var(--accent-cyan)] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,229,204,0.15)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
