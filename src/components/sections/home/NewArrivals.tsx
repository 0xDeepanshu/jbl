"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  "Wi-Fi and Bluetooth Connectivity",
  "Massive JBL Original Pro Sound",
  "Long Battery Life",
];

const colors = [
  { label: "Black", value: "#1a1a1a" },
  { label: "Blue", value: "#2563eb" },
  { label: "Red", value: "#dc2626" },
];

const callouts = [
  { label: "Power Button", top: "8%", right: "0%", dotTop: "20%", dotRight: "38%" },
  { label: "Carry Handle", top: "0%", left: "35%", dotTop: "10%", dotLeft: "50%" },
  { label: "Dolby Speaker", bottom: "25%", right: "0%", dotBottom: "38%", dotRight: "38%" },
  { label: "Volume Up", top: "30%", left: "0%", dotTop: "42%", dotLeft: "50%" },
  { label: "Volume Down", top: "42%", left: "0%", dotTop: "54%", dotLeft: "50%" },
];

const thumbnails = [
  "/headphone/new-arrivals/thumb-1.png",
  "/headphone/new-arrivals/thumb-2.png",
  "/headphone/new-arrivals/thumb-3.png",
  "/headphone/new-arrivals/thumb-4.png",
];

export default function NewArrivals() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <section className="relative overflow-hidden py-20 bg-[#0a0a0a]">
      <Container>
        <SectionTitle title="NEW ARRIVALS" accentText="Product" />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <h1 className="font-oswald text-5xl font-bold uppercase text-white leading-tight">
              JBL BOOMBOX 3 WI-FI
            </h1>

            <ul className="flex flex-col gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-[#FF5A00] text-[#FF5A00]"
                />
              ))}
              <span className="text-white/50 text-xs ml-2">(3.2k Reviews)</span>
            </div>

            <div className="flex items-center gap-3">
              {colors.map((c, i) => (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => setSelectedColor(i)}
                  className="relative"
                >
                  <span
                    className="block rounded-full transition-all duration-200"
                    style={{
                      width: selectedColor === i ? "28px" : "20px",
                      height: selectedColor === i ? "28px" : "20px",
                      backgroundColor: c.value,
                      outline: selectedColor === i ? "2px solid #FF5A00" : undefined,
                      outlineOffset: "3px",
                    }}
                  />
                </button>
              ))}
            </div>

            <div>
              <Button radius={28} className="px-8 py-3 text-sm tracking-widest">
                ORDER NOW
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex items-center justify-center min-h-[500px]">
            <Image
              src="/headphone/new-arrivals/product-main.png"
              alt="JBL BOOMBOX 3 WI-FI"
              width={400}
              height={400}
              className="object-contain z-10"
              priority
            />

            {callouts.map((c) => {
              const isLeft = "left" in c;
              const isRight = "right" in c;
              const isTop = "top" in c && !("bottom" in c);

              return (
                <div
                  key={c.label}
                  className="absolute flex items-center gap-2 z-20"
                  style={{
                    top: isTop ? c.top : undefined,
                    bottom: !isTop ? c.bottom : undefined,
                    left: isLeft ? c.left : undefined,
                    right: isRight ? c.right : undefined,
                    flexDirection: isLeft ? "row-reverse" : "row",
                  }}
                >
                  <span className="text-white/80 text-xs font-medium whitespace-nowrap">
                    {c.label}
                  </span>

                  <svg width="40" height="2" className="shrink-0">
                    <line
                      x1="0"
                      y1="1"
                      x2="40"
                      y2="1"
                      stroke="#FF5A00"
                      strokeWidth="1"
                    />
                  </svg>

                  <span className="w-2 h-2 rounded-full bg-[#FF5A00] shrink-0" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveThumb((p) => (p > 0 ? p - 1 : thumbnails.length - 1))}
            className="text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          {thumbnails.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveThumb(i)}
              className={`relative rounded-xl overflow-hidden transition-all duration-200 ${
                i === activeThumb
                  ? "ring-2 ring-[#FF5A00] ring-offset-2 ring-offset-[#0a0a0a] scale-110"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <Image
                src={src}
                alt=""
                width={72}
                height={72}
                className="object-cover"
              />
            </button>
          ))}

          <button
            type="button"
            onClick={() => setActiveThumb((p) => (p < thumbnails.length - 1 ? p + 1 : 0))}
            className="text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </Container>
    </section>
  );
}
