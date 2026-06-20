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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#111111]">
      <Navbar />
      <Hero />
      <CorridorCards />
      <CurrencyCalculator />
      <HowItWorks />
      <SecuritySection />
      <WhyCush />
      <StatsSection />
      <AfricaMapSection />
      <TeamSection />
      <BetaSignup />
      <Footer />
    </main>
  );
}