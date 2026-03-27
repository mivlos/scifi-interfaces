"use client";

import AnimatedSection from "./AnimatedSection";
import ImageWithLightbox from "./ImageWithLightbox";

const mappings = [
  {
    sciFi: "Minority Report / Iron Man",
    sciFiYear: "2002 / 2008",
    product: "Apple Vision Pro",
    connection:
      "The 'look and pinch' paradigm directly descends from Minority Report's gesture vocabulary. Iron Man's spatial holographic workspace becomes Vision Pro's immersive computing environment.",
    icon: "👁️",
  },
  {
    sciFi: "Big Hero 6",
    sciFiYear: "2014",
    product: "Meta Neural Band",
    connection:
      "Hiro's thought-to-structure microbot headband finds its real-world echo in Meta's neural interface wristband — translating neural signals into digital actions, bypassing traditional input entirely.",
    icon: "🧠",
  },
  {
    sciFi: "Iron Man (JARVIS)",
    sciFiYear: "2008",
    product: "Adobe Firefly",
    connection:
      "JARVIS as creative AI companion — anticipating needs, maintaining context, amplifying human capability. Adobe's Firefly integrates generative AI directly into the creative workflow, suggesting and generating on command.",
    icon: "🔥",
  },
  {
    sciFi: "Blade Runner 2049",
    sciFiYear: "2017",
    product: "Runway ML",
    connection:
      "Ana Stelline's memory design lab — expressing emotional intent and watching the system render it into reality — is exactly how Runway's generative video tools work. Describe a feeling, receive a creation.",
    icon: "🎬",
  },
  {
    sciFi: "Star Trek Holodeck",
    sciFiYear: "1987",
    product: "Dynamicland",
    connection:
      "Bret Victor's Dynamicland realizes the holodeck's promise — a room-scale computing environment where every surface is a display and every object is interactive. Computing woven into physical reality.",
    icon: "🏠",
  },
];

export default function ScreenToReality() {
  return (
    <section className="py-32 md:py-48">
      <div className="relative mb-24">
        <ImageWithLightbox
          src="/images/reality-header.png"
          alt="From Screen to Reality"
          className="w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] flex items-center justify-center">
          <AnimatedSection>
            <div className="text-center px-6">
              <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase">Chapter VI</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
                From Screen
                <br />
                <span className="gradient-text">to Reality</span>
              </h2>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-xl text-white/50 text-center max-w-3xl mx-auto mb-20 leading-relaxed">
            The products making science fiction&apos;s vision tangible — each one traceable
            to a specific cinematic prototype.
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {mappings.map((m, i) => (
            <AnimatedSection key={m.product} delay={i * 0.1}>
              <div className="group relative bg-white/[0.02] rounded-2xl p-8 md:p-10 border border-white/[0.05] hover:border-[#d4a853]/20 transition-all duration-500">
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">
                  {/* Sci-fi source */}
                  <div className="text-center md:text-right">
                    <div className="text-[#d4a853]/40 text-xs tracking-wider uppercase mb-1">
                      {m.sciFiYear}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white/80">
                      {m.sciFi}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="text-4xl">{m.icon}</div>
                    <svg className="w-12 h-6 text-[#d4a853]/30 mx-2" fill="none" viewBox="0 0 48 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2 12h40m0 0l-6-6m6 6l-6 6" />
                    </svg>
                  </div>
                  <div className="md:hidden flex justify-center text-2xl my-2">
                    {m.icon} →
                  </div>

                  {/* Real product */}
                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold gradient-text">
                      {m.product}
                    </h3>
                  </div>
                </div>

                <p className="text-white/40 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
                  {m.connection}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
