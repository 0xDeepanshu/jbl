import Image from "next/image";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    image: "/feature-1.png",
    title: "Deep Bass",
    description: "Feel every beat with JBL's legendary deep bass technology.",
    ctaText: "EXPLORE",
  },
  {
    image: "/feature-2.png",
    title: "Wireless Freedom",
    description:
      "Bluetooth 5.3 with multipoint connection for seamless switching.",
    ctaText: "LEARN MORE",
  },
  {
    image: "/feature-3.png",
    title: "Noise Cancelling",
    description: "Adaptive ANC that adjusts to your environment in real time.",
    ctaText: "DISCOVER",
  },
  {
    image: "/feature-4.png",
    title: "All-Day Battery",
    description: "Up to 76 hours of playback on a single charge.",
    ctaText: "VIEW SPECS",
  },
  {
    image: "/feature-5.png",
    title: "Crystal Calls",
    description: "Beamforming microphones for hands-free calls with clarity.",
    ctaText: "TRY NOW",
  },
  {
    image: "/feature-6.png",
    title: "Spatial Audio",
    description: "Immersive 3D soundstage that moves with you.",
    ctaText: "HEAR IT",
  },
  {
    image: "/feature-7.png",
    title: "Lightweight Design",
    description:
      "Ergonomic build with memory foam cushions for all-day comfort.",
    ctaText: "SEE MORE",
  },
];

export default function AudioSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <Image src="/bg/bg_audio.png" alt="" fill className="object-cover" />

      <div className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 items-start">
            <div className="flex flex-col items-center lg:items-start pt-16 lg:pt-72">
              <h2 className="font-oswald text-5xl lg:text-6xl font-bold uppercase text-white leading-tight text-center lg:text-left">
                OUR AUDIO DOES IT ALL
              </h2>
              <p className="text-sm leading-relaxed text-white/70 max-w-[350px] text-center lg:text-left mt-6">
                From deep bass to crystal-clear highs, every detail is
                engineered to deliver an immersive listening experience. Whether
                you are commuting, working out, or just relaxing, JBL adapts to
                your world.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 justify-self-center">
                  <div className="w-[240px]">
                    <FeatureCard {...features[0]} />
                  </div>
                </div>
                <div className="justify-self-end">
                  <div className="w-[240px]">
                    <FeatureCard {...features[1]} />
                  </div>
                </div>
                <div className="justify-self-start">
                  <div className="w-[240px]">
                    <FeatureCard {...features[2]} />
                  </div>
                </div>
                <div className="col-span-2 justify-self-center">
                  <div className="w-[240px]">
                    <FeatureCard {...features[3]} />
                  </div>
                </div>
                <div className="justify-self-end">
                  <div className="w-[240px]">
                    <FeatureCard {...features[4]} />
                  </div>
                </div>
                <div className="justify-self-start">
                  <div className="w-[240px]">
                    <FeatureCard {...features[5]} />
                  </div>
                </div>
                <div className="col-span-2 justify-self-center">
                  <div className="w-[240px]">
                    <FeatureCard {...features[6]} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
