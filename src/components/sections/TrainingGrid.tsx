"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";

const courses = [
  {
    title: "Open Water Foundation",
    description:
      "Master the essential diving skills and safety proficiency for open water exploration.",
  },
  {
    title: "Night & Cave Mastery",
    description:
      "Navigate complete darkness and confined overhead environments with expert precision.",
  },
  {
    title: "Pro Gear Workshop",
    description:
      "Understand and maintain professional-grade diving equipment like experts.",
  },
  {
    title: "Marine Photography",
    description:
      "Capture the underwater world with professional techniques and equipment.",
  },
];

export default function TrainingGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-24">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
        <div>
          <SectionLabel text="MASTER THE DEEP" />
          <h2 className="text-white text-4xl font-bold">Elite Training Programs</h2>
        </div>
        <p className="max-w-[400px] text-[var(--text-secondary)] text-base hidden lg:block">
          From your first breath underwater to professional certifications, exclusive training to
          transcend ordinary diving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Link href="/training">
              <GlassCard hover className="relative min-h-[250px] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />
                <div className="relative p-6 flex flex-col justify-end min-h-[250px]">
                  <h3 className="text-white text-xl font-semibold">{course.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-2 leading-relaxed">
                    {course.description}
                  </p>
                  <span className="text-[var(--accent-cyan)] text-sm mt-4 inline-flex items-center gap-1">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
