import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";

const sites = [
  { title: "Hon Mun", depth: "5–25m", type: "Coral Reef" },
  { title: "Moray Beach", depth: "12–30m", type: "Sandy Slope" },
  { title: "Madonna Rock", depth: "8–22m", type: "Rock Formation" },
  { title: "Coral Garden", depth: "3–18m", type: "Shallow Reef" },
];

export default function DiveSitesPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      <div className="mb-12">
        <SectionLabel text="UNDERWATER TOPOGRAPHY" />
        <h1 className="text-white text-4xl font-bold">Dive Site Atlas</h1>
        <p className="text-[var(--text-secondary)] mt-4 max-w-[600px]">
          Navigate the underwater topography of Nha Trang&apos;s marine reserves.
        </p>
      </div>

      {/* Map placeholder */}
      <GlassCard className="h-[300px] flex items-center justify-center mb-12">
        <div className="text-center">
          <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">
            Coming Soon
          </span>
          <p className="text-[var(--text-muted)] mt-3">Interactive dive site map</p>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sites.map((site) => (
          <GlassCard key={site.title} hover className="p-6">
            <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">
              Coming Soon
            </span>
            <h3 className="text-white text-xl font-semibold mt-3">{site.title}</h3>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Depth: {site.depth} &middot; {site.type}
            </p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
