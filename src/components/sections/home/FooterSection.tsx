import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const countries = [
  {
    name: "New York",
    flag: "/countries/newyork.png",
    address: "123 Audio Lane",
    imgW: 30,
    imgH: 30,
  },
  {
    name: "Paris",
    flag: "/countries/paris.png",
    address: "45 Rue du Son",
    imgW: 18,
    imgH: 30,
  },
  {
    name: "Rome",
    flag: "/countries/rome.png",
    address: "Via Tuscolana, 89",
    imgW: 30,
    imgH: 30,
  },
  {
    name: "London",
    flag: "/countries/london.png",
    address: "50 Oxford Street",
    imgW: 30,
    imgH: 28,
  },
  {
    name: "Athens",
    flag: "/countries/athens.png",
    address: "15 Ermou Street",
    imgW: 30,
    imgH: 30,
  },
  {
    name: "India",
    flag: "/countries/india.png",
    address: "42 MG Road, Bangalore",
    imgW: 28,
    imgH: 28,
  },
];

const shopLinks = [
  "Shop",
  "Category",
  "Brand",
  "Deals",
  "New Arrivals",
  "Sale",
];
const supportLinks = [
  "Help Center",
  "Order Tracking",
  "Returns",
  "Contact Us",
  "FAQs",
  "Shipping Info",
];
const aboutLinks = [
  "About JBL",
  "Careers",
  "Press",
  "Blog",
  "Sustainability",
  "Partners",
];
const productLinks = [
  "Headphones",
  "Speakers",
  "Soundbars",
  "Earbuds",
  "Accessories",
  "Software",
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
  "/logo/footer/akg.png",
  "/logo/footer/hk.png",
  "/logo/footer/infinity.png",
  "/logo/footer/lexicon.png",
  "/logo/footer/mark.png",
  "/logo/footer/revel.png",
  "/logo/footer/jbl_logo_nav.png",
  "/logo/footer/normal logo.png",
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
        <section className="border-b border-[#E84B07]/20">
          <div className="mx-auto max-w-[1400px] px-4">
            <div className="flex items-center justify-between py-6 overflow-x-auto gap-6">
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
                    className="object-contain rounded-sm shrink-0"
                  />
                  <div>
                    <p className="text-white text-sm font-medium leading-tight">
                      {country.name}
                    </p>
                    <p className="text-white/40 text-xs leading-tight mt-0.5">
                      {country.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Footer Grid */}
        <section className="mx-auto max-w-[1400px] px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            {/* Col 1: JBL Logo + Contact + Follow Us */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Image
                src="/logo/footer/normal logo.png"
                alt="JBL"
                width={140}
                height={45}
                className="object-contain"
              />
              <p className="text-white/50 text-sm leading-relaxed mt-5 max-w-xs">
                The Call Center Is Open On Weekdays From 9:00 To 20:00 And On
                Weekends From 9:00 To 18:00
              </p>
              <p className="text-white/50 text-sm mt-4 flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                +1 (800) 555-0199
              </p>
              <p className="text-white/50 text-sm mt-2 flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                support@jbl.com
              </p>
              <h4 className="font-oswald font-bold text-white text-sm uppercase tracking-[0.08em] mt-8 mb-4">
                FOLLOW US
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white/60 hover:text-white transition-colors"
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
              <h4 className="font-oswald font-bold text-[#E84B07] text-sm uppercase tracking-[0.08em] mb-4">
                SHOP
              </h4>
              <div className="flex flex-col gap-2.5">
                {shopLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Support + Sustainability */}
            <div>
              <h4 className="font-oswald font-bold text-[#E84B07] text-sm uppercase tracking-[0.08em] mb-4">
                SUPPORT
              </h4>
              <div className="flex flex-col gap-2.5">
                {supportLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="mt-10">
                <h4 className="font-oswald font-bold text-white text-sm uppercase tracking-[0.08em]">
                  SUSTAINABILITY
                </h4>
                <a
                  href="#"
                  className="text-white/50 text-sm hover:text-white transition-colors mt-2 inline-block"
                >
                  Follow Our Efforts
                </a>
              </div>
            </div>

            {/* Col 4: About Us */}
            <div>
              <h4 className="font-oswald font-bold text-[#E84B07] text-sm uppercase tracking-[0.08em] mb-4">
                ABOUT US
              </h4>
              <div className="flex flex-col gap-2.5">
                {aboutLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 5: Product Support */}
            <div>
              <h4 className="font-oswald font-bold text-[#E84B07] text-sm uppercase tracking-[0.08em] mb-4">
                PRODUCT SUPPORT
              </h4>
              <div className="flex flex-col gap-2.5">
                {productLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="mt-10">
                <h4 className="text-white/60 text-xs uppercase tracking-wide font-medium">
                  Manufactured By
                </h4>
                <p className="text-white/40 text-xs mt-1 leading-relaxed">
                  HARMAN International Industries, Incorporated
                </p>
                <h4 className="text-white/60 text-xs uppercase tracking-wide font-medium mt-4">
                  Imported By
                </h4>
                <p className="text-white/40 text-xs mt-1 leading-relaxed">
                  HARMAN India Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1400px] px-4 py-5">
            <p className="text-white/30 text-xs text-center leading-relaxed">
              JBL &copy; {new Date().getFullYear()} CREATED BY HARMAN. ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </section>

        {/* Brand Logos Row */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-[1400px] px-4 py-8">
            <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4">
              {brandLogos.map((src) => (
                <div key={src} className="h-8 flex items-center">
                  <Image
                    src={src}
                    alt=""
                    width={70}
                    height={30}
                    className="object-contain h-full w-auto opacity-40"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Large JBL Watermark */}
        <div className="relative h-28 overflow-hidden">
          <div className="absolute bottom-0 right-0 pointer-events-none select-none">
            <Image
              src="/logo/jbl_logo_nav.png"
              alt=""
              width={400}
              height={130}
              className="object-contain opacity-[0.04]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
