import Image from "next/image";
import Container from "@/components/ui/Container";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "MARLE PAYNE",
    role: "Manager",
    image: "/reviewer-1.png",
    text: "The sound quality is absolutely incredible. I have never experienced such clarity and deep bass from wireless headphones before. The noise cancelling feature works flawlessly even in crowded environments.",
  },
];

export default function ClientReviews() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20">
      <Container>
        {reviews.map((review) => (
          <div
            key={review.name}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left */}
            <div className="relative flex justify-center lg:justify-end pr-0 lg:pr-12">
              <div className="absolute -left-6 top-6 w-64 h-72 rounded-3xl bg-[#E84B07]" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center w-72 -translate-y-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg -mt-16">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-oswald text-xl font-bold text-[#1a1a1a]">
                  {review.name}
                </h3>
                <p className="text-sm text-[#1a1a1a]/60">{review.role}</p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">
              <h2 className="font-oswald text-5xl font-bold uppercase text-white leading-tight">
                Client Reviews
              </h2>

              <div className="relative">
                <Quote
                  size={36}
                  className="text-[#FF5A00] -ml-1"
                  strokeWidth={1.5}
                />
                <p className="mt-2 text-sm leading-relaxed text-white/70 max-w-lg">
                  {review.text}
                </p>
                <div className="flex justify-end">
                  <Quote
                    size={36}
                    className="text-[#FF5A00] rotate-180"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A00]" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
