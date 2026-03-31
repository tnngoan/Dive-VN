"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

function DepthGauge() {
  return (
    <GlassCard className="p-6 w-[320px]">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-[var(--accent-cyan)]" />
        <div>
          <p className="text-white text-sm font-semibold">Current Depth</p>
          <p className="text-[var(--text-muted)] text-xs">Hon Mun Marine Park</p>
        </div>
      </div>
      <div className="w-full h-2 bg-[var(--bg-primary)] rounded-full mt-4">
        <div className="w-[75%] h-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-cyan)]/60 rounded-full" />
      </div>
      <div className="flex justify-between text-[var(--text-muted)] text-xs mt-2">
        <span>0M</span>
        <span className="text-[var(--accent-cyan)] text-xs">3KM DEPTH REACHED</span>
        <span>45M+</span>
      </div>
    </GlassCard>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/media/hero-bg.mov" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/40 via-[#0d1b2a]/50 to-[var(--bg-primary)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 min-h-screen flex items-end pb-24 lg:pb-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-12">
          {/* Left column */}
          <div className="flex-1 max-w-[700px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif italic"
            >
              <span className="block text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                Descend into
              </span>
              <span className="block text-[var(--accent-cyan)] text-4xl sm:text-5xl lg:text-7xl font-bold">
                The Abyssal Archive
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[var(--text-secondary)] text-base sm:text-lg max-w-[580px] leading-relaxed mt-8"
            >
              Explore the hidden coral cathedrals and spectral shipwrecks of Nha Trang. Our elite
              expeditions blend scientific curiosity with high-end subaquatic luxury.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link href="/book">
                <Button variant="primary">Start Your Journey</Button>
              </Link>
              <Link href="/expeditions">
                <Button variant="outline">Explore Expeditions</Button>
              </Link>
            </motion.div>
          </div>

          {/* Right column — Depth Gauge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:block"
          >
            <DepthGauge />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
