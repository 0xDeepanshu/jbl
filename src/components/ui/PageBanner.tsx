import Link from "next/link";
import Image from "next/image";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageBanner({
  title,
  subtitle,
  breadcrumbs,
  bgImage,
}: PageBannerProps) {
  return (
    <section className="relative flex items-center justify-center min-h-[320px] md:min-h-[420px] lg:min-h-[520px] bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#080808] overflow-hidden pt-[90px]">
      {/* Background */}
      {bgImage ? (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/80 via-[#111111]/60 to-[#080808]/80" />
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0,200 C200,120 400,280 600,180 S1000,80 1440,200"
              fill="none"
              stroke="#ff7a00"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.08"
            />
            <path
              d="M0,150 C300,250 600,100 900,220 S1200,180 1440,120"
              fill="none"
              stroke="#ff7a00"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.06"
            />
            <path
              d="M0,260 C180,160 360,300 540,200 S900,120 1440,260"
              fill="none"
              stroke="#ff7a00"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.05"
            />
            <path
              d="M0,100 C250,200 500,50 750,180 S1050,220 1440,100"
              fill="none"
              stroke="#ff7a00"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.07"
            />
            <path
              d="M0,300 C220,200 440,320 660,240 S1100,160 1440,300"
              fill="none"
              stroke="#ff7a00"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.04"
            />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <h1 className="font-oswald uppercase text-white font-bold text-[34px] md:text-[44px] lg:text-[60px] tracking-tight leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-[#d0d0d0] text-base md:text-[17px] leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}

        {breadcrumbs.length > 0 && (
          <nav className="mt-[18px] flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <span key={index} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-[#ff7a00] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#ff7a00]">{item.label}</span>
                  )}
                  {!isLast && (
                    <span className="text-white/25" aria-hidden="true">
                      &gt;
                    </span>
                  )}
                </span>
              );
            })}
          </nav>
        )}
      </div>
    </section>
  );
}
