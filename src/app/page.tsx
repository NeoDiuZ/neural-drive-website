import Navbar from "@/components/Navbar";
import HeroCluely from "@/components/HeroCluely";
import TrustSignals from "@/components/TrustSignals";
import FeatureHighlights from "@/components/FeatureHighlights";
import DemoSection from "@/components/DemoSection";
import TeamGrid from "@/components/TeamGrid";
import Partnerships from "@/components/Partnerships";
import CTAForm from "@/components/CTAForm";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCluely />
      <TrustSignals />
      <FeatureHighlights />
      <DemoSection />
      <TeamGrid />
      <Partnerships />
      <CTAForm />
      <SiteFooter />
    </>
  );
}