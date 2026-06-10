import { Quote } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const reviews = [
  {
    name: "MARLE PAYNE",
    role: "Manager",
    image: "/clientrev/women.jpg",
    text: "Lorem ipsum dolor sit amet consectetur. Odio integer non tellus id bibendum tortor nunc eu. Purus ac pellentesque vel sit. Consequat et quam sed at integer tincidunt placerat ultrices. In elementum consequat ornare massa at etiam.Lorem ipsum dolor sit amet consectetur. Odio integer non tellus id bibendum tortor nunc eu. Purus ac pellentesque vel sit. Consequat et quam sed at integer tincidunt placerat ultrices. In elementum consequat ornare massa at etiam.",
  },
];

export default function ClientReviews() {
  const review = reviews[0];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-20 pb-10">
      <Image
        src="/bg/rectangle_bg_mostpopular.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <Container>
        <div className="flex items-center justify-center gap-40 min-h-[720px]">
          {/* Left: Card */}
          <div className="relative shrink-0">
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[400px] rounded-[20px] bg-[#E84B07]" />

            <div className="relative bg-white rounded-2xl shadow-2xl w-[310px] h-[315px] flex flex-col items-center pt-4">
              <div className="w-[230px] h-[230px] rounded-xl overflow-hidden">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={230}
                  height={230}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <h3 className="font-oswald text-2xl font-bold text-[#1a1a1a]">
                  {review.name}
                </h3>
                <p className="mt-1 text-base font-medium text-[#1a1a1a]/70">
                  {review.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Testimonial */}
          <div className="z-20 flex flex-col max-w-[580px]">
            <span className="absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 h-[2px] w-[540px] bg-white" />
            <div className="flex items-center gap-3 mt-4">

              <h2 className="font-oswald text-[48px] font-bold uppercase text-white leading-none tracking-tight">
                Client Reviews
              </h2>
            </div>

            <div className="mt-8 relative">
              <Quote size={56} className="text-[#FF5A00]" strokeWidth={1.5} />
              <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-[420px]">
                {review.text}
              </p>
              <div className="flex justify-end -mt-6">
                <Quote
                  size={56}
                  className="text-[#FF5A00] rotate-180"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A00]" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </Container>

    </section>
  );
}
