"use client";

import AnimatedSection from "./AnimatedSection";

export default function Thesis() {
  return (
    <section className="py-32 md:py-48 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="section-divider mb-16" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-12">
            <span className="text-white/90">&ldquo;The next generation of creative tools will not be defined by </span>
            <span className="gradient-text">features</span>
            <span className="text-white/90"> but by </span>
            <span className="gradient-text">interaction paradigms</span>
            <span className="text-white/90">.&rdquo;</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-lg md:text-xl text-white/50 text-center leading-relaxed max-w-3xl mx-auto">
            Infinite spatial canvases, conversational creative direction, multimodal
            input fusion, and ambient AI that amplifies rather than replaces. Science
            fiction has been the world&apos;s most ambitious UX research lab for three
            decades — and the interfaces created for major films don&apos;t emerge from
            imagination alone. They emerge from research, futurist consultations, and
            a deep understanding of human interaction.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="mt-16 flex justify-center gap-12 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">20+</div>
              <div className="text-sm text-white/40 mt-1">Films & Series</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">30</div>
              <div className="text-sm text-white/40 mt-1">Years of Prototyping</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">5</div>
              <div className="text-sm text-white/40 mt-1">FUI Studios</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
