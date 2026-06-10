import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const products = [
  { title: "JBL Reflect Aero", description: "True wireless earbuds with adaptive noise cancelling and smart ambient technology.", image: "/headphone/noise-cancelling/earbuds.png" },
  { title: "JBL Tour One M2", description: "Premium over-ear headphones with True Adaptive ANC and personalized sound.", image: "/headphone/noise-cancelling/overear.png" },
  { title: "JBL Tune 230NC", description: "Compact TWS earbuds with active noise cancelling and JBL Pure Bass.", image: "/headphone/noise-cancelling/tws.png" },
  { title: "JBL Live Pro 2", description: "Stem-style TWS with adaptive noise cancelling and dual driver setup.", image: "/headphone/noise-cancelling/stem-tws.png" },
  { title: "JBL Endurance Peak 3", description: "Sports earbuds with active noise cancelling and TwistLock ergonomics.", image: "/headphone/noise-cancelling/sports.png" },
  { title: "JBL Quantum 910", description: "Wireless gaming headset with adaptive ANC and JBL Spatial Sound.", image: "/headphone/noise-cancelling/gaming.png" },
];

export default function NoiseCancelling() {
  return (
    <section className="bg-[#8c8793] py-20">
      <Container>
        <div className="text-[#1a1a1a]">
          <SectionTitle title="NOISE CANCELLING" accentText="Headphones" />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const isFeatured = i === 0;

            return (
              <div
                key={product.title}
                className="rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: isFeatured ? "#E84B07" : "#ffffff",
                }}
              >
                <div className="relative w-full h-52 flex items-center justify-center mb-4">
                  <div
                    className="absolute w-36 h-36 rounded-full"
                    style={{
                      backgroundColor: isFeatured ? "rgba(255,255,255,0.15)" : "rgba(232,75,7,0.1)",
                    }}
                  />
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={160}
                    height={160}
                    className="object-contain relative z-10"
                  />
                </div>

                <h3
                  className="font-oswald text-xl font-bold uppercase"
                  style={{ color: isFeatured ? "#ffffff" : "#1a1a1a" }}
                >
                  {product.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mt-1 max-w-xs"
                  style={{
                    color: isFeatured ? "rgba(255,255,255,0.75)" : "rgba(26,26,26,0.6)",
                  }}
                >
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button radius={28} className="px-8 py-3 text-sm tracking-widest">
            VIEW MORE
          </Button>
        </div>
      </Container>
    </section>
  );
}
