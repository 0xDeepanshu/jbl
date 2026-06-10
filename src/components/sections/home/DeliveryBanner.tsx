import Image from "next/image";
import Button from "@/components/ui/Button";

interface DeliveryBannerProps {
  className?: string;
}

export default function DeliveryBanner({ className }: DeliveryBannerProps) {
  return (
    <div className={className}>
      <div className="mx-auto w-full max-w-[1280px] px-4 z-20">
        <div
          className="relative w-full rounded-[32px] overflow-visible h-auto lg:h-[480px]"
          style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.35)" }}
        >
          {/* Border overlay */}
          <Image
            src="/bg/deliver_bg.png"
            alt=""
            fill
            className="object-cover rounded-[32px]"
            sizes="100vw"
          />



          {/* Left content area */}
          <span className="absolute top-20 left-1/2 -translate-x-1/2">
            <Image
              src="/deliver/claim.png"
              alt="claim"
              width={70}
              height={36}
              className="object-contain"
            />
          </span>
          <div className="relative z-10 lg:absolute lg:left-[70px] lg:top-1/2 lg:-translate-y-1/2 lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left px-8 lg:px-0 pt-12 lg:pt-0 pb-4 lg:pb-0">
            <h2
              className="font-oswald font-medium text-white leading-none"
              style={{
                fontSize: "clamp(28px, 5vw, 38px)",
                letterSpacing: "0.5px",
              }}
            >
              ORDER YOUR FAVOURITE PRODUCT
            </h2>
            <p
              className="font-ineria font-bold text-white mt-4 lg:mt-6"
              style={{ fontSize: "clamp(22px, 4vw, 34px)", lineHeight: "1.3", letterSpacing: "4px" }}
            >
              24 Hours Fast
              <br />
              Delivery Challenge
            </p>
            <div className="mt-6 lg:mt-8">
              <Button
                variant="orange"
                width={180}
                height={56}
                radius={16}
                className="text-[19px]"
              >
                ORDER NOW
              </Button>
            </div>
          </div>

          {/* Right product area */}
          <div className="relative z-20 lg:absolute lg:right-0 lg:bottom-20 lg:h-full lg:w-[50%] flex items-end justify-center lg:items-start lg:justify-end">
            <Image
              src="/deliver/scooter.png"
              alt="Fast delivery"
              width={580}
              height={480}
              className="object-contain drop-shadow-2xl lg:translate-y-4"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
