"use client";

import { useState } from "react";

interface Props {
  videoId: string;
  title: string;
  filmTitle?: string;
  year?: string;
  concept?: string;
}

export default function YouTubeEmbed({ videoId, title, filmTitle, year, concept }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!loaded) {
    return (
      <div
        className="youtube-embed cursor-pointer group"
        onClick={() => setLoaded(true)}
        role="button"
        aria-label={`Play ${title}`}
      >
        <div className="absolute inset-0 bg-black">
          {/* Classified document placeholder while thumbnail loads */}
          {!thumbLoaded && filmTitle && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#0a0a0f] z-10">
              <div className="text-center space-y-3 font-mono">
                <div className="text-[#d4a853]/30 text-xs tracking-[0.4em] uppercase">
                  ▬▬ CLASSIFIED ▬▬
                </div>
                <div className="text-[#d4a853]/80 text-lg font-bold tracking-wider">
                  {filmTitle}
                </div>
                {year && (
                  <div className="text-[#d4a853]/40 text-sm tracking-[0.3em]">
                    {year}
                  </div>
                )}
                {concept && (
                  <div className="text-white/30 text-xs max-w-[280px] leading-relaxed mt-2">
                    {concept}
                  </div>
                )}
                <div className="flex gap-2 justify-center mt-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1 bg-[#d4a853]/20 rounded animate-pulse"
                      style={{ width: `${40 + i * 20}px`, animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbUrl}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              thumbLoaded ? "opacity-70 group-hover:opacity-90" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setThumbLoaded(true)}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#d4a853]/90 rounded-full flex items-center justify-center group-hover:bg-[#d4a853] transition-colors group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 md:w-8 md:h-8 text-[#0a0a0f] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-sm text-white/80 font-medium">{title}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
