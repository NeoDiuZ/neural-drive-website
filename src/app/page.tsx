import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import HeroCluely from "@/components/HeroCluely";
import FeatureHighlights from "@/components/FeatureHighlights";
import ProblemStats from "@/components/ProblemStats";
import DemoSection from "@/components/DemoSection";
import TeamGrid from "@/components/TeamGrid";
import Partnerships from "@/components/Partnerships";
import TrustMarquee from "@/components/TrustMarquee";
import Manifesto from "@/components/Manifesto";
import StickyCTA from "@/components/StickyCTA";
import CTAForm from "@/components/CTAForm";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <div className="pt-10" />
      <HeroCluely />
      <TrustMarquee />
      <Manifesto />
      <ProblemStats />
      <FeatureHighlights />
      <DemoSection />
      <TeamGrid />
      <Partnerships />
      <CTAForm />
      <StickyCTA />
      <SiteFooter />
    </>
  );
}