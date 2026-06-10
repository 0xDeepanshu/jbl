import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const countries = [
  {
    name: "New York",
    flag: "/countries/newyork.png",
    address: "3848 Bay Court",
    imgW: 100,
    imgH: 100,
  },
  {
    name: "Paris",
    flag: "/countries/paris.png",
    address: "676 Mitz Street",
    imgW: 30,
    imgH: 30,
  },
  {
    name: "Rome",
    flag: "/countries/rome.png",
    address: "614 White Oak Drive",
    imgW: 90,
    imgH: 90,
  },
  {
    name: "London",
    flag: "/countries/london.png",
    address: "2132 Heron Court",
    imgW: 50,
    imgH: 58,
  },
  {
    name: "Athens",
    flag: "/countries/athens.png",
    address: "2648 Pallet Street",
    imgW: 60,
    imgH: 60,
  },
  {
    name: "India",
    flag: "/countries/india.png",
    address: "Moranpur",
    imgW: 58,
    imgH: 58,
  },
];

const shopLinks = [
  "Featured",
  "Headphone",
  "Gaming",
  "Speaker",
  "Soundbars",
  "Professional",
  "Offer Zone",
];
const supportLinks = [
  "Order Status",
  "Bulk Purchase Program",
  "Buy Authentic",
  "Product Support",
  "Shipping & Delivery Policy",
  "Cancellation & Refund Policy",
  "Service Center",
  "Brand Stores",
];
const aboutLinks = [
  "Harman Corporate",
  "Privacy Policy",
  "Cookie Policy",
  "Cookie Setting",
  "Warranty Policy",
  "Terms Of Use",
  "Why Buy Direct",
  "JBL Sound Partners",
];

const socialLinks = [
  {
    name: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "Instagram",
    path: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
  },
  {
    name: "X",
    path: "M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M15.232 10.768L20 4",
  },
  {
    name: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    name: "YouTube",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z M10 15.5V8.5l6 3.5z",
  },
];

const brandLogos = [
  "/logo/footer/normal logo.png",
  "/logo/footer/akg.png",
  "/logo/footer/infinity.png",
  "/logo/footer/jbl_logo_nav.png",
  "/logo/footer/revel.png",
  "/logo/footer/mark.png",
  "/logo/footer/lexicon.png",
  "/logo/footer/hk.png",
];

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/bg/rectangle_bg_mostpopular.png"
        alt=""
        fill
        className="object-cover"
      />

      {/* All content above the bg image */}
      <div className="relative z-10">

        {/* Countries Bar */}
        <section>
          <div className="mx-auto max-w-[1200px] px-6 border-b border-[#D04D2C]">
            <div className="flex items-center justify-between py-5 overflow-x-auto gap-8">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center gap-3 shrink-0"
                >
                  <Image
                    src={country.flag}
                    alt=""
                    width={country.imgW}
                    height={country.imgH}
                    className="object-contain shrink-0"
                  />
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">
                      {country.name}
                    </p>
                    <p className="text-white/40 text-[11px] leading-tight mt-0.5">
                      {country.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Footer Grid */}
        <section className="mx-auto max-w-[1200px] px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-12">

            {/* Col 1: JBL Logo + Contact + Follow Us */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 item-start justify-start">
              <Image
                src="/logo/footer/normal logo.png"
                alt="JBL"
                width={200}
                height={80}
                className="object-contain"
              />
              <p className="text-white/50 text-[13px] leading-relaxed mt-5 max-w-[220px]">
                The Call Center Is Open On Weekdays From 9:00 To 20:00 And On
                Weekends From 9:00 To 18:00
              </p>
              <p className="text-white/50 text-[13px] mt-5 flex items-center gap-2">
                <Phone size={13} className="shrink-0 text-white/40" />
                91+4563212366
              </p>
              <p className="text-white/50 text-[13px] mt-2 flex items-center gap-2">
                <Mail size={13} className="shrink-0 text-white/40" />
                Abc12@Gmail.Com
              </p>
              <h4 className="font-oswald font-light text-[#E84B07] text-[23px] uppercase tracking-[0.08em] mt-8 mb-3">
                FOLLOW US
              </h4>
              <div className="flex items-center gap-7">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="w-7 h-7 flex items-center gap-4 justify-center hover:opacity-80 transition-opacity"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[28px] h-[28px] gap-4 text-[#C39B91] hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Shop */}
            <div>
              <h4 className="font-oswald font-light text-[#E84B07] text-[23px] uppercase tracking-[0.08em] mb-4">
                SHOP
              </h4>
              <div className="flex flex-col gap-2">
                {shopLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 text-[13px] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Support + Sustainability */}
            <div>
              <h4 className="font-oswald font-light text-[#E84B07] text-[23px] uppercase tracking-[0.08em] mb-4">
                SUPPORT
              </h4>
              <div className="flex flex-col gap-2">
                {supportLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 text-[13px] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-oswald font-light text-[#E84B07] text-[23px] uppercase tracking-[0.08em]">
                  SUSTAINABILITY<span className="ml-1">🌿</span>
                </h4>
                <a
                  href="#"
                  className="text-white/50 text-[13px] hover:text-white transition-colors mt-2 inline-block"
                >
                  Follow Our Efforts
                </a>
              </div>
            </div>

            {/* Col 4: About Us */}
            <div>
              <h4 className="font-oswald font-light text-[#E84B07] text-[23px] uppercase tracking-[0.08em] mb-4">
                ABOUT US
              </h4>
              <div className="flex flex-col gap-2">
                {aboutLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 text-[13px] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 5: Product Support */}
            <div>
              <h4 className="font-oswald font-light text-[#E84B07] text-[23px] uppercase tracking-[0.08em] mb-4">
                PRODUCT SUPPORT
              </h4>
              <div className="mt-2">
                <h5 className="text-white text-[13px] font-semibold underline">
                  Manufactured By:
                </h5>
                <p className="text-white/50 text-[12px] mt-2 leading-relaxed">
                  Harman International
                  <br />
                  Industries,Inc
                  <br />
                  8500,Balboa Blvd,
                  <br />
                  Northridge, CA91329,USA
                </p>
              </div>
              <div className="mt-5">
                <h5 className="text-white text-[13px] font-semibold underline">
                  Imported By:
                </h5>
                <p className="text-white/50 text-[12px] mt-2 leading-relaxed">
                  Harman International (India)
                  <br />
                  Pvt.Ltd,
                  <br />
                  Salarpuria Sattva Knowledge
                  <br />
                  Court
                  <br />
                  Office-1,Wing A &amp; B 5th Floor,
                  <br />
                  Bangalore-560048,Karnataka
                  <br />
                  India.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Copyright + Brand Logos + Watermark */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1200px] px-6 py-6 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">

            {/* Left: Copyright + logos */}
            <div className="flex flex-col gap-5">
              <p className="text-white/30 text-[11px] font-oswald font-light uppercase tracking-wider pb-4 border-b border-[#D04D2C]">
                JBL &copy; 2024 CREATED BY SAYAN ROY.ALL RIGHTS RESERVED.
              </p>
              <div className="flex items-center flex-wrap gap-x-6 gap-y-3">
                {brandLogos.map((src) => (
                  <div key={src} className="h-14 flex items-center">
                    <Image
                      src={src}
                      alt=""
                      width={80}
                      height={44}
                      className="object-contain h-full w-auto opacity-40 hover:opacity-70 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Large JBL watermark */}
            <div className="pointer-events-none select-none shrink-0">
              <Image
                src="/logo/jbl_logo_nav.png"
                alt=""
                width={320}
                height={140}
                className="object-contain opacity-[0.15]"
              />
            </div>

          </div>
        </section>

      </div>
    </footer>
  );
}
