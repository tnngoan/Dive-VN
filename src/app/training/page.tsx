"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "Open Water Foundation",
    level: "Beginner",
    duration: "4 days",
    price: "From $350",
    description:
      "Master essential diving skills and earn your first PADI certification. Includes pool training and 4 open water dives.",
  },
  {
    title: "Advanced Open Water",
    level: "Intermediate",
    duration: "2 days",
    price: "From $280",
    description:
      "Expand your limits with 5 adventure dives including deep and navigation specialties.",
  },
  {
    title: "Night & Cave Mastery",
    level: "Advanced",
    duration: "3 days",
    price: "From $420",
    description:
      "Navigate complete darkness and confined overhead environments with expert precision.",
  },
  {
    title: "Rescue Diver",
    level: "Advanced",
    duration: "4 days",
    price: "From $380",
    description:
      "Learn to manage dive emergencies and become the diver everyone wants as a buddy.",
  },
  {
    title: "Pro Gear Workshop",
    level: "All Levels",
    duration: "1 day",
    price: "From $150",
    description:
      "Understand and maintain professional-grade diving equipment like experts.",
  },
  {
    title: "Marine Photography",
    level: "All Levels",
    duration: "2 days",
    price: "From $320",
    description:
      "Capture the underwater world with professional techniques, lighting, and post-processing.",
  },
];

const levelStyles: Record<string, string> = {
  Beginner: "bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]",
  Intermediate: "bg-blue-500/10 text-blue-400",
  Advanced: "bg-purple-500/10 text-purple-400",
  "All Levels": "bg-gray-500/10 text-gray-400",
};

export default function TrainingPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-8 py-12">
      {/* Header with background image */}
      <div className="relative rounded-2xl overflow-hidden mb-12">
        <div className="absolute inset-0">
          <Image
            src="/media/jesse-van-vliet-GgHmp1pl20Q-unsplash.jpg"
            alt="Sea turtle swimming in blue water"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/90 to-[var(--bg-primary)]/40" />
        </div>
        <div className="relative p-8 sm:p-12">
          <SectionLabel text="CERTIFICATION PROGRAMS" />
          <h1 className="text-white text-4xl font-bold">Elite Training Programs</h1>
          <p className="text-[var(--text-secondary)] mt-4 max-w-[600px]">
            From your first breath underwater to professional certifications. Choose your path to
            mastery.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <GlassCard hover className="p-6 h-full flex flex-col">
              <span
                className={cn(
                  "text-xs px-3 py-1 rounded-full w-fit",
                  levelStyles[course.level]
                )}
              >
                {course.level}
              </span>
              <h3 className="text-white text-xl font-semibold mt-4">{course.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2 leading-relaxed flex-1">
                {course.description}
              </p>
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-[var(--border-subtle)]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-[var(--text-muted)] text-sm">
                    <Clock size={14} /> {course.duration}
                  </span>
                  <span className="text-[var(--accent-cyan)] font-semibold text-sm">
                    {course.price}
                  </span>
                </div>
                <Link
                  href="/book"
                  className="text-[var(--accent-cyan)] text-sm hover:underline"
                >
                  Book Now &rarr;
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
