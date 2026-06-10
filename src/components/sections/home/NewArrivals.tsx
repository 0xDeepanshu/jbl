"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
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

const thumbnails = [
  "/arrivals/1.png",
  "/arrivals/2.png",
  "/arrivals/3.png",
  "/arrivals/4.png",
];

export default function NewArrivals() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <Image
        src="/bg/rectangle_bg_mostpopular.png"
        alt=""
        fill
        className="object-cover"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-16 items-center">
          {/* LEFT COLUMN */}
          <div>
            <div className="flex items-baseline gap-4">
              <h2 className="font-oswald text-7xl font-semibold uppercase text-white ">
                NEW ARRIVALS
              </h2>
              <span className=" text-2xl font-semibold  text-[#FF5A00]">
                Product
              </span>
            </div>

            <h1 className="font-oswald text-[48px] font-medium uppercase text-[#FF5A00] leading-[1.05] max-w-[520px] mt-8">
              JBL BOOMBOX 3 WI-FI
            </h1>

            <ul className="flex flex-col gap-3 mt-6">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-[18px] text-white/85"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center gap-1">
                {Array.from({ length: 4 }, (_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#FF5A00] text-[#FF5A00]"
                  />
                ))}
              </div>
              <Button
                variant="orange"
                radius={14}
                height={40}
                width={190}
                className="font-normal"
              >
                WRITE A REVIEW
              </Button>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <span className="text-white/70 text-sm">Available Colours :</span>
              <div className="flex items-center gap-3">
                {colors.map((c, i) => (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => setSelectedColor(i)}
                  >
                    <span
                      className="block rounded-[4px] transition-all duration-200"
                      style={{
                        width: selectedColor === i ? "18px" : "16px",
                        height: selectedColor === i ? "18px" : "16px",
                        backgroundColor: c.value,
                        border:
                          selectedColor === i
                            ? "2px solid #fff"
                            : "1px solid transparent",
                        transform:
                          selectedColor === i ? "scale(1.15)" : undefined,
                      }}
                    />
                  </button>
                ))}
                <Button
                  variant="orange"
                  radius={14}
                  height={40}
                  width={220}
                  className="text-sm"
                >
                  YOUR CUSTOMIZATION
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-10">
              <Button variant="pink" className="px-10 py-3 text-2xl">
                Order now
              </Button>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,90,0,0.08), transparent 70%)",
                }}
              />
              <Image
                src="/detailed/detailed_speaker.png"
                alt="JBL BOOMBOX 3 WI-FI"
                width={700}
                height={700}
                className="object-contain w-full max-w-[700px] h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
                priority
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveThumb((p) => (p > 0 ? p - 1 : thumbnails.length - 1))
              }
              className="hidden lg:flex absolute left-[-60px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-black/50 backdrop-blur-sm items-center justify-center text-white hover:bg-[#FF5A00] hover:scale-105 transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveThumb((p) => (p < thumbnails.length - 1 ? p + 1 : 0))
              }
              className="hidden lg:flex absolute right-[-60px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-black/50 backdrop-blur-sm items-center justify-center text-white hover:bg-[#FF5A00] hover:scale-105 transition-all"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                type="button"
                onClick={() =>
                  setActiveThumb((p) => (p > 0 ? p - 1 : thumbnails.length - 1))
                }
                className="lg:hidden text-white/50 hover:text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              {thumbnails.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveThumb(i)}
                  className={`border-2  relative rounded-xl overflow-hidden transition-all duration-200 ${i === activeThumb
                    ? "ring-2 ring-[#FF5A00] ring-offset-2 ring-offset-[#0a0a0a] scale-110"
                    : "opacity-50 hover:opacity-80 hover:scale-105"
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
                onClick={() =>
                  setActiveThumb((p) => (p < thumbnails.length - 1 ? p + 1 : 0))
                }
                className="lg:hidden text-white/50 hover:text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="w-full h-[140px]"
        >
          <path
            d="
        M0,40
        C250,90 550,110 900,70
        C1150,40 1300,20 1440,40
        L1440,140
        L0,140
        Z
        "
            fill="#8c8793"
          />
        </svg>
      </div>
    </section>
  );
}
