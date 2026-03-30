import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  as?: "input" | "textarea";
  rows?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
}

export default function FormInput({
  label,
  error,
  as = "input",
  rows = 4,
  className,
  register,
  ...props
}: FormInputProps) {
  const inputClasses = cn(
    "w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-white placeholder:text-[var(--text-muted)] rounded-xl px-4 py-3 transition-all duration-200",
    "focus:border-[var(--accent-cyan)] focus:ring-1 focus:ring-[var(--accent-cyan)]/20 focus:outline-none",
    error && "border-red-500",
    className
  );

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-[var(--text-secondary)] font-medium mb-2">
          {label}
        </label>
      )}
      {as === "textarea" ? (
        <textarea
          className={inputClasses}
          rows={rows}
          {...register}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input className={inputClasses} {...register} {...props} />
      )}
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}
