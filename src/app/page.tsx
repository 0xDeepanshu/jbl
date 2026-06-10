import Image from "next/image";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/home/Hero";
import AudioSection from "@/components/sections/home/AudioSection";
import MostPopular from "@/components/sections/home/MostPopular";
import NewArrivals from "@/components/sections/home/NewArrivals";
import NoiseCancelling from "@/components/sections/home/NoiseCancelling";
import TodaysOffer from "@/components/sections/home/TodaysOffer";
import ComingSoon from "@/components/sections/home/ComingSoon";
import ClientReviews from "@/components/sections/home/ClientReviews";
import DeliveryBanner from "@/components/sections/home/DeliveryBanner";
import FooterSection from "@/components/sections/home/FooterSection";
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
      <DeliveryBanner />

      <FooterSection />
    </div>
  );
}
