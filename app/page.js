import Hero from "@components/hero/Hero";
import Testimonial from "@components/testimonials/SimpleCentered";
import OffsetList from "@components/features/OffsetList.js";
import LogoCloud from "@components/stats/Stat.js";
import TeamCTA from "@components/CTA/CTA1.js";
import FAQ from "@components/FAQ/FAQ1.js";
import ProductScreenshot from "@components/features/ProductScreenshot";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <OffsetList />
      <LogoCloud />
      <ProductScreenshot />
      <Testimonial />
      <TeamCTA />
      <FAQ />
    </main>
  );
}
