import NewsletterSignup from "@/components/sections/about/NewsletterSignup";
import AudioSection from "@/components/sections/home/AudioSection";
import ClientReviews from "@/components/sections/home/ClientReviews";
import ComingSoon from "@/components/sections/home/ComingSoon";
import DeliveryBanner from "@/components/sections/home/DeliveryBanner";
import FooterSection from "@/components/sections/home/FooterSection";
import Hero from "@/components/sections/home/Hero";
import MostPopular from "@/components/sections/home/MostPopular";
import NewArrivals from "@/components/sections/home/NewArrivals";
import NoiseCancelling from "@/components/sections/home/NoiseCancelling";
import TodaysOffer from "@/components/sections/home/TodaysOffer";
export default function Home() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Hero />
      <MostPopular />
      <AudioSection />
      <NewArrivals />
      <NoiseCancelling />
      <TodaysOffer />
      <ComingSoon />
      <ClientReviews />

      <div className="relative z-30">
        <DeliveryBanner />
      </div>

      <div className="relative z-20 -mt-[370px]">
        <NewsletterSignup />
      </div>

      <FooterSection />
    </div>
  );
}
