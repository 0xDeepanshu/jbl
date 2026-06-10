import Container from "@/components/ui/Container";

const countdown = [
  { value: "41", label: "Days" },
  { value: "14", label: "Hours" },
  { value: "24", label: "Minutes" },
  { value: "57", label: "Seconds" },
];

export default function ComingSoon() {
  return (
    <section className="relative bg-[#E84B07] pt-32 pb-24 overflow-hidden">
      {/* Curved wave transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px]"
        >
          <path
            d="M0,0 C360,120 1080,120 1440,0 L1440,0 L0,0 Z"
            fill="#0a0a0a"
          />
        </svg>
      </div>

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-oswald text-6xl font-bold uppercase text-white leading-tight">
            Coming Soon
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/80 max-w-lg">
            Something exciting is on its way. Stay tuned for the next
            generation of JBL audio innovation — engineered to redefine your
            listening experience.
          </p>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-2xl">
            {countdown.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-2xl bg-[#2a1205] px-6 py-6"
              >
                <span className="font-oswald text-4xl font-bold text-white leading-none">
                  {item.value}
                </span>
                <span className="mt-2 text-xs uppercase tracking-widest text-white/60">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
