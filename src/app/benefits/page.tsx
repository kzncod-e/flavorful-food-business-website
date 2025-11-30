import Navbar from "@/components/Navbar";
import BenefitsSection from "@/components/sections/BenefitsSection";
import Footer from "@/components/sections/Footer";

export default function BenefitsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <BenefitsSection />
      </div>
      <Footer />
    </div>
  );
}
