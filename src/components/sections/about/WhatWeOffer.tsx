"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import CategoryTabs from "@/components/ui/CategoryTabs";
import Button from "@/components/ui/Button";
const tabs = [
  { label: "Bluetooth", value: "bluetooth" },
  { label: "Headphones", value: "headphones" },
  { label: "Gaming", value: "gaming" },
  { label: "Home", value: "home" },
  { label: "Specialty", value: "specialty" },
  { label: "Car", value: "car" },
  { label: "Toyota", value: "toyota" },
];

const tabContent: Record<
  string,
  { heading: string; description: string; image: string }
> = {
  bluetooth: {
    heading: "BLUETOOTH SPEAKER",
    description:
      "Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet",
    image: "/offer/off.png",
  },
  headphones: {
    heading: "HEADPHONES",
    description:
      "Premium wireless and wired headphones for every lifestyle. Experience studio-quality sound anywhere.",
    image: "/bg/bg_audio copy.png",
  },
  gaming: {
    heading: "GAMING HEADSETS",
    description:
      "Immersive gaming audio with precision surround sound. Communicate with crystal clarity.",
    image: "/bg/rectangle_bg_mostpopular.png",
  },
  home: {
    heading: "HOME SPEAKERS",
    description:
      "Transform your living space with powerful, room-filling sound from sleek home audio systems.",
    image: "/bg/bg_audio.png",
  },
  specialty: {
    heading: "SPECIALTY AUDIO",
    description:
      "Professional-grade audio solutions for studios, stages, and commercial installations.",
    image: "/bg/bg_audio copy.png",
  },
  car: {
    heading: "CAR AUDIO",
    description:
      "Upgrade your drive with high-performance car speakers, subwoofers, and amplifiers.",
    image: "/bg/rectangle_bg_mostpopular.png",
  },
  toyota: {
    heading: "TOYOTA EDITION",
    description:
      "Factory-engineered JBL audio systems designed exclusively for Toyota and Lexus vehicles.",
    image: "/bg/bg_audio.png",
  },
};

export default function WhatWeOffer() {
  const [activeTab, setActiveTab] = useState("bluetooth");
  const current = tabContent[activeTab];

  return (
    <section className="relative bg-[#0d0d0d] overflow-hidden">
      <Image
        src="/bg/rectangle_bg_mostpopular.png"
        alt=""
        fill
        className="object-cover"
      />

      <Container>
        <div className="relative z-10 py-20 md:py-28 lg:py-32">
          {/* Header */}
          <div className="text-center">
            <h2 className="font-oswald uppercase text-white font-bold text-4xl md:text-5xl lg:text-[56px] tracking-tight">
              WHAT WE OFFER
            </h2>
            <p className="mt-2.5 text-white/70 text-base md:text-lg">
              Any Way You Want To Listen, We Got You.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-10 lg:mt-14">
            <CategoryTabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* Content */}
          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col">
              <h3 className="font-oswald uppercase text-white font-semibold text-[28px] md:text-[32px] tracking-tight leading-tight">
                {current.heading}
              </h3>
              <p className="mt-4 text-[#d0d0d0] text-sm md:text-base leading-relaxed max-w-md">
                {current.description}
              </p>
              <Button variant="pink" className="mt-6 md:mt-8 self-start px-6 py-3 rounded-full  text-white text-xs font-semibold uppercase tracking-widest hover:shadow-lg hover:shadow-[#ff5a1f]/30 hover:scale-105 transition-all duration-300">
                LEARN MORE
              </Button>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-white/5">
              <Image
                src={current.image}
                alt={current.heading}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
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
            fill="#ff5a00"
          />
        </svg>
      </div>

    </section>
  );
}
