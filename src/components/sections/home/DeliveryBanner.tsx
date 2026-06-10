import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function DeliveryBanner() {
  return (
    <section className="relative -my-10 z-20">
      <Container>
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%)",
            background: "linear-gradient(135deg, #C21A9D 0%, #791B43 50%, #E84B07 100%)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-10 py-12">
            {/* Left */}
            <div className="flex flex-col gap-5">
              <h2 className="font-oswald text-4xl font-bold uppercase text-white leading-tight">
                Order Your Favourite Product
              </h2>
              <p className="font-oswald text-xl text-white/80">
                24 Hours Fast Delivery Challenge
              </p>
              <div>
                <Button
                  radius={28}
                  className="px-8 py-3 text-sm tracking-widest"
                >
                  ORDER NOW
                </Button>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/delivery-rider.png"
                alt="Fast delivery"
                width={260}
                height={260}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
