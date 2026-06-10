import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";

const products = [
  { image: "/headphone/mostpopular/sound.png", title: "HOMETHEATER", description: "Lorem Ipsum Dolor", price: "3000 ₹", reviewCount: "2000 Reviews", svgBg: "/popular_bg/sound.svg", rating: 4 },
  { image: "/headphone/mostpopular/speaker.png", title: "SPEAKERS", description: "Lorem Ipsum Dolor", price: "3000 ₹", reviewCount: "3000 Reviews", svgBg: "/popular_bg/speaker_bg.svg", rating: 4 },
  { image: "/headphone/mostpopular/mainheadphone.png", title: "HEADPHONE", description: "Lorem Ipsum Dolor Lorem Ipsum Dolor", price: "2500 ₹", reviewCount: "1050 Reviews", svgBg: "/popular_bg/headphone_bg.svg", rating: 4 },
  { image: "/headphone/mostpopular/airbuds.png", title: "AIRBUDS", description: "Lorem Ipsum Dolor", price: "3000 ₹", reviewCount: "3000 Reviews", svgBg: "/popular_bg/airbuds.png", rating: 4 },
  { image: "/headphone/mostpopular/clock.png", title: "CLOCK SPEAKDER", description: "Lorem Ipsum Dolor", price: "3000 ₹", reviewCount: "3000 Reviews", svgBg: "/popular_bg/clock_bg.svg", rating: 4 },
];

export default function MostPopular() {
  return (
    <section className="relative overflow-hidden py-40">
      <Image
        src="/bg/rectangle_bg_mostpopular.png"
        alt=""
        fill
        className="object-cover"
      />

      <div className="relative z-10">
        <Container>
          <SectionTitle title="MOST POPULAR" accentText="Categories" align="left" />

          <div className="mt-12 flex items-center justify-center gap-2 lg:gap-2 pb-4">
            {products.map((product, i) => (
              <ProductCard
                key={product.title}
                {...product}
                featured={i === 2}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="pink" className="px-10 py-3 text-2xl">
              view more
            </Button>
          </div>
        </Container>
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
            fill="#ff5a00"
          />
        </svg>
      </div>
    </section>
  );
}
