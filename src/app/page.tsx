"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    // Ensure page always loads at the top
    window.scrollTo(0, 0);
    
    // Remove any hash from URL that might cause scrolling
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

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