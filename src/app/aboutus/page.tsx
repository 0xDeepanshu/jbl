import PageBanner from "@/components/ui/PageBanner";
import OurHistory from "@/components/sections/about/OurHistory";
import WhatWeOffer from "@/components/sections/about/WhatWeOffer";
import NewsletterSignup from "@/components/sections/about/NewsletterSignup";

export default function AboutPage() {
    return (
        <main>
            <PageBanner
                title="ABOUT US"
                subtitle="Lorem Ipsum Dolor Sit Amet"
                breadcrumbs={[
                    { label: "Home Page", href: "/" },
                    { label: "About Us" },
                ]}
                bgImage="/bg/background hero main.png"
            />
            <OurHistory />
            <WhatWeOffer />
            <NewsletterSignup compact />
        </main>
    );
}
