import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const sizeClasses = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full font-semibold transition-all duration-300 cursor-pointer",
        sizeClasses[size],
        variant === "primary" &&
          "bg-[var(--accent-cyan)] text-[var(--bg-primary)] hover:bg-[var(--accent-cyan-hover)] hover:shadow-[0_0_20px_rgba(0,229,204,0.3)]",
        variant === "outline" &&
          "border border-white/30 text-white bg-transparent hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]",
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
