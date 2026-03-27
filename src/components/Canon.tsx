"use client";

import AnimatedSection from "./AnimatedSection";
import YouTubeEmbed from "./YouTubeEmbed";
import ImageWithLightbox from "./ImageWithLightbox";

interface FilmEntry {
  title: string;
  year: string;
  concept: string;
  principle: string;
  description: string;
  youtubeId: string;
  youtubeTitle: string;
  realWorldEcho: { product: string; connection: string };
}

const films: FilmEntry[] = [
  {
    title: "Star Trek: LCARS",
    year: "1987",
    concept: "Flat Touchscreens & Voice Computing",
    principle: "Minimize physical controls. Let the interface disappear into the surface.",
    description:
      "Michael Okuda's LCARS system — originally backlit film cutouts with colored gels — predicted flat touchscreens 20 years before the iPhone. Gene Roddenberry specifically directed that panels should have minimal physical buttons. The voice computer interface ('Computer, locate…') established the cultural expectation that led directly to Siri and Alexa. Okuda deliberately obfuscated data into abstract numbers — a brilliant design choice that prevented the interfaces from dating as science advanced.",
    youtubeId: "naI31s-K0jk",
    youtubeTitle: "Star Trek LCARS Interface",
    realWorldEcho: {
      product: "Siri, Alexa & Modern Touchscreens",
      connection: "Voice-first computing and flat touch interfaces are now the default paradigm",
    },
  },
  {
    title: "The Matrix",
    year: "1999",
    concept: "Infinite Canvas & Voice-to-Object",
    principle: "The blank canvas is the most powerful creative space — dimensionless, infinite, waiting.",
    description:
      "The Construct — that infinite white room — became the ur-infinite-canvas, a dimensionless space where anything can be instantiated through voice command. Neo says 'Guns. Lots of guns' and racks of weapons materialize. The system follows a search→browse model: keyword invocation brings options, then exploratory mode for selection. Multiple developers have recreated it in VR with voice commands.",
    youtubeId: "AGZiLMGdCE0",
    youtubeTitle: "The Matrix — The Construct",
    realWorldEcho: {
      product: "Figma Infinite Canvas / VR Creation Tools",
      connection: "Voice-to-object creation is now standard in generative AI tools",
    },
  },
  {
    title: "Minority Report",
    year: "2002",
    concept: "Gesture as Primary Interaction",
    principle: "Data can be physically conducted like an orchestra.",
    description:
      "John Underkoffler, an MIT Media Lab researcher, designed a coherent gestural language — pinch-zoom, rotation, swipe-to-dismiss — as working prototypes before filming began. Spielberg assembled 15 futurists in a 1999 'idea summit' to design the interface. Apple designer Bas Ording reportedly took direct inspiration from the film when designing macOS Exposé and early iPhone gestures. The film proved that gesture could be a primary, not supplementary, interaction modality.",
    youtubeId: "Zkj5WSae3Uc",
    youtubeTitle: "Minority Report — Gesture Interface",
    realWorldEcho: {
      product: "Apple Vision Pro",
      connection: "Apple Vision Pro's 'look and pinch' paradigm is a direct descendant",
    },
  },
  {
    title: "Iron Man",
    year: "2008–2019",
    concept: "Multimodal AI Companion",
    principle: "The most powerful interface makes users feel like geniuses, not one that demonstrates the technology's capabilities.",
    description:
      "Tony Stark's workshop is the definitive multimodal interface — seamlessly blending voice AI, spatial gesture, contextual HUD, and room-scale holographic displays. Jayse Hansen designed the HUD backed by a comprehensive 'HUD Bible' documenting every element's function, consulting a real A-10 fighter pilot for authenticity. JARVIS represents the most fully realized voice-plus-visual AI companion in cinema — anticipating user needs, offering unsolicited suggestions, and maintaining conversational context across sessions.",
    youtubeId: "D156TfHpE1Q",
    youtubeTitle: "Iron Man — JARVIS Holographic Workshop",
    realWorldEcho: {
      product: "Apple Vision Pro / AI Copilots",
      connection: "Context-aware AI assistants that adapt information density to the moment",
    },
  },
  {
    title: "Avatar",
    year: "2009",
    concept: "Realistic Interaction Modeling",
    principle: "Every button must have a name and a function organized around a realistically imagined model of user interaction.",
    description:
      "Production designer Ben Procter gave every button 'a name and a function organized around a realistically imagined model of user interaction.' The Bio Lab's holographic screens and the Holotable's interactive 3D terrain mapping set new standards for functional sci-fi UI — not spectacle for spectacle's sake, but interfaces designed as if they actually had to work.",
    youtubeId: "pMDs8aU6LvE",
    youtubeTitle: "Avatar — Holographic Bio Lab Interface",
    realWorldEcho: {
      product: "Medical AR Systems / Spatial Computing",
      connection: "AR surgical planning tools now mirror Avatar's approach to 3D medical visualization",
    },
  },
  {
    title: "Oblivion",
    year: "2013",
    concept: "Minimalist Design Systems",
    principle: "Functionality and minimalism, anchored to a consistent system.",
    description:
      "GMUNK (Bradley Munkowitz) defined the visual language of minimal FUI through Oblivion's interfaces. The Bubbleship cockpit uses a holographic display seamlessly integrated into the spherical glass, with a bright unified color palette effective against both dark and bright backdrops. A consistent dot grid system anchors all design elements, informed by real flight simulator and helicopter HUD research.",
    youtubeId: "j3r4GE1KDtk",
    youtubeTitle: "Oblivion — GMUNK Interface Design",
    realWorldEcho: {
      product: "Tesla UI / Minimal Design Systems",
      connection: "The modern trend toward minimal, grid-based automotive and product interfaces",
    },
  },
  {
    title: "Her",
    year: "2013",
    concept: "Disappearing Interfaces & Conversational AI",
    principle: "There's a reason we haven't figured this out, because it shouldn't be anything.",
    description:
      "The radical antithesis of everything before it. Director Spike Jonze deliberately stripped away all visual spectacle. The interface is a wireless earpiece and a small device inspired by a 1940s cigarette case. Graphic designer Geoff McFetridge created interfaces of extreme flatness and warmth that predated Apple's iOS 7 flat design shift. The film is arguably the most prescient sci-fi interface design ever created, perfectly anticipating conversational AI a decade before ChatGPT.",
    youtubeId: "GV01B5kVsC0",
    youtubeTitle: "Her — Samantha OS1 Installation",
    realWorldEcho: {
      product: "ChatGPT / Alexa / AirPods",
      connection: "Conversational AI and ambient computing are now mainstream reality",
    },
  },
  {
    title: "Big Hero 6",
    year: "2014",
    concept: "Thought-to-Creation & Restraint in AI",
    principle: "The less they animated, the more it worked. Restraint creates expressiveness.",
    description:
      "Hiro's microbot headband translates thought directly into physical structure — bypassing all intermediate interfaces. No screens, no voice, no gesture. Just imagination to manifestation. Baymax exemplifies the ideal conversational companion: activated by sounds of distress, deactivated by user satisfaction ('I am satisfied with my care'), with a minimalist face inspired by Japanese bells. After 83 failed attempts by Tadashi, creative AI is shown as fundamentally iterative.",
    youtubeId: "vFRcrOs12Kg",
    youtubeTitle: "Big Hero 6 — Microbots Presentation",
    realWorldEcho: {
      product: "Meta Neural Band / BCI Devices",
      connection: "Brain-computer interfaces now translate neural signals into digital actions",
    },
  },
  {
    title: "Westworld",
    year: "2016–2022",
    concept: "Identity as Design Surface",
    principle: "Make the invisible visible — personality as tunable parameters.",
    description:
      "Chris Kieffer's Attribute Matrix — a radar chart where 20+ personality traits (Aggression, Charm, Cruelty, Bulk Apperception) can be tuned on a 0–20 scale — became so culturally significant that multiple developers recreated it in D3.js. The show's tablets were pre-designed so actors could rehearse with them. Westworld's contribution: personality as tunable parameters, identity itself as a design surface.",
    youtubeId: "0I1jLXMXlpQ",
    youtubeTitle: "Westworld — Attribute Matrix Scene",
    realWorldEcho: {
      product: "Character.AI / AI Persona Design",
      connection: "AI personality tuning is now a mainstream product design pattern",
    },
  },
  {
    title: "Blade Runner 2049",
    year: "2017",
    concept: "Organic FUI & Intent-Based Creation",
    principle: "Imagine a world where digital technology no longer exists.",
    description:
      "Director Villeneuve asked Territory Studio to 'imagine a world where digital technology no longer exists.' They responded by photographing dried grapefruit, bacteria, microcapsules, and CRT textures via macrophotography, creating interfaces from physical materials rather than CG. The film uses interface design as class signifier: Officer K's glitchy green display reflects his expendable status, while Wallace Corporation's screens are pure geometric black-and-white. Over 100 assets across 15 sets were played back live on-set.",
    youtubeId: "LKE4Bo7wRcY",
    youtubeTitle: "Blade Runner 2049 — Memory Lab Scene",
    realWorldEcho: {
      product: "Runway ML / Generative AI Tools",
      connection: "Intent-based creation — describing feelings, not specifications — is the generative AI paradigm",
    },
  },
  {
    title: "The Expanse",
    year: "2015–2022",
    concept: "Purposeful UI & Faction Design Language",
    principle: "Nothing is superfluous or just there for visual interest. Every element serves a designated purpose.",
    description:
      "The most scientifically grounded sci-fi UI ever created. Production designer Toni Ianni insisted every screen element serve a designated purpose. The show's faction-based design language — Belters use Atari-inspired oranges, Martians harsh red, Earth clinical blue — creates instant world-building through UI alone. Rhys Yorke developed formal faction design guides ensuring visual consistency across seasons. Real interactive screens were used on set.",
    youtubeId: "m7WtNgesVbQ",
    youtubeTitle: "The Expanse — Interface Design",
    realWorldEcho: {
      product: "Design Systems (Material, Apple HIG)",
      connection: "Faction-specific design languages mirror today's brand design systems",
    },
  },
  {
    title: "Ready Player One",
    year: "2018",
    concept: "User-Generated Creative Platforms",
    principle: "The creator provides frameworks and tools, not finished experiences.",
    description:
      "Territory Studio created 265+ VFX shots and 80+ unique assets, developing distinct brand languages for different factions. Spielberg used a 'V-Cam' — wearing VR goggles to design and film within the virtual OASIS environment in real-time. The OASIS represents user-generated content as the core creative paradigm: platforms that empower creators rather than consuming content.",
    youtubeId: "3DFzWmBVNbU",
    youtubeTitle: "Ready Player One — The OASIS",
    realWorldEcho: {
      product: "Roblox / Fortnite Creative / Unity",
      connection: "Creator-economy platforms where users build the experience",
    },
  },
];

export default function Canon() {
  return (
    <section className="relative">
      {/* Section header */}
      <div className="relative">
        <ImageWithLightbox
          src="/images/canon-header.png"
          alt="The Canon — 30 Years of Fictional Prototyping"
          className="w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] flex items-center justify-center">
          <AnimatedSection>
            <div className="text-center px-6">
              <span className="text-[#d4a853] text-sm tracking-[0.3em] uppercase">The Canon</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4">
                30 Years of
                <br />
                <span className="gradient-text">Fictional Prototyping</span>
              </h2>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Film entries */}
      <div className="max-w-6xl mx-auto px-6">
        {films.map((film, i) => (
          <div key={film.title} className="py-24 md:py-32 border-b border-white/5 last:border-0">
            <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-start ${i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""}`}>
              {/* Text side */}
              <div>
                <AnimatedSection direction={i % 2 === 0 ? "left" : "right"}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-[#d4a853]/60 text-sm tracking-[0.2em] uppercase font-medium">
                      {film.year}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                    {film.title}
                  </h3>
                  <div className="text-[#d4a853] text-lg font-medium mb-6">
                    {film.concept}
                  </div>
                  <p className="text-white/60 leading-relaxed mb-8">
                    {film.description}
                  </p>

                  {/* Design Principle */}
                  <div className="border-l-2 border-[#d4a853]/40 pl-6 mb-8">
                    <p className="text-white/80 italic text-lg leading-relaxed">
                      &ldquo;{film.principle}&rdquo;
                    </p>
                  </div>

                  {/* Real-world echo */}
                  <div className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06]">
                    <div className="text-xs tracking-[0.2em] uppercase text-[#d4a853]/60 mb-2">
                      Real-World Echo
                    </div>
                    <div className="text-white/90 font-semibold mb-1">
                      {film.realWorldEcho.product}
                    </div>
                    <p className="text-white/50 text-sm">
                      {film.realWorldEcho.connection}
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Video side */}
              <div>
                <AnimatedSection delay={0.2} direction={i % 2 === 0 ? "right" : "left"}>
                  <YouTubeEmbed
                    videoId={film.youtubeId}
                    title={film.youtubeTitle}
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
