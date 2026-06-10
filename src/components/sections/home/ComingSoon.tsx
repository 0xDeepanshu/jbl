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


      <Container>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="font-oswald text-6xl font-medium uppercase text-white leading-tight">
            Coming Soon
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/80 max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Platea vitae ultricies eu aenean. Urna ut tortor tellus lectus hac dictumst lectus ipsum a. Pharetra proin faucibus pellentesque nec fermentum nunc.
          </p>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-2xl ">
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
