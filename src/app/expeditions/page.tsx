import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";

const expeditions = [
  {
    title: "Coral Cathedral",
    description: "Explore towering coral formations in the heart of Hon Mun Marine Park.",
  },
  {
    title: "Wreck Discovery",
    description: "Descend into the ghostly remains of sunken vessels along the Nha Trang coast.",
  },
  {
    title: "Night Abyss",
    description: "Experience the ocean transformed under moonlight with bioluminescent encounters.",
  },
];

export default function ExpeditionsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      <div className="mb-12">
        <SectionLabel text="CURATED JOURNEYS" />
        <h1 className="text-white text-4xl font-bold">Curated Expeditions</h1>
        <p className="text-[var(--text-secondary)] mt-4 max-w-[600px]">
          Hand-crafted underwater journeys to Nha Trang&apos;s most extraordinary dive sites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {expeditions.map((exp) => (
          <GlassCard key={exp.title} hover className="relative overflow-hidden">
            <div className="h-[200px] bg-gradient-to-br from-[#1a3a4a] to-[#0d1b2a]" />
            <div className="p-6">
              <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">
                Coming Soon
              </span>
              <h3 className="text-white text-xl font-semibold mt-3">{exp.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{exp.description}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
