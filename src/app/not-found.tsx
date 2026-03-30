import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-8 text-center">
      <h1 className="font-serif italic text-5xl sm:text-6xl font-bold">
        <span className="text-white">Lost in the </span>
        <span className="text-[var(--accent-cyan)]">Abyss</span>
      </h1>
      <p className="text-[var(--text-secondary)] mt-6 max-w-md text-lg">
        The depth you&apos;re looking for doesn&apos;t exist in our archive.
      </p>
      <Link href="/" className="mt-8">
        <Button variant="primary">Return to Surface</Button>
      </Link>
    </div>
  );
}
