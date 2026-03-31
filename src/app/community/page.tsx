import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";

const stories = [
  {
    title: "First Night Dive",
    author: "Sarah K.",
    excerpt: "The bioluminescence was unlike anything I'd ever seen...",
    image: "/media/jesse-van-vliet-QJvbsdkTUS0-unsplash.jpg",
  },
  {
    title: "Reef Restoration Log",
    author: "Dr. Nguyen",
    excerpt: "After 18 months of coral planting, the results are remarkable...",
    image: "/media/jesse-van-vliet-Xlg6ppBg7Jk-unsplash.jpg",
  },
  {
    title: "Freediving Journey",
    author: "Marco T.",
    excerpt: "Pushing past 40 meters on a single breath changed my perspective...",
    image: "/media/johnny-africa-FGHjgyAAYv4-unsplash.jpg",
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      <div className="mb-12">
        <SectionLabel text="BENEATH THE SURFACE" />
        <h1 className="text-white text-4xl font-bold">The Deep Community</h1>
        <p className="text-[var(--text-secondary)] mt-4 max-w-[600px]">
          Stories, conservation, and connections from beneath the surface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {stories.map((story) => (
          <GlassCard key={story.title} hover className="overflow-hidden group">
            <div className="h-[200px] relative overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold">{story.title}</h3>
              <p className="text-[var(--text-muted)] text-sm mt-1">by {story.author}</p>
              <p className="text-[var(--text-secondary)] text-sm mt-3">{story.excerpt}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="p-8 text-center">
        <SectionLabel text="MARINE CONSERVATION" className="justify-center" />
        <h2 className="text-white text-2xl font-bold mt-2">Conservation Initiatives</h2>
        <p className="text-[var(--text-secondary)] mt-4 max-w-lg mx-auto">
          Our ongoing efforts to protect and restore the marine ecosystems of Nha Trang Bay.
          Full details coming soon.
        </p>
        <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">
          Coming Soon
        </span>
      </GlassCard>
    </div>
  );
}
