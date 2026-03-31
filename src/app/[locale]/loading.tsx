export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-[var(--accent-cyan)]/30 border-t-[var(--accent-cyan)] animate-spin" />
      <p className="text-[var(--text-muted)] mt-4 text-sm">...</p>
    </div>
  );
}
