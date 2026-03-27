"use client";

import AnimatedSection from "./AnimatedSection";
import ImageWithLightbox from "./ImageWithLightbox";

const connections = [
  {
    product: "Vibeboard",
    sciFi: "The Matrix's Construct",
    principle: "Infinite Canvas",
    description:
      "The Construct is a dimensionless white space where anything can be instantiated through voice alone. Vibeboard is Picsart's infinite spatial canvas — a creative environment without walls, where AI and human intent converge to generate, arrange, and iterate without constraints.",
    quote: "\"Guns. Lots of guns.\" — Voice-to-instantiation in a space without limits.",
  },
  {
    product: "Aura",
    sciFi: "Samantha from Her",
    principle: "Proactive AI Companion",
    description:
      "Samantha doesn't wait for instructions. She recognizes creative potential and acts on it — curating, editing, composing, publishing. Aura embodies this same philosophy: AI that works with you, not for you. A creative partner that anticipates, suggests, and amplifies rather than simply executing commands.",
    quote: "\"AI that works with you, not for you.\" — Picsart's Aura positioning",
  },
  {
    product: "Vibe Design",
    sciFi: "Ana Stelline's Philosophy",
    principle: "Feeling Over Features",
    description:
      "\"They all think it's about more detail. But that's not how memory works. We recall with our feelings.\" Picsart's Vibe Design methodology maps directly to Stelline's approach — intent-based rather than specification-based creative direction. Express how something should feel, and the system translates emotion into artifact.",
    quote: "Intent-based creation: feeling over features, emotion over specification.",
  },
];

export default function PicsartConnection() {
  return (
    <section className="py-32 md:py-48">
      <div className="relative mb-24">
        <ImageWithLightbox
          src="/images/picsart-header.png"
          alt="The Picsart Connection"
          className="w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] flex items-center justify-center">
          <AnimatedSection>
            <div className="text-center px-6">
              <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase">Chapter VII</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
                The Picsart
                <br />
                <span className="gradient-text">Connection</span>
              </h2>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Large callout */}
        <AnimatedSection>
          <div className="text-center mb-24">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Picsart isn&apos;t chasing sci-fi.
              <br />
              <span className="gradient-text glow-amber">
                It&apos;s building what sci-fi predicted.
              </span>
            </h3>
          </div>
        </AnimatedSection>

        {/* Product mappings */}
        <div className="space-y-16">
          {connections.map((c, i) => (
            <AnimatedSection key={c.product} delay={i * 0.15}>
              <div className="relative bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent rounded-2xl p-8 md:p-12 border border-white/[0.06] overflow-hidden">
                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4a853]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#d4a853]/10 border border-[#d4a853]/20 rounded-full text-[#d4a853] text-sm font-medium">
                      {c.product}
                    </span>
                    <span className="text-white/30">=</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm">
                      {c.sciFi}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-[#d4a853] mb-4">
                    {c.principle}
                  </h4>

                  <p className="text-white/60 leading-relaxed mb-6 text-lg">
                    {c.description}
                  </p>

                  <div className="border-l-2 border-[#d4a853]/30 pl-5">
                    <p className="text-white/50 italic">{c.quote}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional strategic pillars */}
        <AnimatedSection delay={0.3}>
          <div className="mt-20 grid md:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] rounded-xl p-8 border border-white/[0.05]">
              <h4 className="text-lg font-bold mb-3 gradient-text">Sparks</h4>
              <p className="text-white/50 leading-relaxed">
                Liquid UX that adapts to context — like Iron Man&apos;s HUD evolving with each suit,
                expanding diagnostics during creation and collapsing to ambient status during reflection.
              </p>
            </div>
            <div className="bg-white/[0.02] rounded-xl p-8 border border-white/[0.05]">
              <h4 className="text-lg font-bold mb-3 gradient-text">Flows</h4>
              <p className="text-white/50 leading-relaxed">
                Speech-enabled creative companionship — the natural evolution from Theodore&apos;s
                conversational workflow with Samantha to voice-driven creative iteration.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
