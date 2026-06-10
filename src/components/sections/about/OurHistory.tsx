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
      "Introducing the JBL Clip 4 and Go 3 in an eco-friendly material made from 90% post-consumer recycled plastic. It’s part of our ongoing plan to redesign our products and packaging as we move towards becoming carbon neutral.",
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


      {/* PART 2 — PREMIUM TIMELINE                      */}

      <section className="relative overflow-hidden py-[120px]">
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/bg/bg_audio copy.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 " />
        </div>

        {timelineBgImage && (
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image src={timelineBgImage} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/70" />
          </div>
        )}

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
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
          <div className="relative z-10">
            <div className="text-center">
              <span className="font-oswald text-white text-[62px] tracking-[4px] uppercase">
                OUR HISTORY
              </span>
              <h2 className="font-oswald text-white font-light text-[40px] sm:text-[56px] lg:text-[52px] leading-none mt-3">
                75 YEARS OF JBL SOUND
              </h2>

            </div>

            <div className="mt-16">
              <HistoryTimeline items={historyItems} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
