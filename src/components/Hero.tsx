"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]" />
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(212,168,83,0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 50%, rgba(74,111,165,0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 20%, rgba(212,168,83,0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 50%, rgba(212,168,83,0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212,168,83,0.02) 2px, rgba(212,168,83,0.02) 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1.5 border border-[#d4a853]/30 rounded-full mb-8">
            <span className="text-[#d4a853] text-sm tracking-[0.2em] uppercase font-medium">
              Research Report
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8 tracking-tight"
        >
          <span className="gradient-text glow-amber">
            Sci-Fi Interfaces
          </span>
          <br />
          <span className="text-white/90">
            That Foretell the Future
          </span>
          <br />
          <span className="text-white/70">
            of Creative Tools
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
        >
          The most influential creative tool interfaces of the next decade have
          already been designed — not by product teams, but by Hollywood.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.3em] uppercase text-white/30">Scroll</span>
          <svg className="w-5 h-5 text-[#d4a853]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
