"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const thumbnails = [
  "/headphone/todaysoffer/1.png",
  "/headphone/todaysoffer/2.png",
  "/headphone/todaysoffer/3.png",
];

export default function TodaysOffer() {
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20">


      <Image
        src="/bg/todaysoffer_bg.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <Container>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-full max-w-[420px] aspect-square">
              <div className="absolute inset-6 rounded-3xl bg-[#E84B07]" />
              <Image
                src="/todaysoffer/men.png"
                alt="JBL Tune 770NC"
                width={540}
                height={540}
                className="object-cover absolute  z-10 w-[400px] h-[480px] -top-20 "
                priority
              />
            </div>

            <div className="mt-8 flex items-center gap-4">
              {thumbnails.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveThumb(i)}
                  className={`relative border-1 rounded-xl overflow-hidden transition-all duration-200 ${i === activeThumb
                    ? "scale-110"
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
            <div className="absolute top-0 right-10 font-oswald text-sm  rotate-30 origin-top-right">
              <Image
                src="/todaysoffer/text.png"
                alt=""
                width={200}
                height={200}
                className="object-cover"
              />
            </div>

            <span className="">
              Save 20%
            </span>

            <div>
              <h2 className="font-oswald text-5xl font-medium uppercase  leading-tight text-[#E84B07]">
                Today&apos;s Offer
              </h2>
              <p className="mt-2 font-oswald text-2xl text-white">
                JBL Tune 770NC - ₹5,999.00
              </p>
            </div>

            <p className="text-sm leading-relaxed text-white/60 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Sagittis ornare dictum felis mattis cursus. Dui sed mauris lectus dui odio. Luctus ullamcorper a nunc est arcu enim aenean nullam mattis. Bibendum sagittis adipiscing
            </p>

            <div className="flex flex-wrap gap-8 font-light">
              <Button variant="pink" className="px-10 py-3 text-2xl">
                Order Now
              </Button>
              <Button variant="orange" className="px-5 py-2 text-2xl">
                Your Customization
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
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
            fill="#ff5a00"
          />
        </svg>
      </div>
    </section>

  );
}
