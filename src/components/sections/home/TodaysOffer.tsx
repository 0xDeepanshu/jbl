"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const thumbnails = [
  "/headphone/todays-offer/thumb-1.png",
  "/headphone/todays-offer/thumb-2.png",
  "/headphone/todays-offer/thumb-3.png",
];

export default function TodaysOffer() {
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20">
      {/* Abstract background shapes */}
      <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-[#FF5A00]/5 blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#791B43]/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-full max-w-[420px] aspect-square">
              <div className="absolute inset-6 rounded-3xl bg-[#E84B07]" />
              <Image
                src="/headphone/todays-offer/product-main.png"
                alt="JBL Tune 770NC"
                width={340}
                height={340}
                className="object-contain relative z-10"
                priority
              />
            </div>

            <div className="mt-8 flex items-center gap-4">
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
                  <Image src={src} alt="" width={64} height={64} className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 relative">
            <span className="absolute top-0 right-0 font-oswald text-sm uppercase tracking-wider text-[#FF5A00] rotate-6 origin-top-right">
              today&apos;s best feature
            </span>

            <span className="inline-flex self-start items-center px-4 py-1 rounded-full bg-[#FF5A00] text-white text-xs font-bold uppercase tracking-wider">
              Save 20%
            </span>

            <div>
              <h2 className="font-oswald text-5xl font-bold uppercase text-white leading-tight">
                Today&apos;s Offer
              </h2>
              <p className="mt-2 font-oswald text-2xl text-white/80">
                JBL Tune 770NC - ₹5,999.00
              </p>
            </div>

            <p className="text-sm leading-relaxed text-white/60 max-w-md">
              Experience premium noise cancelling with JBL&apos;s latest
              wireless over-ear headphones. Featuring adaptive ANC, 40-hour
              battery life, and ultra-comfortable memory foam ear cushions for
              all-day listening.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button radius={28} className="px-8 py-3 text-sm tracking-widest">
                ORDER NOW
              </Button>
              <Button
                variant="pink"
                radius={28}
                className="px-8 py-3 text-sm tracking-widest"
              >
                YOUR CUSTOMIZATION
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
