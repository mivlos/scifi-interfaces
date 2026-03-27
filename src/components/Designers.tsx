"use client";

import AnimatedSection from "./AnimatedSection";
import ImageWithLightbox from "./ImageWithLightbox";

const designers = [
  {
    name: "Territory Studio",
    location: "London",
    founded: "2010",
    credits: "Blade Runner 2049, Ready Player One, Dune, Prometheus, Guardians of the Galaxy, The Batman",
    quote: "Technology is a lens through which story unfolds.",
    philosophy:
      "For Blade Runner 2049, they avoided all digital references, seeking inspiration from 'nature, marine life, dance, sculpture, architecture.' Now designing real products — the Cadillac LYRIQ's 33-inch LED display, Land Rover, and Medivis AR surgical systems.",
  },
  {
    name: "Perception NYC",
    location: "New York",
    founded: "2001",
    credits: "Iron Man 2, Avengers, Black Panther, Samsung, Ford, Intel",
    quote: "We always start in the realm of what could someone realistically do, then make it fantastical for film.",
    philosophy:
      "Coined the term 'Science Fiction Thinking' as a strategic consulting framework. They divide their time 'equally between science-fiction and science-fact.' Emmy-nominated for title design, maintaining a team of 12–14 full-time designers.",
  },
  {
    name: "Jayse Hansen",
    location: "Individual Designer",
    founded: "",
    credits: "Iron Man HUD, Avengers, Star Wars: The Force Awakens, Spider-Man, Big Hero 6, Top Gun: Maverick",
    quote: "Audiences could 'feel' it if the graphics were random. They needed to have purpose to feel right.",
    philosophy:
      "The world's most recognized individual FUI designer. Created the Iron Man HUD backed by a comprehensive 'HUD Bible' and consulted a real A-10 fighter pilot for authenticity. Uses Illustrator for design, After Effects for animation, C4D for 3D.",
  },
  {
    name: "GMUNK",
    location: "Bradley Munkowitz",
    founded: "",
    credits: "Tron: Legacy (12+ min holographic content), Oblivion",
    quote: "The best UI work in film ever done.",
    philosophy:
      "Defined the visual language of digital environments through Tron: Legacy and Oblivion. His Oblivion work emphasized 'functionality and minimalism' using a consistent dot grid system, informed by real flight simulator and helicopter combat interface research.",
  },
  {
    name: "Mark Coleran",
    location: "1966–2024",
    founded: "",
    credits: "The Bourne Identity, Children of Men, Mission Impossible 3",
    quote: "FUIs are not interfaces. They are plot visualizations. We fall in love with the aesthetic, thinking the good looks make it work. But the cinematic interface is not about how it looks, but how it feels.",
    philosophy:
      "Widely credited with coining the term 'FUI' and shaped the discipline through decades of foundational work. His most important insight: don't take the wrong lessons from film work.",
  },
];

const principles = [
  { title: "Story first, decoration never", description: "Every element must serve a purpose. Users can 'feel' when graphics are meaningless filler." },
  { title: "Character-driven adaptation", description: "Interfaces should reflect who is using them — their expertise, context, and status." },
  { title: "Animation as wayfinding", description: "Transitions answer: Where am I? How did I get here? What can I do?" },
  { title: "Make users feel powerful", description: "Surface the right information at the right moment to amplify human decision-making." },
  { title: "Non-obvious reference sources", description: "The best inspiration comes from outside your domain — nature, architecture, dance." },
];

export default function Designers() {
  return (
    <section className="py-32 md:py-48">
      {/* Header */}
      <div className="relative mb-24">
        <ImageWithLightbox
          src="/images/designers-header.png"
          alt="The FUI Designers"
          className="w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] flex items-center justify-center">
          <AnimatedSection>
            <div className="text-center px-6">
              <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase">Chapter V</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
                The Designers Who Build
                <br />
                <span className="gradient-text">Tomorrow&apos;s Interfaces</span>
              </h2>
              <p className="text-white/50 mt-6 text-lg max-w-2xl mx-auto">
                A remarkably small community creates virtually all the fictional interfaces in major films.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Designer profiles */}
        <div className="space-y-16 mb-32">
          {designers.map((d, i) => (
            <AnimatedSection key={d.name} delay={i * 0.1}>
              <div className="bg-white/[0.02] rounded-2xl p-8 md:p-12 border border-white/[0.05] hover:border-[#d4a853]/20 transition-colors duration-500">
                <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{d.name}</h3>
                    <div className="text-[#d4a853]/60 text-sm">
                      {d.location}
                      {d.founded && ` · Est. ${d.founded}`}
                    </div>
                    <div className="text-white/30 text-sm mt-2">{d.credits}</div>
                  </div>
                  <div>
                    <blockquote className="text-xl md:text-2xl font-bold text-white/80 italic mb-6 leading-relaxed">
                      &ldquo;{d.quote}&rdquo;
                    </blockquote>
                    <p className="text-white/50 leading-relaxed">{d.philosophy}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Synthesized principles */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase">Synthesized Principles</span>
            <h3 className="text-3xl md:text-4xl font-bold mt-4">
              Design Principles from the FUI Canon
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="bg-gradient-to-br from-white/[0.04] to-transparent rounded-xl p-8 border border-white/[0.06] h-full">
                <div className="text-[#d4a853] text-4xl font-bold mb-4 opacity-20">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                <p className="text-white/50 leading-relaxed">{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
