"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
  images: string[];
}

interface HistoryTimelineProps {
  items: HistoryItem[];
}

export default function HistoryTimeline({ items }: HistoryTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = items[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === items.length - 1;

  const goToPrev = () => {
    if (!isFirst) setActiveIndex((i) => i - 1);
  };

  const goToNext = () => {
    if (!isLast) setActiveIndex((i) => i + 1);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 lg:mt-16">
      {/* Navigation + Year */}
      <div className="flex items-center justify-center gap-6 lg:gap-10">
        <button
          onClick={goToPrev}
          disabled={isFirst}
          className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none select-none">
          {current.year}
        </span>

        <button
          onClick={goToNext}
          disabled={isLast}
          className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Year indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((item, index) => (
          <button
            key={item.year}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-white"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to ${item.year}`}
          />
        ))}
      </div>

      {/* Content area */}
      <div className="mt-10 lg:mt-14 text-center">
        <h3 className="font-oswald text-2xl md:text-3xl lg:text-4xl font-semibold text-white uppercase tracking-wide">
          {current.title}
        </h3>
        <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {current.description}
        </p>
      </div>

      {/* Image gallery */}
      <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {current.images.slice(0, 3).map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
