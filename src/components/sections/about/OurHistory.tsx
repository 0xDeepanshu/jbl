import Image from "next/image";
import Container from "@/components/ui/Container";
import HistoryTimeline from "./HistoryTimeline";
import type { HistoryItem } from "./HistoryTimeline";
import WaveDivider from "@/components/ui/WaveDivider";

interface OurHistoryProps {
  bgImage?: string;
  timelineBgImage?: string;
}

const historyItems: HistoryItem[] = [
  {
    year: "1946",
    title: "The Beginning of a Legacy",
    description:
      "James B. Lansing founded JBL with a vision to create the most accurate loudspeakers in the world. From day one, the company set new standards for audio fidelity across cinemas and concert halls worldwide.",
    images: [
      "/bg/rectangle_bg_mostpopular.png",
      "/bg/bg_audio.png",
      "/bg/bg_audio copy.png",
    ],
  },
  {
    year: "1970",
    title: "Defining the Sound of Rock",
    description:
      "JBL became the official sound system for major rock concerts and festivals. Legendary artists from Jimi Hendrix to The Who performed through JBL systems, cementing its place in music history.",
    images: [
      "/bg/bg_audio copy.png",
      "/bg/bg_audio.png",
      "/bg/rectangle_bg_mostpopular.png",
    ],
  },
  {
    year: "1990",
    title: "Innovating Home Audio",
    description:
      "JBL brought professional-grade sound into homes worldwide with the introduction of the iconic JBL Control series and advancements in home theater systems that transformed how families experienced movies.",
    images: [
      "/bg/bg_audio.png",
      "/bg/rectangle_bg_mostpopular.png",
      "/bg/bg_audio copy.png",
    ],
  },
  {
    year: "2024",
    title: "The Future of Sound",
    description:
      "Today JBL continues to push boundaries with cutting-edge wireless technology, adaptive noise cancellation, and sustainable manufacturing, carrying forward a 75+ year legacy of audio excellence.",
    images: [
      "/bg/rectangle_bg_mostpopular.png",
      "/bg/bg_audio copy.png",
      "/bg/bg_audio.png",
    ],
  },
];

export default function OurHistory({
  bgImage,
  timelineBgImage,
}: OurHistoryProps = {}) {
  return (
    <>
      {/* ============================================= */}
      {/* PART 1 — BRAND STORY INTRO                    */}
      {/* ============================================= */}
      <section className="relative bg-[#0d0d0d] overflow-hidden">
        {/* Background image */}
        {bgImage && (
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src={bgImage}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0d0d0d]/70" />
          </div>
        )}

        {/* Subtle noise-like texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 15% 30%, rgba(255,255,255,0.03) 0%, transparent 50%),
              radial-gradient(circle at 85% 20%, rgba(255,255,255,0.02) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.015) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(255,255,255,0.02) 0%, transparent 50%),
              radial-gradient(circle at 10% 90%, rgba(255,255,255,0.015) 0%, transparent 50%),
              radial-gradient(circle at 90% 70%, rgba(255,255,255,0.02) 0%, transparent 50%)
            `,
          }}
        />

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-20 md:py-28 lg:py-36 items-center">
            <div className="flex flex-col leading-[0.85]">
              <span className="font-oswald uppercase text-white font-bold text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[110px] tracking-tight">
                FIND
              </span>
              <span className="font-oswald uppercase text-white font-bold text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[110px] tracking-tight mt-1">
                YOUR
              </span>
              <span className="font-oswald uppercase text-[#ff7a00] font-bold text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[110px] tracking-tight mt-1">
                TRUE
              </span>
              <span className="font-oswald uppercase text-white font-bold text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[110px] tracking-tight mt-1">
                SOUND
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[#d0d0d0] text-base md:text-lg leading-relaxed lg:leading-[1.8] max-w-lg">
                For over seven decades, JBL has been the defining voice in
                professional audio. From the world&apos;s biggest concert stages
                to the headphones in your pocket, every product carries a legacy
                of precision engineering and uncompromising sound quality. This
                is more than sound — it&apos;s a statement.
              </p>
              <p className="text-[#d0d0d0] text-base md:text-lg leading-relaxed lg:leading-[1.8] max-w-lg mt-5">
                Every driver, every enclosure, every curve is designed with one
                purpose: to deliver the truest sound experience possible. JBL
                doesn&apos;t just make audio equipment — we define how the world
                listens.
              </p>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="relative block w-full h-[50px] md:h-[80px] lg:h-[100px]"
          >
            <path
              d="M0,30 C150,65 300,10 450,50 S700,20 850,55 S1050,5 1200,45 S1350,15 1440,30 L1440,100 L0,100 Z"
              fill="#ff5a1f"
            />
          </svg>
        </div>
      </section>

      {/* ============================================= */}
      {/* PART 2 — HISTORY TIMELINE                     */}
      {/* ============================================= */}
      <section className="relative bg-[#ff5a1f] overflow-hidden pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-28">
        {timelineBgImage && (
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src={timelineBgImage}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#ff5a1f]/70" />
          </div>
        )}

        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 40%, rgba(255,255,255,0.04) 0%, transparent 50%),
              radial-gradient(circle at 75% 30%, rgba(255,255,255,0.03) 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, rgba(255,255,255,0.02) 0%, transparent 50%),
              radial-gradient(circle at 15% 70%, rgba(255,255,255,0.03) 0%, transparent 50%),
              radial-gradient(circle at 85% 85%, rgba(255,255,255,0.02) 0%, transparent 50%)
            `,
          }}
        />

        <Container>
          <div className="relative z-10 text-center">
            <h2 className="font-oswald uppercase text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
              OUR HISTORY
            </h2>
            <p className="mt-3 text-white/80 text-base md:text-lg font-light tracking-wider uppercase">
              75 YEARS OF JBL SOUND
            </p>

            <HistoryTimeline items={historyItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
