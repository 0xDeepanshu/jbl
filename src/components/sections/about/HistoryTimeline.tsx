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
    <div className="flex flex-col items-center gap-4">
      {/* Feature images */}
      <div className="flex justify-center gap-6">
        {current.images.slice(0, 2).map((img) => (
          <div key={img} className="w-[330px] h-[200px] overflow-hidden">
            <Image
              src={img}
              alt=""
              width={330}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Year + navigation */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          type="button"
          onClick={goToPrev}
          disabled={isFirst}
          className="text-white/80 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Previous"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <span className="font-oswald text-3xl font-medium text-white select-none">
          {current.year}
        </span>
        <button
          type="button"
          onClick={goToNext}
          disabled={isLast}
          className="text-white/80 hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Next"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Subtitle */}
      <h3 className="font-oswald text-3xl font-light text-white uppercase tracking-wide mt-3">
        {current.title}
      </h3>

      {/* Description */}
      <p className="text-white/70 text-sm leading-relaxed text-center max-w-[600px] mt-4">
        {current.description}
      </p>


    </div>
  );
}
