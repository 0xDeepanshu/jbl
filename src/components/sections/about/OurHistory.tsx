import Image from "next/image";
import Container from "@/components/ui/Container";
import type { HistoryItem } from "./HistoryTimeline";
import HistoryTimeline from "./HistoryTimeline";

interface OurHistoryProps {
  bgImage?: string;
  timelineBgImage?: string;
}

const historyItems: HistoryItem[] = [
  {
    year: "2024",
    title: "in tune with the enviourment",
    description:
      "Introducing The JBL Clip 4 And Go 3 In An Eco-Friendly Material Made From 90% Post-Consumer Recycled Plastic. It's Part Of Our Ongoing Plan To Redesign Our Products And Packaging As We Move Towards Becoming Carbon Neutral.",
    images: [
      "/history/1.jpg",
      "/history/2.png",
    ],
  },
];

export default function OurHistory({
  bgImage,
  timelineBgImage,
}: OurHistoryProps = {}) {
  return (
    <>
      <section className="relative bg-[#0d0d0d] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/bg/rectangle_bg_mostpopular.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0d0d0d]/20" />
        </div>

        {bgImage && (
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image src={bgImage} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#0d0d0d]/70" />
          </div>
        )}

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-20 md:py-28 lg:py-46 items-stretch">
            <div className="flex flex-col items-center justify-center gap-7 leading-[0.85] h-full">
              <span className="font-oswald uppercase text-white font-light text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[90px] tracking-tight">
                FIND
              </span>
              <span className="font-oswald uppercase text-white font-light text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[90px] tracking-tight">
                YOUR
              </span>
              <span className="font-oswald uppercase text-[#ff7a00] font-light text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[90px] tracking-tight">
                TRUE
              </span>
              <span className="font-oswald uppercase text-white font-light text-[56px] sm:text-[72px] md:text-[88px] lg:text-[100px] xl:text-[90px] tracking-tight">
                SOUND
              </span>
            </div>

            <div className="text-white flex flex-col justify-center h-full">
              <p className="text-lg md:text-xl leading-relaxed lg:leading-[1.8] max-w-lg">
                JBL has always believed that sound should be an open stage. A
                place of free expression where voices are heard. Without
                restrictions. Without limitations. That&apos;s why we surface
                and celebrate the unfiltered self-expression of courageous
                artists, creators, and performers. JBL is here to help you
                express your true self, so you can experience the joy and
                excitement of being you.
              </p>
              <p className="text-base md:text-lg leading-relaxed lg:leading-[1.8] max-w-lg mt-5">
                Every driver, every enclosure, every curve is designed with one
                purpose: to deliver the truest sound experience possible. JBL
                doesn&apos;t just make audio equipment — we define how the world
                listens.
              </p>
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


      {/* PART 2 — OUR HISTORY TIMELINE */}

      <section className="relative overflow-hidden py-[100px]">
        {/* Orange background */}
        <div className="absolute inset-0 bg-[#ff5a00]" />

        {/* Texture overlay from the bg image */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/bg/rectangle_bg_mostpopular.png"
            alt=""
            fill
            className="object-cover opacity-30 mix-blend-multiply"
          />
        </div>

        <Container>
          <div className="relative z-10">
            <div className="text-center">
              <h2 className="font-oswald text-white font-bold text-[42px] sm:text-[52px] lg:text-[62px] leading-none uppercase tracking-[2px]">
                OUR HISTORY
              </h2>
              <p className="font-oswald text-white font-light text-[24px] sm:text-[30px] lg:text-[36px] leading-none mt-3 uppercase tracking-[1px]">
                75 YEARS OF JBL SOUND
              </p>
            </div>

            <div className="mt-8">
              <HistoryTimeline items={historyItems} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
