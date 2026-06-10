import Image from "next/image";
import { Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  svgBg: string;
  price: string;
  rating?: number;
  reviewCount?: string;
  featured?: boolean;
}

const SIDE_W = 220;
const FEATURED_W = 400;
const SIDE_RATIO = 247 / 218;
const FEATURED_RATIO = 398 / 386;

export default function ProductCard({
  title,
  description,
  image,
  svgBg,
  price,
  rating = 5,
  reviewCount = "2k+",
  featured = false,
}: ProductCardProps) {
  const w = featured ? FEATURED_W : SIDE_W;
  const h = featured ? Math.round(FEATURED_W * FEATURED_RATIO) : Math.round(SIDE_W * SIDE_RATIO);
  const imgSize = featured ? 180 : 100;
  const imgTop = featured ? -72 : -32;

  return (
    <div
      className="relative shrink-0 transition-all duration-300 hover:scale-[1.02]"
      style={{ width: w, height: h }}
    >
      <Image
        src={svgBg}
        alt=""
        fill
        className="object-contain pointer-events-none"
        priority
      />

      <div
        className="absolute left-1/2 -translate-x-1/2 z-10"
        style={{ top: imgTop, width: imgSize, height: imgSize }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain drop-shadow-xl"
        />
      </div>

      <div
        className="absolute left-1/2 top-1/2 z-10 flex flex-col overflow-hidden -translate-x-1/2 -translate-y-1/2"

      >
        <h3
          className="font-oswald font-bold uppercase text-white leading-tight truncate text-3xl text-center"
          style={{ fontSize: featured ? "30px" : "20px" }}
        >
          {title}
        </h3>

        <p
          className="text-white/60 mt-0.5"
          style={{ fontSize: featured ? "11px" : "10px", lineHeight: "1.3" }}
        >
          {description}
        </p>

        {featured ? (
          <>
            <div
              className="flex items-center gap-0.5"
              style={{ marginTop: "8px" }}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={
                    i < rating
                      ? "fill-[#FF5A00] text-[#FF5A00]"
                      : "text-white/20"
                  }
                />
              ))}
              <span
                className="text-white/50 ml-1"
                style={{ fontSize: "10px" }}
              >
                {reviewCount}
              </span>
            </div>

            <div
              className="flex justify-center"
              style={{ marginTop: "10px" }}
            >
              <span
                className="inline-flex items-center justify-center text-white font-bold rounded-full leading-none border border-white/40 bg-transparent"
                style={{ fontSize: "13px", padding: "8px 20px" }}
              >
                {price}
              </span>
            </div>
          </>
        ) : (
          <div
            className="flex items-center justify-between"
            style={{ marginTop: "4px" }}
          >
            <div className="flex items-center gap-0.5 min-w-0">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={9}
                  className={
                    i < rating
                      ? "fill-[#FF5A00] text-[#FF5A00]"
                      : "text-white/20"
                  }
                />
              ))}
              <span
                className="text-white/50 ml-0.5 truncate"
                style={{ fontSize: "7px" }}
              >
                {reviewCount}
              </span>
            </div>

            <span
              className="inline-flex items-center justify-center bg-white/15 text-white font-bold rounded-full leading-none shrink-0"
              style={{ fontSize: "9px", padding: "3px 10px" }}
            >
              {price}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
