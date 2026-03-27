"use client";

import AnimatedSection from "./AnimatedSection";
import ImageWithLightbox from "./ImageWithLightbox";

const scenes = [
  {
    film: "Her",
    year: "2013",
    character: "Theodore + Samantha",
    description:
      "Theodore dictates personal love letters while Samantha assists and collaborates. But Samantha goes further — she autonomously curates, edits, and finds a publisher for Theodore's best letters, and composes original music as she evolves. Creative iteration happens entirely through ongoing dialogue with no menus, no commands, just conversation.",
    insight:
      "Samantha functions as a proactive creative partner, not a reactive tool. She doesn't wait for instructions; she recognizes creative potential and acts on it.",
  },
  {
    film: "Blade Runner 2049",
    year: "2017",
    character: "Ana Stelline",
    description:
      "Ana operates the most beautiful physical-digital hybrid creative interface in sci-fi. Her memory design lab uses a handheld controller with concentric rotating rings to construct artificial memories, which are projected as immersive 3D holograms filling her sterile chamber. She reaches into the holograms to adjust elements by hand.",
    insight:
      "Intent-based rather than specification-based creative direction — the user expresses emotional intent, and the system translates it into sensory detail.",
  },
  {
    film: "The Matrix",
    year: "1999",
    character: "Neo & Trinity",
    description:
      "\"Guns. Lots of guns.\" The system follows a search→browse model: keyword invocation brings options, then exploratory mode for selection. The white room itself — the Construct — is the ur-infinite-canvas, a dimensionless space where anything can be instantiated through voice alone.",
    insight:
      "Voice-to-instantiation: describe what you want, and it materializes. No menus. No parameters. Just intent.",
  },
  {
    film: "Big Hero 6",
    year: "2014",
    character: "Hiro Hamada",
    description:
      "Hiro's microbot headband translates thought directly into physical structure. Think about a shape, and thousands of microbots self-assemble into it. This bypasses all intermediate interfaces — no screens, no voice, no gesture. Just imagination to manifestation.",
    insight:
      "The purest intent-to-creation interface ever depicted. Zero interface. Pure thought.",
  },
];

export default function CreativeDirectors() {
  return (
    <section className="py-32 md:py-48 relative">
      {/* Section header image */}
      <div className="relative mb-24">
        <ImageWithLightbox
          src="/images/creative-directors-header.png"
          alt="When Characters Become Creative Directors"
          className="w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] flex items-center justify-center">
          <AnimatedSection>
            <div className="text-center px-6">
              <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase">Chapter IV</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
                When Characters Become
                <br />
                <span className="gradient-text">Creative Directors</span>
              </h2>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Stelline Quote — big pullquote */}
        <AnimatedSection>
          <blockquote className="text-center mb-32">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white/90 mb-6">
              &ldquo;They all think it&apos;s about more detail. But that&apos;s not how memory works.{" "}
              <span className="gradient-text">We recall with our feelings.</span>{" "}
              Anything real should be a mess.&rdquo;
            </p>
            <cite className="text-[#d4a853]/70 text-lg not-italic">
              — Ana Stelline, Blade Runner 2049
            </cite>
          </blockquote>
        </AnimatedSection>

        {/* Scenes */}
        <div className="space-y-20">
          {scenes.map((scene, i) => (
            <AnimatedSection key={scene.film} delay={i * 0.1}>
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="md:text-right">
                  <div className="text-[#d4a853]/50 text-sm tracking-wider uppercase">{scene.year}</div>
                  <h3 className="text-2xl md:text-3xl font-bold">{scene.film}</h3>
                  <div className="text-white/40 text-sm mt-1">{scene.character}</div>
                </div>
                <div>
                  <p className="text-white/60 leading-relaxed mb-4">{scene.description}</p>
                  <div className="border-l-2 border-[#d4a853]/40 pl-5">
                    <p className="text-white/80 italic">{scene.insight}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
