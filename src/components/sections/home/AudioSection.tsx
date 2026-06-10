import Image from "next/image";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    image: "/audiocards/04e86383cd6a65b7e85ace4fe142d6b512c3ac30.png",
    title: "Deep Bass",
    description: "Feel every beat with JBL's legendary deep bass technology.",
    ctaText: "EXPLORE",
  },
  {
    image: "/audiocards/0d46b113010d40aa98f650e6cd8f9c9440c0847c.png",
    title: "Wireless Freedom",
    description:
      "Bluetooth 5.3 with multipoint connection for seamless switching.",
    ctaText: "LEARN MORE",
  },
  {
    image: "/audiocards/386a65708c6a30b9e83366abc3a818f2e802bcb5.png",
    title: "Noise Cancelling",
    description: "Adaptive ANC that adjusts to your environment in real time.",
    ctaText: "DISCOVER",
  },
  {
    image: "/audiocards/432718a14e8814d805e7b86eb2392ad9532fa5a6.jpg",
    title: "All-Day Battery",
    description: "Up to 76 hours of playback on a single charge.",
    ctaText: "VIEW SPECS",
  },
  {
    image: "/audiocards/616de971053baf0b0127fc43de6091a24e2c36b7.jpg",
    title: "Crystal Calls",
    description: "Beamforming microphones for hands-free calls with clarity.",
    ctaText: "TRY NOW",
  },
  {
    image: "/audiocards/75e966d2264795e643f6e6044c53f8a5b57a6a73.png",
    title: "Spatial Audio",
    description: "Immersive 3D soundstage that moves with you.",
    ctaText: "HEAR IT",
  },
  {
    image: "/audiocards/cb55c921a6089d03d4717a7e5c8642e62ec41e16.jpg",
    title: "Lightweight Design",
    description:
      "Ergonomic build with memory foam cushions for all-day comfort.",
    ctaText: "SEE MORE",
  },
];

export default function AudioSection() {
  return (
    <section className="relative overflow-hidden py-20">

      <Image src="/bg/bg_audio.png" alt="" fill className="object-cover" sizes="100vw" priority />

      <div className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 items-start">
            <div className="flex flex-col items-center lg:items-start pt-16 lg:pt-72">
              <h2 className="font-oswald text-3xl lg:text-6xl font-light uppercase text-white leading-tight text-center lg:text-left">
                OUR AUDIO DOES IT ALL
              </h2>
              <p className="text-sm leading-relaxed text-white/70 max-w-[350px] text-center lg:text-left mt-6">
                From deep bass to crystal-clear highs, every detail is
                engineered to deliver an immersive listening experience. Whether
                you are commuting, working out, or just relaxing, JBL adapts to
                your world.
              </p>
            </div>
            <div className=" relative  min-h-screen flex w-full gap-6 justify-between">

              <div className="   flex flex-col justify-center gap-4">
                <div>
                  <FeatureCard {...features[0]} />
                </div>

                <div className="">
                  <FeatureCard {...features[1]} />
                </div>
              </div>


              <div className="  flex flex-col justify-between gap-4 pt-20">
                <div>
                  <FeatureCard {...features[0]} />
                </div>

                <div className="">
                  <FeatureCard {...features[1]} />
                </div>
                <div className="">
                  <FeatureCard {...features[1]} />
                </div>
              </div>
              <div className="  flex flex-col  gap-15 pb-15">
                <div>
                  <FeatureCard {...features[0]} />
                </div>

                <div className="">
                  <FeatureCard {...features[1]} />
                </div>
                <div className="">
                  <FeatureCard {...features[1]} />
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
