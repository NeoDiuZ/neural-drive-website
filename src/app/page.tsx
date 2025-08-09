import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import Urgency from "@/components/Urgency";
import CTAForm from "@/components/CTAForm";
import FAQ from "@/components/FAQ";
import SiteFooter from "@/components/SiteFooter";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function Home() {
  return (
    <>
      <ExitIntentModal />
      <main className="min-h-screen">
        <Hero />
        <TrustBar />
        <ProblemStatement />
        <Solution />
        <Demo />
        <Team />
        <Urgency />
        <CTAForm />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}
// test deploy