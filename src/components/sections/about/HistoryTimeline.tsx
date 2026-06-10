"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
    <div className="flex flex-col items-center">
      {/* Feature images — two tilted cards */}
      <div className="flex justify-center items-center gap-8 mt-10">
        {current.images.slice(0, 2).map((img, i) => (
          <div
            key={img}
            className="relative w-[280px] md:w-[320px] h-[190px] md:h-[210px] overflow-hidden rounded-md shadow-2xl"
            style={{
              transform: i === 0 ? "rotate(-3deg)" : "rotate(3deg)",
            }}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
              sizes="330px"
            />
          </div>
        ))}
      </div>

      {/* Year + navigation */}
      <div className="flex items-center justify-center gap-8 mt-10">
        <button
          type="button"
          onClick={goToPrev}
          disabled={isFirst}
          className="text-white hover:text-white/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
        <span className="font-oswald text-[28px] font-semibold text-white select-none tracking-wide">
          {current.year}
        </span>
        <button
          type="button"
          onClick={goToNext}
          disabled={isLast}
          className="text-white hover:text-white/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Title */}
      <h3 className="font-oswald text-[22px] md:text-[26px] font-bold text-white uppercase tracking-wider mt-4 text-center">
        {current.title}
      </h3>

      {/* Description */}
      <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed text-center max-w-[560px] mt-4 italic">
        {current.description}
      </p>
    </div>
  );
}
