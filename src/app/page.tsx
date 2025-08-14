import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import HeroCluely from "@/components/HeroCluely";
import FeatureHighlights from "@/components/FeatureHighlights";
import ProblemStats from "@/components/ProblemStats";
import DemoSection from "@/components/DemoSection";
import TeamGrid from "@/components/TeamGrid";
import Partnerships from "@/components/Partnerships";

import Manifesto from "@/components/Manifesto";
import StickyCTA from "@/components/StickyCTA";
import CTAForm from "@/components/CTAForm";
import SiteFooter from "@/components/SiteFooter";
import CompetitionWins from "@/components/CompetitionWins";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <HeroCluely />
      <Manifesto />
      <ProblemStats />
      <FeatureHighlights />
      <DemoSection />
      <TeamGrid />
      <CompetitionWins />
      <Partnerships />
      <CTAForm />
      <StickyCTA />
      <SiteFooter />
    </>
  );
}