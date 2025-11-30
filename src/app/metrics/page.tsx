import Navbar from "@/components/Navbar";
import MetricsSection from "@/components/sections/MetricsSection";
import Footer from "@/components/sections/Footer";

export default function MetricsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <MetricsSection />
      </div>
      <Footer />
    </div>
  );
}
