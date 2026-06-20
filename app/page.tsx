import Navbar from "./components/Navbar";
import CurrencyCalculator from "./components/CurrencyCalculator";
import HowItWorks from "./components/HowItWorks";
import SecuritySection from "./components/SecuritySection";
import WhyCush from "./components/WhyCush";
import StatsSection from "./components/StatsSection";
import BetaSignup from "./components/BetaSignup";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CorridorCards from "./components/CorridorCards";
import TeamSection from "./components/TeamSection";
import AfricaMapSection from "./components/AfricaMapSection";
import AnimatedBackground from "./components/AnimatedBackground";
import FadeIn from "./components/FadeIn";
import ImageShowcase from "./components/ImageShowcase";
import MoneyFlowSection from "./components/MoneyFlowSection";
import Testimonials from "./components/Testimonials";
import InfrastructureSection from "./components/InfrastructureSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#111111]">
        <Navbar />
      <FadeIn>
        <AnimatedBackground />
      </FadeIn>
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <CorridorCards />
      </FadeIn>
      <FadeIn>
        <ImageShowcase />
      </FadeIn>
      <FadeIn>
        <MoneyFlowSection />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <InfrastructureSection />
      </FadeIn>
      <FadeIn>
        <CurrencyCalculator />
      </FadeIn>
      <FadeIn>
        <HowItWorks />
      </FadeIn>
      <FadeIn>
        <SecuritySection />
      </FadeIn>
      <FadeIn>
        <WhyCush />
      </FadeIn>
      <FadeIn>
        <StatsSection />
      </FadeIn>
      <FadeIn>
        <AfricaMapSection />
      </FadeIn>
      <FadeIn>
        <TeamSection />
      </FadeIn>
      <FadeIn>
        <BetaSignup />
      </FadeIn>
      <Footer />
    </main>
  );
}