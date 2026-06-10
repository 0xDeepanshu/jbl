import Image from "next/image";

import SignupCard from "@/components/ui/SignupCard";

interface NewsletterSignupProps {
  bgImage?: string;
  compact?: boolean;
}

export default function NewsletterSignup({
  bgImage,
  compact,
}: NewsletterSignupProps = {}) {
  return (
    <section className={`relative bg-[#ff5a1f] overflow-hidden ${compact ? "py-20" : "h-screen pb-6"}`}>
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#ff5a1f]/70" />
        </div>
      )}

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.04) 0%, transparent 50%),
            radial-gradient(circle at 70% 40%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(circle at 25% 70%, rgba(255,255,255,0.025) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(255,255,255,0.02) 0%, transparent 50%)
          `,
        }}
      />

      <div className={`mx-auto max-w-[1440px] px-4 ${compact ? "" : "h-full"}`}>
        <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ${compact ? "items-center" : "h-full items-end"}`}>
          {/* Left side */}
          <div className="flex flex-col pb-16">
            <h2 className="font-oswald uppercase text-white font-bold text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.1] tracking-tight">
              SIGN UP FOR THE LATEST
              <br />
              JBL NEWS &amp; OFFERS!
            </h2>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
            >
              View Our Privacy Policy
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>

          {/* Right side */}
          <div className="flex justify-center lg:justify-end self-end">
            <SignupCard />
          </div>
        </div>
      </div>

    </section>
  );
}
