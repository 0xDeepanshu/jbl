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
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/20 bg-black p-5 text-center shadow-xl shadow-black/40 transition-all duration-300 hover:border-white/40">
      <div className="relative w-32 h-32">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <h3 className="font-oswald text-2xl font-bold uppercase text-white">
        {title}
      </h3>

      <p className="max-w-xs text-sm leading-relaxed text-white/60">
        {description}
      </p>

      <Button radius={28} className="px-6 py-2 text-sm tracking-widest">
        {ctaText}
      </Button>
    </div>
  );
}
