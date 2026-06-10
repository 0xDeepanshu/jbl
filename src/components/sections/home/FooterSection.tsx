import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { MapPin, Mail } from "lucide-react";

const locations = [
  "New York", "Paris", "Rome", "London", "Athens", "India",
];

const shopLinks = ["Shop", "Category", "Brand", "Deals", "New Arrivals", "Sale"];
const supportLinks = ["Help Center", "Order Tracking", "Returns", "Contact Us", "FAQs", "Shipping Info"];
const aboutLinks = ["About JBL", "Careers", "Press", "Blog", "Sustainability", "Partners"];
const productLinks = ["Headphones", "Speakers", "Soundbars", "Earbuds", "Accessories", "Software"];

const socialLinks = [
  { name: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { name: "Instagram", path: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" },
  { name: "X", path: "M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M15.232 10.768L20 4" },
  { name: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { name: "YouTube", path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z M10 15.5V8.5l6 3.5z" },
];

const partners = [
  "/partner-1.png",
  "/partner-2.png",
  "/partner-3.png",
  "/partner-4.png",
];

export default function FooterSection() {
  return (
    <footer>
      {/* Sign Up */}
      <section className="bg-[#E84B07] pt-20 pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="font-oswald text-4xl font-bold uppercase text-white leading-tight">
                Sign Up For The Latest JBL News &amp; Offers!
              </h2>
              <p className="text-sm text-white/70 max-w-md">
                By subscribing you agree to our Privacy Policy and consent to
                receive marketing communications.
              </p>
            </div>

            <div className="relative -mb-48 z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-5">
                <h3 className="font-oswald text-2xl font-bold text-[#1a1a1a] uppercase">
                  Sign Up
                </h3>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border border-[#1a1a1a]/10 bg-[#f5f5f5] text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 outline-none focus:border-[#E84B07] transition-colors"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-xl border border-[#1a1a1a]/10 bg-[#f5f5f5] text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 outline-none focus:border-[#E84B07] transition-colors"
                />

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-[#1a1a1a]/60 cursor-pointer">
                    <input type="checkbox" className="accent-[#E84B07]" />
                    Remember Me
                  </label>
                  <a href="#" className="text-sm text-[#E84B07] hover:underline">
                    Forgot Password
                  </a>
                </div>

                <Button radius={28} className="w-full py-3 text-sm tracking-widest">
                  ORDER NOW
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="bg-[#0a0a0a] pt-40 pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px]"
          >
            <path
              d="M0,40 C360,0 1080,0 1440,40 L1440,60 L0,60 Z"
              fill="#E84B07"
            />
          </svg>
        </div>

        <Container>
          <div className="flex items-center gap-8 overflow-x-auto pb-4">
            {locations.map((loc) => (
              <div
                key={loc}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors shrink-0"
              >
                <MapPin size={16} />
                <span className="text-xs uppercase tracking-wider">{loc}</span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-oswald text-sm font-bold uppercase text-white tracking-wider">
                Shop
              </h4>
              {shopLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-oswald text-sm font-bold uppercase text-white tracking-wider">
                Support
              </h4>
              {supportLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-oswald text-sm font-bold uppercase text-white tracking-wider">
                About Us
              </h4>
              {aboutLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-oswald text-sm font-bold uppercase text-white tracking-wider">
                Product Support
              </h4>
              {productLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Brand area */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-4">
              <Image
                src="/logo/jbl_logo_nav.png"
                alt="JBL"
                width={80}
                height={60}
                className="object-contain"
              />
              <p className="text-xs leading-relaxed text-white/50 max-w-sm">
                JBL is a leading audio brand known for its premium sound
                quality, innovative design, and legendary reliability. From
                headphones to speakers, JBL delivers an immersive audio
                experience.
              </p>
              <p className="text-xs text-white/50 flex items-center gap-2">
                <MapPin size={12} />
                123 Audio Lane, Sound City, CA 90210
              </p>
              <p className="text-xs text-white/50 flex items-center gap-2">
                <Mail size={12} />
                support@jbl.com
              </p>

              <div className="flex items-center gap-3 mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-oswald text-sm font-bold uppercase text-white tracking-wider">
                Our Partners
              </h4>
              <div className="flex flex-wrap gap-4">
                {partners.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Partner"
                    width={80}
                    height={40}
                    className="object-contain opacity-50 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <Image
              src="/logo/jbl_logo_nav.png"
              alt="JBL"
              width={120}
              height={40}
              className="object-contain opacity-30"
            />
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} JBL. All rights reserved.
            </p>
          </div>
        </Container>
      </section>
    </footer>
  );
}
