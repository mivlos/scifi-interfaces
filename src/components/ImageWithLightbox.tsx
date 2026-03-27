"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function ImageWithLightbox({
  src,
  alt,
  width = 1920,
  height = 1080,
  className = "",
  priority = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = useCallback(() => {
    const a = document.createElement("a");
    a.href = src;
    a.download = alt.replace(/\s+/g, "-").toLowerCase() + ".png";
    a.click();
  }, [src, alt]);

  return (
    <>
      <div className={`relative group cursor-zoom-in ${className}`} onClick={() => setIsOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-lg"
          priority={priority}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-white/0 group-hover:text-white/80 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="lightbox-overlay" onClick={() => setIsOpen(false)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="max-w-[95vw] max-h-[90vh] object-contain" />
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={handleDownload}
                className="bg-[#d4a853] hover:bg-[#e8c77b] text-[#0a0a0f] px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                ↓ Download
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
