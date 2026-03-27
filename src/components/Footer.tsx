"use client";

import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="py-24 md:py-32 border-t border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <div className="section-divider mb-12" />

          <p className="text-white/40 text-lg mb-2">
            Based on research by
          </p>
          <p className="text-xl md:text-2xl font-bold text-white/80 mb-1">
            Oli Mival
          </p>
          <p className="text-[#d4a853]/60 mb-12">
            VP Product Strategy, Innovation & Experience at Picsart
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href="https://picsart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4a853]/10 border border-[#d4a853]/20 rounded-full text-[#d4a853] text-sm font-medium hover:bg-[#d4a853]/20 transition-colors"
            >
              Picsart →
            </a>
            <a
              href="https://picsart.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Vibe Design Manifesto →
            </a>
          </div>

          <div className="text-white/20 text-sm">
            <p>
              &ldquo;The most influential creative tool interfaces of the next decade have
              already been designed — not by product teams, but by Hollywood.&rdquo;
            </p>
            <p className="mt-4">© {new Date().getFullYear()} · Crafted with intention</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
