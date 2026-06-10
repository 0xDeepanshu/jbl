import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const thumbnails = [
  "/headphone/hero/1.jpg",
  "/headphone/hero/2.jpg",
  "/headphone/hero/3.jpg",
  "/headphone/hero/4.jpg",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="grid min-h-screen grid-cols-[42%_58%] items-center ">
          <div className=" z-10 flex flex-col gap-5 max-w-[600px]  ml-7">
            <h1 className="font-oswald  text-5xl leading-tight font-normal uppercase text-white">
              just put the headphones on,
              and go with the flow!
            </h1>
            <p className="text-2xl leading-relaxed text-white/70">
              Lorem ipsum dolor sit amet consectetur. Ac tempor eu mollis nascetur convallis viverra lorem.
            </p>
            <div>
              <Button radius={17} height={50} className="text-xl">Order Now</Button>
            </div>
          </div>

          <Image
            src="/bg/background hero main.png"
            alt=""
            fill
            priority
            className="object-cover"
          />

          <div className="relative flex items-center justify-center -ml-16">
            <Image
              src="/headphone/headphone hero main.png"
              alt=""
              width={800}
              height={800}
              className="w-full max-w-[800px] h-auto object-contain"
              priority
            />

            <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 flex flex-col gap-6">
              {thumbnails.map((src, i) => (
                <div
                  key={i}
                  className="relative w-[72px] h-[72px] rounded-lg overflow-hidden border border-white/20 hover:border-white hover:scale-110 transition-all duration-300 shrink-0"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="relative z-10 flex justify-center gap-2 pb-6">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        </div>
      </Container>
    </section>
  );
}
