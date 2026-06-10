import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const products = [
  {
    title: "JBL Reflect Aero",
    description:
      "True wireless earbuds with adaptive noise cancelling and smart ambient technology.",
    image: "/noisecancelling/earbbuds/0b3125f3afe850398c475e0968b6d1b29141558a.png",
  },
  {
    title: "JBL Tour One M2",
    description:
      "Premium over-ear headphones with True Adaptive ANC and personalized sound.",
    image: "/noisecancelling/earbbuds/163e5d334223301d55ab7aeac9a48808f73df30d.png",
  },
  {
    title: "JBL Tune 230NC",
    description:
      "Compact TWS earbuds with active noise cancelling and JBL Pure Bass.",
    image: "/noisecancelling/earbbuds/480dd81c8bca1fd8f92d4690159fee2f7e4b8de3.png",
  },
  {
    title: "JBL Live Pro 2",
    description:
      "Stem-style TWS with adaptive noise cancelling and dual driver setup.",
    image: "/noisecancelling/headphones/2abbcfe60b59a1bdf74e92014b6789264a30efea.png",
  },
  {
    title: "JBL Endurance Peak 3",
    description:
      "Sports earbuds with active noise cancelling and TwistLock ergonomics.",
    image: "/noisecancelling/headphones/b155a56dcc9c26a7c19cfe9a1927f49ae3eefc09.png",
  },
  {
    title: "JBL Quantum 910",
    description:
      "Wireless gaming headset with adaptive ANC and JBL Spatial Sound.",
    image: "/noisecancelling/headphones/e4af6a3940d8b8d94cf8def08a15badd88d05c70.png",
  },
];

export default function NoiseCancelling() {
  return (
    <section className="relative bg-[#8c8793] py-20 overflow-hidden">


      <Container>
        <div className="flex items-baseline gap-4">
          <h2 className="font-oswald text-7xl font-normal uppercase text-white ">
            NOISE CANCELLING
          </h2>
          <span className=" text-2xl font-semibold  text-[#FF5A00]">
            Headphones
          </span>
        </div>
        <div className="max-w-[980px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((product, i) => {
            const isFeatured = i === 0;

            return (
              <div
                key={product.title}
                className=" flex flex-col items-center text-center rounded-[9px] p-4 shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: 320,
                  height: 420,
                  backgroundColor: isFeatured ? "#E84B07" : "#f5f5f5",
                }}
              >
                <h3
                  className="font-oswald text-[21px] font-light uppercase tracking-wide"
                  style={{ color: isFeatured ? "#ffffff" : "#1a1a1a" }}
                >
                  {product.title}
                </h3>

                <p
                  className="text-[12px] leading-relaxed mt-1.5 max-w-[180px]"
                  style={{
                    color: isFeatured
                      ? "rgba(255,255,255,0.75)"
                      : "rgba(26,26,26,0.6)",
                  }}
                >
                  {product.description}
                </p>

                <div className="flex-1" />

                <div className="relative flex items-center justify-center w-full h-[180px]">
                  <div
                    className="absolute w-32 h-32 rounded-full"
                    style={{
                      backgroundColor: isFeatured
                        ? "#FF4612"
                        : "#FF4612",
                      transform: "translate(6px, -4px)",
                    }}
                  />
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="relative z-10 object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>

                <div className="flex-1" />

                <span
                  className="text-[11px] font-medium tracking-wide"
                  style={{
                    color: isFeatured ? "#ffffff" : "#E84B07",
                  }}
                >
                  {isFeatured ? "Explore →" : "View Product →"}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="pink" className="px-10 py-3 text-2xl">
            view more
          </Button>
        </div>
      </Container>
    </section>
  );
}
