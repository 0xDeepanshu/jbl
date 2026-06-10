import Image from "next/image";
import Button from "@/components/ui/Button";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  ctaText: string;
}

export default function FeatureCard({
  image,
  title,
  description,
  ctaText,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start border-10 gap-[6px]  border border-white bg-black h-[350px] w-[250px] text-start shadow-xl shadow-black/40 transition-all duration-300 hover:border-white">
      <div className="flex flex-col rounded-2xl bg-black p-4 shadow-xl">
        <div className="relative h-[140px] w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="250px"
          />
        </div>

        <h3 className="mt-4 font-oswald text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-white/60">
          {description}
        </p>

        <button className="mt-auto text-start pt-4 text-xs font-semibold text-orange-500">
          {ctaText}
        </button>
      </div>
    </div >
  );
}
